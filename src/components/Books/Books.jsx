import BookCard from "../BookCard/BookCard";

import classes from "./Books.module.scss";

const Books = ({ books }) => {
  return (
    <div className={classes.books}>
      {books.map((book) => (
        <BookCard key={book.id} book={book.volumeInfo} />
      ))}
    </div>
  );
};

export default Books;
