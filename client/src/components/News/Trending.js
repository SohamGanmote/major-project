import styles from "./Trending.module.css";
const Trending = (props) => {
  const getValues = (e) => {
    const joined_date = new Date().toISOString().replace(/T.*/, "");
    fetch(
      `https://newsapi.org/v2/everything?q=${e.target.innerText
        .slice(1)
        .trim()}&from=${joined_date}&sortBy=publishedAt&apiKey=fbb5f3957a4a4a9ba8950b6e78849172`
    )
      .then((data) => {
        return data.json();
      })
      .then((news) => {
        props.setNews(news.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className={styles.Trending}>
        <h3>Trending Topics 📈</h3>
      </div>
      <div className={styles.SearchTerms}>
        <p onClick={getValues}># India</p>
        <p onClick={getValues}># Tesla</p>
        <p onClick={getValues}># Apple</p>
        <p onClick={getValues}># Twitter</p>
        <p onClick={getValues}># Space</p>
        <p onClick={getValues}># NASA</p>
        <p onClick={getValues}># Youtube</p>
        <p onClick={getValues}># Meta</p>
      </div>
    </>
  );
};
export default Trending;
