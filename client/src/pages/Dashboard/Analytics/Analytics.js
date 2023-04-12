import styles from "./Analytics.module.css";

import jwt_decode from "jwt-decode";

import Greets from "../../../components/Dashboard/Analytics/Greets";
import Cards from "../../../components/Dashboard/Analytics/Cards";

const Analytics = () => {
  let decodedToken;

  if (localStorage.getItem("accessToken")) {
    decodedToken = jwt_decode(localStorage.getItem("accessToken"));
  }

  return (
    <>
      <div className={styles.Analytics}>
        <Greets name={decodedToken.user_id} />
        <h2>Overview</h2>
        <Cards />
      </div>
    </>
  );
};
export default Analytics;
