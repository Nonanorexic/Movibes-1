import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Registration";
import Login from "./Login";
import Error from "./Error";
import SetPreference from "./SetPreference";
import HomePage from "./HomePage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/set-preference" element={<SetPreference />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
