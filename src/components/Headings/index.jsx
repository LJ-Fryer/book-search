import classes from "./headings.module.scss";

export const H1 = ({ color = "primary", children, ...rest }) => {
  return (
    <h1 className={`${classes.heading} ${classes[color]}`} {...rest}>
      {children}
    </h1>
  );
};

export const H2 = ({ color = "primary", children, ...rest }) => {
  return (
    <h2 className={`${classes.heading} ${classes[color]}`} {...rest}>
      {children}
    </h2>
  );
};

export const H3 = ({ color = "primary", children, ...rest }) => {
  <h3 className={`${classes.heading} ${classes[color]}`} {...rest}>
    {children}
  </h3>;
};
