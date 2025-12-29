import { useState } from "react";
import { H2 } from "../Headings";
import classes from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  const [expanded, setExpanded] = useState(false);
  // Each book in the grid should have an image, author, title and description
  console.log(book);
  return (
    <article className={classes.card}>
      <H2
        className={expanded ? classes.expanded : classes.truncated}
        onClick={() => setExpanded(!expanded)}
      >
        {book.title}
      </H2>
      <p>{book.authors.length > 1 ? book.authors.join(", ") : book.authors}</p>
      <p
        className={expanded ? classes.expanded : classes.truncated}
        onClick={() => setExpanded(!expanded)}
      >
        {book.description}
      </p>
      <img src={book.imageLinks.smallThumbnail} alt={book.title} />
    </article>
  );
};

export default BookCard;
