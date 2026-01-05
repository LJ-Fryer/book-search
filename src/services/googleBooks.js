import imageNotAvailable from "../assets/image_na.jpg";
export const getAllBooks = async (query) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
  const response = await fetch(`${url}`);

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const responseData = await response.json();
  const items = responseData.items || [];

  return items.map((item) => {
    const info = item.volumeInfo || {};
    const authors = !info.authors
      ? null
      : info.authors.length > 1
      ? info.authors.join(", ")
      : info.authors;
    const thumbnail = info.imageLinks?.smallThumbnail || imageNotAvailable;
    return {
      id: item.id,
      title: info.title || null,
      authors: authors || null,
      description: info.description || null,
      thumbnail,
    };
  });
};
