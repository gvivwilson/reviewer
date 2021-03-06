import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Route path="/" exact component={Login} />
      </BrowserRouter>
    </div>
  );
};

export default App;
