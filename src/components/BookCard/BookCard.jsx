import { useState } from "react";
import { H2, P } from "../Headings";
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

      <div className={classes.bookcard}>
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
              <P className={`${classes.faded}, ${classes.authors}`}>
                Author uavailable
              </P>
            )}
          </P>
        </div>
      </div>
      <div className={classes.card_btm}>
        <P
          className={expanded ? classes.expanded : classes.truncated}
          onClick={() => setExpanded(!expanded)}
        >
          {book.description ? (
            book.description
          ) : (
            <P className={classes.faded}>Description unavailable</P>
          )}
        </P>
      </div>
    </article>
  );
};

export default BookCard;
