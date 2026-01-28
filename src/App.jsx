import { useEffect, useState } from "react";
import { getBooks } from "./services/getBooks";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Books from "./components/Books/Books";
import LoadImageComponent from "./components/LoadImageComponent/LoadImageComponent";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { P } from "./components/Headings";

function App() {
  const { query, setQuery, books, fetchStatus, error, bookSearch } =
    getBooks("");
  const handleSubmit = (e) => {
    e.preventDefault();
    bookSearch(query);
  };

  return (
    <div className="app">
      <Header />

      <Form
        onInputChange={(e) => {
          setQuery(e.target.value);
        }}
        onSubmit={handleSubmit}
        query={query}
      />
      {/* {!books && <LoadImageComponent />} */}

      {fetchStatus === "LOADING" && <P>Loading...</P>}
      {fetchStatus === "PENDING" && <LoadImageComponent />}
      {fetchStatus === "SUCCESS" && (
        <P>
          Search results for ... <strong>"{query}"</strong>
        </P>
      )}
      {fetchStatus === "SUCCESS" && <Books books={books} />}

      {fetchStatus == "FAILURE" && (
        <P style={{ color: "red" }}>{error.message}</P>
      )}
      <Footer />
    </div>
  );
}

export default App;
