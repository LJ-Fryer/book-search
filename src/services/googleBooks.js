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
      ? "Unknown author"
      : info.authors.length > 1
      ? info.authors.join(", ")
      : info.authors;
    const thumbnail =
      info.imageLinks?.smallThumbnail || "https://placekeanu.com/250/g";
    console.log(info, "authors: ", authors, thumbnail);
    return {
      id: item.id,
      title: info.title || "No title available",
      authors: authors,
      description: info.description || "No description available",
      thumbnail,
    };
  });
};

// console.log("responseData: ", items);
