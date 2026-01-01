import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Books from "./components/Books/Books";
import Footer from "./components/Footer/Footer";

import { getAllBooks } from "./services/googleBooks";
import "./App.scss";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("PENDING");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await getAllBooks(query);
    setBooks(results);
  };

  useEffect(() => {
    setFetchStatus("LOADING");
    getAllBooks()
      .then((b) => {
        setBooks(b.items);
        setFetchStatus("SUCCESS");
      })
      .catch((e) => {
        setError(e);
        setFetchStatus("FAILURE");
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Form
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        query={query}
      />
      <Books books={books} />
      <Footer />
    </div>
  );
}

export default App;
