import React from "react";
import NewsFooter from "./NewsFooter";
import NewsHighlighted from "./NewsHighlighted";
import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <main className="content__main-container">
      <NewsHighlighted />
      <Sidebar />
      <NewsFooter />
    </main>
  );
};

export default Content;
