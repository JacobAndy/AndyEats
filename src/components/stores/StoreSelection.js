import React, { Component } from "react";
import Store from "./Store";
import "../../Sass/output.css";

export default class StoreSelection extends Component {
  render() {
    return (
      <main>
        <Store name="test" location="random address 123" hours="6am-9pm" />
      </main>
    );
  }
}
