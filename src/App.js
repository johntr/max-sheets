import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Picture from "./pages/picture";
import Sentences from "./pages/sentences";

function Home() {
  return (
    <ul>
      <Link to="/picture">
        <li>Picture</li>
      </Link>
      <Link to="/sentences">
        <li>Sentences</li>
      </Link>
    </ul>
  );
}
function App() {
  return (
    <Router>
      <Route path="/picture" component={Picture} />
      <Route path="/sentences" component={Sentences} />
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;
