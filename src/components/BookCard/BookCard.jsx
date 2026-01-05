import { useState } from "react";
import { H2, P, Flexbox } from "../Headings";
import classes from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className={classes.card}>
      <H2
        className={`${classes.heading} ${
          expanded ? classes.expanded : classes.truncated
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        {book.title ? (
          book.title
        ) : (
          <span className={classes.faded}>Title unavailable</span>
        )}
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
          <P className={classes.authors}>
            {book.authors ? (
              book.authors
            ) : (
              <span className={classes.faded}>Author uavailable</span>
            )}
          </P>
          <P
            className={expanded ? classes.expanded : classes.truncated}
            onClick={() => setExpanded(!expanded)}
          >
            {book.description ? (
              book.description
            ) : (
              <span className={classes.faded}>Description unavailable</span>
            )}
          </P>
        </div>
      </Flexbox>
    </article>
  );
};

export default BookCard;
