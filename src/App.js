import React, { Component } from "react";
import routes from "./routes";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./Sass/output.css";

class App extends Component {
  render() {
    return (
      <div className="main-app-container">
        <NavBar />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
