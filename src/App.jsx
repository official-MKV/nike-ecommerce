import React from "react";
import "./App.css";
import {
  Hero,
  Sales,
  FlexContent,
  Stories,
  Footer,
  Navbar,
  Cart,
} from "./Components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./Data/data";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative ">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
        <Footer footerAPI={footerAPI} />
      </main>
    </>
  );
};

export default App;
