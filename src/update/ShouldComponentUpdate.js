import React, { Component } from "react";

export default class ShouldComponentUpdate extends Component {
  state = {
    name: "This name should change in 3 sec"
  };

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate", newProps, newState);
    return false;
    // return true;
  }

  componentDidMount() {
    console.log("componentDidMount");

    setTimeout(() => {
      this.setState({ name: "This is a componentDidMount Method" });
    }, 3000);
  }

  render() {
    console.log("Render");

    return (
      <div>
        <h3>ShouldComponentUpdate</h3>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
