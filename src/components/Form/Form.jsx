import classes from "./Form.module.scss";

const Form = ({ onSubmit, query, onInputChange }) => {
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <div className="input_container"></div>
      <input
        type="search"
        name="userQuery"
        id="userInput"
        value={query}
        placeholder="Book title, author..."
        onChange={onInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
