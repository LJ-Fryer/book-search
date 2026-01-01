import classes from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={classes.footer}>
      Project code at{" "}
      <a href="https://github.com/LJ-Fryer/book-hunt/tree/main" target="_blank">
        <FontAwesomeIcon icon={faGithub} className={classes.icon} />
      </a>
    </div>
  );
};

export default Footer;
