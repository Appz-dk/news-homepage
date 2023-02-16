import React from "react";
import NewsFooter from "./NewsFooter";
import NewsHighlighted from "./NewsHighlighted";
import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <main>
      <section className="content__main-container">
        <NewsHighlighted />
        <Sidebar />
      </section>
      <section className="content__secondary-container">
        <NewsFooter />
      </section>
    </main>
  );
};

export default Content;
