import classes from "./headings.module.scss";

export const H1 = ({ color, children, className, ...rest }) => {
  return (
    <h1
      className={`${classes.heading} ${classes.h1} ${className} ${classes[color]}`}
      {...rest}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, className, ...rest }) => {
  return (
    <h2 className={`${classes.heading} ${classes.h2} ${className}`} {...rest}>
      {children}
    </h2>
  );
};

export const P = ({ children, className, ...rest }) => {
  return (
    <p className={`${classes.para} ${className}`} {...rest}>
      {children}
    </p>
  );
};
