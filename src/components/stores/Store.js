import React, { Component } from "react";
import "../../Sass/output.css";

export default class Store extends Component {
  state = {
    descriptionFlag: false
  };
  render() {
    let { name, hours, description } = this.props;
    let { descriptionFlag } = this.state;
    return (
      <div
        className={
          descriptionFlag
            ? "ind-store-details__active-click"
            : "ind-store-details"
        }
        onClick={() => this.setState({ descriptionFlag: !descriptionFlag })}
      >
        <section>
          <i className="down" />
          <p>{name}</p>
          <p>{hours}</p>
        </section>
        {descriptionFlag ? <p>{description}</p> : null}
      </div>
    );
  }
}
