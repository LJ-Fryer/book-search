export const getAllBooks = async () => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=fantastic`;
  const response = await fetch(`${url}`);
  console.log("Status:", response.status);
  console.log("FETCH CALLED");

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
};
