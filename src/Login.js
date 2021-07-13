import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
import { useState } from "react";

function Login() {
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(Email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    //some firebse shittttt
    auth.createUserWithEmailAndPassword(Email, password).then((auth) => {
      console.log(auth);
      if (auth) {
        history.push("/");
      }
    });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://i2.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png?resize=768%2C219&ssl=1"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail or Ph.No</h5>
          <input
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login_SignInButton" onClick={SignIn} type="submit">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to
          <a className="link" href="">
            Amazon's Clone Conditions of Use and Privacy Notice.
          </a>
        </p>
        <button className="login_SignUpButton" onClick={register} type="submit">
          Create your Amazon Account.
        </button>
      </div>
    </div>
  );
}

export default Login;
