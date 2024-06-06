import React, { Component } from "react";

export class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Constructor Method"
    };
  }

  static getDerivedStateFromProps(props, state) {
    // return null;
    return { name: props.nameFromParent };
  }

  render() {
    return (
      <div>
        This is a <u>{this.state.name}</u>
      </div>
    );
  }
}

export default class GetDerivedStateFromPropsMethod extends Component {
  render() {
    return (
      <div>
        <h3>getDerivedStateFromProps</h3>

        <ChildComponent nameFromParent="getDerivedStateFromProps Method" />
      </div>
    );
  }
}
