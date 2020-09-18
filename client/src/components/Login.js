import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initCredentials = {
  username: "",
  password: "",
};

const Login = () => {
  const history = useHistory();
  const [credentials, setCredentials] = useState(initCredentials);

  const onFormChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/bubble-page");
      })
      .catch((err) => {
        console.log(err, "error");
      });
    setCredentials(initCredentials);
  };
  // make a post request to retrieve a token from the api

  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>

      <section className="form-style">
        <h1 className="form-header">Login Form</h1>
        <form onSubmit={onSubmit} className="login-form">
          <label className="form-label">
            Username &nbsp;
            <input
              name="username"
              type="text"
              placeholder="user name"
              value={credentials.username}
              onChange={onFormChange}
            />
          </label>
          <label className="form-label">
            Password &nbsp;
            <input
              name="password"
              type="password"
              placeholder="password"
              value={credentials.password}
              onChange={onFormChange}
            />
          </label>
          <br />
          <button className="submit">Login</button>
        </form>
      </section>
    </>
  );
};

export default Login;
