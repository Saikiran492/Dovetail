import React, { Component } from "react";
import { countries } from "./CountryLists";
import ReadMeModal from "./ReadMeModal";
import InputField from "./../common/InputField";

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
    const { firstName, lastName, number, country, countryLists } = this.state;
    return (
      <div className="areaStyle">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Registration Form</legend>
            <div>
              <InputField
                name="firstName"
                label="FirstName"
                value={firstName}
                onChange={this.handleInput}
                error={firstNameErr}
              />
            </div>
            <div>
              <InputField
                name="lastName"
                label="LastName"
                value={lastName}
                onChange={this.handleInput}
                error={lastNameErr}
              />
            </div>
            <div>
              <InputField
                name="number"
                type="tel"
                label="Phone Number"
                value={number}
                onChange={this.handleInput}
                error={numberErr}
              />
            </div>
            <div>
              <label htmlFor="country">Country:</label>
              <select
                name="country"
                className="m-2 countryHeight"
                value={country}
                onChange={this.handleInput}
                id="country"
              >
                <option value="select">--Select--</option>
                {countryLists.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              {countryErr && <div className="text-danger">{countryErr}</div>}
            </div>
            <div>
              <input
                className="my-2 btn btn-primary"
                type="submit"
                value="Submit"
              />
            </div>
          </fieldset>
        </form>
        <div className="me-5 float-end">
          <ReadMeModal />
        </div>
      </div>
    );
  }
}

export default RegisterForm;
