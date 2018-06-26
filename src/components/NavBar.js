import React, { Component } from "react";
import "../Sass/output.css";

export default class Navbar extends Component {
  state = {
    burgerToggle: false
  };
  render() {
    let { burgerToggle } = this.state;
    return (
      <nav
        className="nav"
        onClick={() => this.setState({ burgerToggle: !burgerToggle })}
      >
        <section
          className={
            burgerToggle
              ? "nav__sections nav-sections-visible"
              : "nav__sections nav-sections-hidden"
          }
        >
          <h5>test</h5>
          <h5>test</h5>
          <h5>test</h5>
          <h2>Andy Eats</h2>
          <h5>test</h5>
          <h5>test</h5>
          <h5>test</h5>
        </section>
      </nav>
    );
  }
}
