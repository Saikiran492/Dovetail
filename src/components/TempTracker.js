import React, { Component } from "react";

class TempTracker extends Component {
  state = { temprature: [], submittedValue: "" };

  handleChange = ({ target: input }) => {
    const { name, value } = input;
    this.setState({ [name]: value });
  };
  insert = (e) => {
    e.preventDefault();
    let temp = this.state.submittedValue;
    if (temp >= 0 && temp <= 150) {
      const arr = [...this.state.temprature];
      arr.push(temp);
      this.setState({ temprature: arr, submittedValue: "" });
    }
  };
  get_min = () => {
    const value =
      this.state.temprature.length === 0
        ? null
        : Math.min(...this.state.temprature);
    return value;
  };
  get_max = () => {
    const value =
      this.state.temprature.length === 0
        ? null
        : Math.max(...this.state.temprature);
    return value;
  };
  get_mean = () => {
    const { temprature } = this.state;
    let total = 0;
    temprature.forEach((temp) => (total += Number(temp)));
    console.log(total);

    return temprature.length ? parseFloat(total / temprature.length) : "";
  };
  get_mode = () => {
    let arr = [];
    let temp = [...this.state.temprature];
    for (let i = 0; i < temp.length; i++) {
      for (let j = i + 1; j < temp.length; j++) {
        if (temp[i] === temp[j]) {
          arr.push(temp[i]);
        }
      }
    }
    if (arr.length === 0) {
      return temp[0];
    }

    if (arr.length > 0) {
      let max = -Infinity,
        i = 0;
      while (arr[i] > max) {
        max = arr[i];
        i++;
      }
      return max;
    }
  };
  render() {
    return (
      <div
        style={{
          margin: "auto",
          width: "30%",
          marginTop: "50px",
        }}
      >
        <form onSubmit={this.insert}>
          <label htmlFor="temprature">Enter the Temprature:</label>
          <input
            className="m-2"
            type="number"
            id="temprature"
            name="submittedValue"
            value={this.state.submittedValue}
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
        </form>
        <div className="mt-3">
          <p>Minimun Value:{this.get_min()}</p>
          <p>Maximum Value:{this.get_max()}</p>
          <p>Mean value:{this.get_mean()}</p>
          <p>Mode:{this.get_mode()}</p>
        </div>
      </div>
    );
  }
}

export default TempTracker;
