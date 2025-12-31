import loadImage from "../../assets/load_image.jpg";
import BookCard from "../BookCard/BookCard";

import classes from "./Books.module.scss";

const Books = ({ books }) => {
  if (!books) {
    return (
      <div className={classes.placeholder_image}>
        <img src={loadImage} alt="Search for a book" />
      </div>
    );
  } else
    return (
      <div className={classes.books}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    );
};

export default Books;
