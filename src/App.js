import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="/ourwork" exact element={<OurWork />} />
        <Route path="/work/:id" element={<MovieDetail />} />
        <Route path="/contactus" exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
