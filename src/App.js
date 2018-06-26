import React, { Component } from "react";
import routes from "./routes";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
