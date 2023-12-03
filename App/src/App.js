import "./App.css";
import React from "react";
// import Header from "./components/Header"
// import Content from "./components/Content";
// import Footer from "./components/Footer";
import Info from "./portfolio/components/Info";
import About from "./portfolio/components/About";
import pic from "./portfolio/photo_1_2023-10-22_14-39-42.jpg";
import Interests from "./portfolio/components/Interests"
import Footer from "./portfolio/components/Footer";

function App() {
  return (
    <div className="card">
      <img src={pic} className="App-logo" alt="logo" />
      <div className="container">
        <Info />
        <About />
        <Interests/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
