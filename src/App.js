import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />

      <Hero />
      <Resume />
      {/* <About /> */}
      <Skills />
      <Projects />

      <Contact />
      <Footer />
      {/* <h1 className="text-3xl font-bold underline text-red-500">hi</h1> */}
    </div>
  );
}

export default App;
