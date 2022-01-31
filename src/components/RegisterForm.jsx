import React, { Component } from "react";
import { countries } from "./CountryLists";
import { ReadMeModal } from "./ReadMeModal";

class RegisterForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    number: "",
    countryLists: [...countries],
    country: "select",
    errors: {},
  };
  initialState = this.state;

  handleFormValidation = () => {
    const { firstName, lastName, number, country } = this.state;
    let errors = {};
    let isFormValid = true;

    if (!firstName || firstName.length < 5) {
      isFormValid = false;
      errors["firstNameErr"] =
        "FirstName is required and should have minimun Five characters";
    }
    if (!lastName || lastName.length < 5) {
      isFormValid = false;
      errors["lastNameErr"] =
        "LastName is required and should have minimun Five characters";
    }
    if (!number || !Boolean(number / 2)) {
      isFormValid = false;
      errors["numberErr"] =
        "Phone Number is required and should be a valid one";
    }
    if (!country || country === "select") {
      isFormValid = false;
      errors["countryErr"] = "Country is required";
    }
    this.setState({ errors });
    return isFormValid;
  };

  handleInput = ({ target: input }) => {
    const { name, value } = input;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.handleFormValidation()) {
      alert("'Your account has been created successfully.");
      this.setState(this.initialState);
    }
  };
  render() {
    const { firstNameErr, lastNameErr, numberErr, countryErr } =
      this.state.errors;
    return (
      <div style={{ margin: "auto", width: "35%", marginTop: "50px" }}>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Registration Form</legend>
            <div>
              <label htmlFor="fname">FirstName:</label>
              <input
                className="m-2"
                type="text"
                id="fname"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInput}
              ></input>
              {firstNameErr && (
                <div className="text-danger">{firstNameErr}</div>
              )}
            </div>
            <div>
              <label htmlFor="lname">LastName:</label>
              <input
                className="m-2"
                type="text"
                id="lname"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInput}
              ></input>{" "}
              {lastNameErr && <div className="text-danger">{lastNameErr}</div>}
            </div>
            <div>
              <label htmlFor="number">Phone Number:</label>
              <input
                className="m-2"
                type="tel"
                id="number"
                name="number"
                value={this.state.number}
                onChange={this.handleInput}
                placeholder="Phone Number"
              ></input>
              {numberErr && <div className="text-danger">{numberErr}</div>}
            </div>
            <div>
              <label htmlFor="country">Country:</label>
              <select
                name="country"
                className="m-2"
                value={this.state.country}
                onChange={this.handleInput}
                style={{ height: "35px" }}
                id="country"
              >
                <option value="select">--Select--</option>
                {this.state.countryLists.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              {countryErr && <div className="text-danger">{countryErr}</div>}
            </div>
            <input
              className="my-2 btn btn-primary"
              type="submit"
              value="Submit"
            />{" "}
            <ReadMeModal />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
