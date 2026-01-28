import classes from "./Footer.module.scss";
import { P } from "../Headings/index.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <P>
        Project code at{" "}
        <a
          href="https://github.com/LJ-Fryer/book-hunt/tree/main"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} className={classes.icon} />
        </a>
      </P>
    </footer>
  );
};

export default Footer;
