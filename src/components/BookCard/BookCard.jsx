import { useState } from "react";
import { H2, P, Flexbox } from "../Headings";
import classes from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  const [expanded, setExpanded] = useState(false);
  // Each book in the grid should have an image, author, title and description
  return (
    <article className={classes.card}>
      <H2
        className={`${classes.card_title} ${
          expanded ? classes.expanded : classes.truncated
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        {book.title}
      </H2>
      <Flexbox>
        <div className={classes.image_box}>
          <img
            className={classes.book_image}
            src={book.thumbnail}
            alt={book.title}
          />
        </div>
        <div className={classes.info_box}>
          <P className={classes.authors}>{book.authors}</P>
          <P
            className={expanded ? classes.expanded : classes.truncated}
            onClick={() => setExpanded(!expanded)}
          >
            {book.description}
          </P>
        </div>
      </Flexbox>
    </article>
  );
};

export default BookCard;
