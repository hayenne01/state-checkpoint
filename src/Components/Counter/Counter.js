import React, { Component } from "react";
import img from "../Profileimg/1.png";
import "animate.css";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      text: "",
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div className="profile">
        <h1 className="animate__animated animate__flip">Hayenne Abdeljelil </h1>
        <p>
          I'm 21 years old from Monastir , Tunisia . <br />
          I'm studiying web devloppment .
        </p>
        <img
          className="animate__animated animate__fadeInLeftBig"
          src={img}
          alt="profileimg"
        />
        <h2>Full Stack JS Devlopper and a pro Photoshop editor</h2>
      </div>
    );
  }
}

export default Counter;
