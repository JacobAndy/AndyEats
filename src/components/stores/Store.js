import React, { Component } from "react";
import "../../Sass/output.css";

export default class Store extends Component {
  render() {
    let { name, location, hours } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{location}</p>
        <p>{hours}</p>
      </div>
    );
  }
}
