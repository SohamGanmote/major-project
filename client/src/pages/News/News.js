import styles from "./News.module.css";
import Button from "../../components/UI/Button/Button";
import Trending from "../../components/News/Trending";
import NewsSearchResult from "../../components/News/NewsSearchResult";
import { useState } from "react";
const News = (props) => {
  const [url, setUrl] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const inputChangeHandler = (e) => {
    const current_date = new Date().toISOString().replace(/T.*/, "");
    setSearchTerm(e.target.value);
    setUrl(
      `https://newsapi.org/v2/top-headlines?q=${e.target.value}&from=${current_date}&sortBy=publishedAt&apiKey=fbb5f3957a4a4a9ba8950b6e78849172`
    );
  };
  const featchNews = (trendingUrl) => {
    fetch(url === undefined ? trendingUrl : url)
      .then((data) => {
        return data.json();
      })
      .then((news) => {
        if (news.articles.length !== 0) {
          setSearchTerm("");
          setPage(<NewsSearchResult articles={news.articles} />);
        } else {
          setPage(<NewsSearchResult articles={"No News"} />);
        }
      });
  };
  const [page, setPage] = useState(
    <Trending setUrl={setUrl} featchNews={featchNews} />
  );
  return (
    <div className={styles.NewsPage}>
      <div>
        <form className={styles.searchBox} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="# Search Topic"
            className={styles.searchInput}
            onChange={inputChangeHandler}
            value={searchTerm}
            required
          />
          <Button
            text="Search"
            onClick={featchNews}
            className={styles.searchBtn}
          />
        </form>
      </div>
      {page}
    </div>
  );
};
export default News;
