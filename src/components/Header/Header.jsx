import React from "react";
import classes from "./Header.module.scss";
import { H1 } from "../Headings";

const Header = () => {
  return (
    <div className={classes.header}>
      <H1>Dive into your next book</H1>
    </div>
  );
};

export default Header;
