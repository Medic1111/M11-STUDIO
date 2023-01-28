import React from "react";
import ReactDOM from "react-dom";
import classes from "./Portal.module.css";

const root = document.getElementById("portal");

const Wrapper = ({ children }) => {
  return <article className={classes.article}>{children}</article>;
};

const Portal = ({ children }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Wrapper>{children}</Wrapper>, root)}
    </React.Fragment>
  );
};

export default Portal;
