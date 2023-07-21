import React from "react";
import Header from "./Components.js/Header";
import Footer from "./Components.js/Footer";
import Content from "./Components.js/Content";
import SearchItem from "./Components.js/SearchItem";




function App() {


  return (
    <div className="App">
      <Header/>
      <SearchItem />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
