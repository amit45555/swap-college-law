import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
