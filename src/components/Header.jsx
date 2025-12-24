import React from "react";
import classes from "./Header.module.scss";
import { H1 } from "../Headings";

const Header = () => {
  return (
    <div className={classes.header}>
      <H1>We're going on a Book Hunt</H1>
    </div>
  );
};

export default Header;
