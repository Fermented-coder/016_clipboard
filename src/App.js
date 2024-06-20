import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Content } from "./components/Content";
import { End } from "./components/End";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Section />
      <Content />
      <End />
      <Footer />
    </div>
  );
}

export default App;
