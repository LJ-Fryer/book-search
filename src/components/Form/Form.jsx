import { useState } from "react";
import classes from "./Form.module.scss";

const Form = ({ onSubmit, query, onInputChange }) => {
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <div className="input_container"></div>
      <input
        type="text"
        name="userQuery"
        id="userInput"
        value={query}
        placeholder="Enter a book title..."
        onChange={onInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
