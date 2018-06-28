import React, { Component } from "react";
import Store from "./Store";
import "../../Sass/output.css";

export default class StoreSelection extends Component {
  render() {
    return (
      <main>
        <Store
          name="Papa Johns"
          hours="6am-9pm"
          description="Papa John's Pizza is an American restaurant franchise company. It runs the third largest take-out and pizza delivery restaurant chain in the United States"
        />
        <Store
          name="Pizza Hut"
          hours="6am-9pm"
          description="Pizza Hut is an American restaurant chain and international franchise founded in 1958. The company is known for its Italian-American cuisine menu including pizza and pasta, as well as side dishes and desserts."
        />
        <Store
          name="Jimmy Johns"
          hours="6am-9pm"
          description="Jimmy John's Franchise, LLC is a franchised sandwich restaurant chain, specializing in delivery"
        />
        <Store
          name="Dominos"
          hours="6am-9pm"
          description="Domino’s Pizza, Inc, now branded simply as Domino's, is an American pizza restaurant chain founded in 1960."
        />
        <Store
          name="Panera Bread"
          hours="6am-9pm"
          description="Panera Bread Company is an American chain of bakery-café fast casual restaurants in the United States and Canada."
        />
      </main>
    );
  }
}
