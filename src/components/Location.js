import React, { Component } from "react";
import "../Sass/output.css";

export default class Location extends Component {
  render() {
    return (
      <div>
        <div className="section-container">
          <h2 className="section-question">
            Where should we deliver to today?
          </h2>
          <input className="section-input input" placeholder="Street Address" />
          <div>
            <input className="section-input input" placeholder="City" />
            <select style={{ color: "black", borderStyle: "none", maxHeight: "200px" }}>
              <option className="option-value" value="AL">
                AL
              </option>
              <option className="option-value" value="AK">
                AK
              </option>
              <option className="option-value" value="AZ">
                AZ
              </option>
              <option className="option-value" value="AR">
                AR
              </option>
              <option className="option-value" value="CA">
                CA
              </option>
              <option className="option-value" value="CO">
                CO
              </option>
              <option className="option-value" value="CT">
                CT
              </option>
              <option className="option-value" value="DE">
                DE
              </option>
              <option className="option-value" value="FL">
                FL
              </option>
              <option className="option-value" value="GA">
                GA
              </option>
              <option className="option-value" value="HI">
                HI
              </option>
              <option className="option-value" value="ID">
                ID
              </option>
              <option className="option-value" value="IL">
                IL
              </option>
              <option className="option-value" value="IN">
                IN
              </option>
              <option className="option-value" value="IA">
                IA
              </option>
              <option className="option-value" value="KS">
                KS
              </option>
              <option className="option-value" value="KY">
                KY
              </option>
              <option className="option-value" value="LA">
                LA
              </option>
              <option className="option-value" value="ME">
                ME
              </option>
              <option className="option-value" value="MD">
                MD
              </option>
              <option className="option-value" value="MA">
                MA
              </option>
              <option className="option-value" value="MI">
                MI
              </option>
              <option className="option-value" value="MN">
                MN
              </option>
              <option className="option-value" value="MS">
                MS
              </option>
              <option className="option-value" value="MO">
                MO
              </option>
              <option className="option-value" value="MT">
                MT
              </option>
              <option className="option-value" value="NE">
                NE
              </option>
              <option className="option-value" value="NV">
                NV
              </option>
              <option className="option-value" value="NH">
                NH
              </option>
              <option className="option-value" value="NJ">
                NJ
              </option>
              <option className="option-value" value="NM">
                NM
              </option>
              <option className="option-value" value="NY">
                NY
              </option>
              <option className="option-value" value="NC">
                NC
              </option>
              <option className="option-value" value="ND">
                ND
              </option>
              <option className="option-value" value="OH">
                OH
              </option>
              <option className="option-value" value="OK">
                OK
              </option>
              <option className="option-value" value="OR">
                OR
              </option>
              <option className="option-value" value="PA">
                PA
              </option>
              <option className="option-value" value="RI">
                RI
              </option>
              <option className="option-value" value="SC">
                SC
              </option>
              <option className="option-value" value="SD">
                SD
              </option>
              <option className="option-value" value="TN">
                TN
              </option>
              <option className="option-value" value="TX">
                TX
              </option>
              <option className="option-value" value="UT">
                UT
              </option>
              <option className="option-value" value="VT">
                VT
              </option>
              <option className="option-value" value="VA">
                VA
              </option>
              <option className="option-value" value="WA">
                WA
              </option>
              <option className="option-value" value="WV">
                WV
              </option>
              <option className="option-value" value="WI">
                WI
              </option>
              <option className="option-value" value="WY">
                WY
              </option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
