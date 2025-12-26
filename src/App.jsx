import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import "./App.scss";

function App() {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(query);
    console.log("query: ", query);
  };
  return (
    <div className="app">
      <Header />
      <Form
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        query={query}
      />
    </div>
  );
}

export default App;
