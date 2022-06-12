import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListing from "./components/UserListing";
import Header from "./components/Header";
import "./App.css";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<UserListing />}></Route>
          <Route path="/user/:userId" element={<UserDetails />}></Route>
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;