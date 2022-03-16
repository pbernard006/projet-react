import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Header from "./components/Header";
import Home from "./components/Home";
import Match from "./components/Match";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match/:id" element={<Match />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
