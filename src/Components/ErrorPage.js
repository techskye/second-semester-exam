import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>404 Error</title>
        <meta name="description" content="This is the 404 Error page" />
        <link rel="cononical" href="/*" />
      </Helmet>
      <div className="err">
        <h3>Error 404: Something went wrong...</h3>
        <p>
          Go back to{" "}
          <span>
            <Link to="/">Home</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
