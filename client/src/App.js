import React from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import "./index.css";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
