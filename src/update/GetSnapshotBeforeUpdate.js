import React, { Component } from "react";

export default class getSnapshotBeforeUpdateMethod extends Component {
  state = {
    name: "constructor Method"
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "componentDidMount Method" });
    }, 3000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    if (prevState.name !== this.state.name) {
      document.getElementById("previous-state").innerHTML =
        "The previous state was " + prevState.name;
      return "Returned value";
    }
    return null;
  }

  // componentDidUpdate should be included when using getSnapshotBeforeUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState, snapshot);
    if (snapshot) {
      document.getElementById("current-state").innerHTML =
        "The current state is " + this.state.name;
    }
  }

  render() {
    console.log("render");
    return (
      <>
        <h3>getSnapshotBeforeUpdate</h3>
        <h5>
          This is a <u>{this.state.name}</u>
        </h5>
        <u>
          <p id="current-state"></p>
          <p id="previous-state"></p>
        </u>
      </>
    );
  }
}
