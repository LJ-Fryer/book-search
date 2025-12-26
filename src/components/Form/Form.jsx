import { useState } from "react";

const Form = ({ onSubmit, query, onInputChange }) => {
  return (
    <form onSubmit={onSubmit}>
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
