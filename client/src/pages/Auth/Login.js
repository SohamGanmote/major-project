import React, { useState } from "react";
import styles from "../../components/Auth/Login/Login.module.css"

import macintosh from "../../assets/macintosh.jpg"
import WellcomeText from "../../components/Auth/WellcomeText";
import SideBanner from "../../components/Auth/SideBanner";

import EmailAndPassInput from "../../components/Auth/Login/EmailAndPassInput";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const emailAndPasswordFormSubmitHandler = (event) => {
    event.preventDefault();
    // console.log("Email : " + emailInput);
    // console.log("Password : " + passwordInput);
  };
  return (
    <main className={styles.maindiv}>
      <SideBanner src={macintosh} />
      <section className={`${styles.login} container`}>
        <WellcomeText />
        <h2>Log In</h2>
        <p>Enter you Email and Password to Login on Shell</p>
        <EmailAndPassInput
          setEmailInput={setEmailInput}
          setPasswordInput={setPasswordInput}
          emailAndPasswordFormSubmitHandler={emailAndPasswordFormSubmitHandler}
        />
        <footer className={styles.footer}>
          <p>
            Dont have an account?{" "}
            <Link to="/auth/signup">Sign Up</Link>
          </p>
          <p>
            <a href="https://github.com/yasinbhojani/major-project">
              Forgot Password?
            </a>
          </p>
        </footer>
      </section>
    </main>
  );
};

export default Login;
