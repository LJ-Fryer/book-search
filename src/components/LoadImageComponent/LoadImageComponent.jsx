import classes from "./LoadImageComponent.module.scss";
import loadImage from "../../assets/load_image.jpg";

const LoadImage = () => {
  return (
    <figure className={classes.load_image}>
      <img src={loadImage} alt="Search for a book" />
      <figcaption className={classes.load_caption}>
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
};

export default LoadImage;
