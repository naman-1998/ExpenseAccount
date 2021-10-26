import React from "react";
import "./App.css";
import Routes from "./Components/Routes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
