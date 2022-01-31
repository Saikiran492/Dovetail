import React, { Component } from "react";

class AnagramTester extends Component {
  state = {
    firstWord: "",
    secondWord: "",
    isAnagramValue: false,
    subVal: false,
  };

  handleChange = ({ target: input }) => {
    const { name, value } = input;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const is_Anagram = (str1, str2) =>
      str1.toLowerCase().split("").sort().join("") ===
      str2.toLowerCase().split("").sort().join("");
    const value = is_Anagram(this.state.firstWord, this.state.secondWord);
    this.setState({ isAnagramValue: value, subVal: true });
  };

  render() {
    const { firstWord, secondWord, isAnagramValue, subVal } = this.state;
    return (
      <div
        style={{
          margin: "auto",
          width: "40%",
          marginTop: "50px",
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstWord">Enter the First Word:</label>
            <input
              className="m-2"
              type="text"
              id="firstWord"
              name="firstWord"
              value={firstWord}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="SecondWord">Enter the Second Word:</label>
            <input
              className="m-2"
              type="text"
              id="secondWord"
              name="secondWord"
              value={secondWord}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="submit" />
        </form>
        {subVal ? isAnagramValue ? <p>{"True"}</p> : <p>{"False"}</p> : ""}
      </div>
    );
  }
}

export default AnagramTester;
