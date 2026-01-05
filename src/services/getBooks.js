import { useState, useEffect } from "react";
import { getAllBooks } from "./googleBooks.js";

export const getBooks = (loadQuery = "") => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("PENDING");

  const bookSearch = async (qu) => {
    setFetchStatus("LOADING");
    try {
      const results = await getAllBooks(qu);
      setBooks(results);
      setFetchStatus("SUCCESS");
    } catch (e) {
      setError(e);
      setFetchStatus("FAILURE");
    }
  };
  useEffect(() => {
    "";
  }, []);

  return { query, setQuery, books, fetchStatus, error, bookSearch };
};
