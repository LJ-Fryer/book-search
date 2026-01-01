import loadImage from "../../assets/load_image.jpg";
import BookCard from "../BookCard/BookCard";

import classes from "./Books.module.scss";

const Books = ({ books }) => {
  if (!books) {
    return (
      <figure className={classes.placeholder_image}>
        <img src={loadImage} alt="Search for a book" />
        <figcaption className={classes.placeholder_caption}>
          Photo by{" "}
          <a
            href="https://unsplash.com/@jonasjacobsson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
          >
            Jonas Jacobsson
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com/photos/bokeh-photography-of-open-book-0FRJ2SCuY4k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
          >
            Unsplash
          </a>
        </figcaption>
      </figure>
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
