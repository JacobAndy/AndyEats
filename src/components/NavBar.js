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
        <div className={burgerToggle ? "topBurger topActive" : "topBurger"} />
        <div
          className={
            burgerToggle
              ? "middleBurger middleActive"
              : "middleBurger middleNotActive"
          }
        />
        <div
          className={
            burgerToggle ? "bottomBurger bottomActive" : "bottomBurger"
          }
        />

        <section
          className={
            burgerToggle
              ? "nav__sections nav-sections-visible"
              : "nav__sections nav-sections-hidden"
          }
        >
          <div className="tab-holder">
            <h5>test</h5>
            <h5>test</h5>
            <h5>test</h5>
            <h2>Andy Eats</h2>
            <h5>test</h5>
            <h5>test</h5>
            <h5>test</h5>
          </div>
        </section>
      </nav>
    );
  }
}
