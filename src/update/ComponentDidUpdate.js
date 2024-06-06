import React, { Component } from "react";

export default class componentDidUpdateMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "from previous state",
      update: ""
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "to current state" });
    }, 3000);
  }
  componentDidUpdate(prevState) {
    //useEffect
    console.log("componentDidUpdate");

    if (prevState.name !== this.state.name) {
      document.getElementById("statechange").innerHTML =
        "the state is changed &#127881;";
      // this.setState({ update: "the state is changed &#127881;" });
    }
  }
  render() {
    console.log("render");
    return (
      <div>
        <h3>componentDidUpdateMethod</h3>
        State changed <u>{this.state.name}</u>
        <p id="statechange">{this.state.update}</p>
      </div>
    );
  }
}
