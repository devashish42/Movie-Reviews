import React, { useState } from "react";

import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import "./Results.css";
import requests from "./requests";
function App() {
  const [SelectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="App">
      <Header />

      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={SelectedOption} />
    </div>
  );
}

export default App;
