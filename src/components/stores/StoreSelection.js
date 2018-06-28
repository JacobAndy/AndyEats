import React, { Component } from "react";
import Store from "./Store";
import "../../Sass/output.css";

export default class StoreSelection extends Component {
  render() {
    return (
      <main>
        <Store name="Papa Johns" hours="6am-9pm" />
        <Store name="Pizza Hut" hours="6am-9pm" />
        <Store name="Jimmy Johns" hours="6am-9pm" />
        <Store name="Dominos" hours="6am-9pm" />
        <Store name="Panera Bread" hours="6am-9pm" />
      </main>
    );
  }
}
