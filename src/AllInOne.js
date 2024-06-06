import React from "react";

export default class App extends React.Component {
  // Mount - 1
  constructor(props) {
    console.log("App - constructor");
    super(props);
    this.state = {
      value: 123,
      work: "IT",
      child2: false
    };
  }

  // Mount - 2, update - 1
  static getDerivedStateFromProps(props, state) {
    console.log("App - getDerivedStateFromProps", props, state);
    return null;
  }

  // Mount - 4
  componentDidMount() {
    console.log("App - componentDidMount");
  }

  // Update - 2
  shouldComponentUpdate(nextProps, nextState) {
    console.log("App - shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  // Update - 4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("App - getSnapshotBeforeUpdate", prevProps, prevState);
    return "From App getSnapshotBeforeUpdate";
  }

  // update - 5
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("App - componentDidUpdate", prevProps, prevState, snapshot);
  }

  changeValue() {
    this.setState({ value: Math.random().toString().substring(5) });
  }

  changeChild() {
    this.setState({ child2: this.state.child2 ? false : true });
  }

  // Mount - 3, update - 3
  render() {
    console.log("App - render");
    return (
      <>
        <h3>One For All</h3>
        <div>App Component</div>
        <div
          style={{
            display: "flex",
            margin: "auto",
            padding: "10px",
            flexDirection: "column",
            border: "1px solid gray",
            width: "400px",
            height: "150px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
              height: "100%"
            }}
          >
            {this.state.child2 ? (
              <Child2 value={this.state.value} />
            ) : (
              <Child value={this.state.value} />
            )}
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <button onClick={this.changeValue.bind(this)}>Change Value</button>
            <br />
            <button onClick={this.changeChild.bind(this)}>Change Child</button>
          </div>
        </div>
      </>
    );
  }
}

class Child extends React.Component {
  constructor(props) {
    console.log("Child - 1 - constructor");
    super(props);
    this.state = {
      value: "1234"
    };
  }

  componentDidMount() {
    console.log("Child - 1 - componentDidMount");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      "Child - 1 - getDerivedStateFromProps",
      props.value,
      state.value
    );
    if (!props.value) {
      // Telling component that props are same
      return null;
    }
    if (props.value !== state.value) {
      return {
        value: props.value
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Child - 1 - shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Child - 1 - getSnapshotBeforeUpdate", prevProps, prevState);
    return "From Child getSnapshotBeforeUpdate";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "Child - 1 - componentDidUpdate",
      prevProps,
      prevState,
      snapshot
    );
  }

  componentWillUnmount() {
    console.log("Child - 1 - componentWillUnmount");
  }

  render() {
    console.log("Child - 1 - render");
    return (
      <div>
        Child - 1
        <div
          style={{
            display: "flex",
            margin: "auto",
            padding: "10px",
            flexDirection: "column",
            border: "1px solid gray"
          }}
        >
          Value: {this.state.value}
        </div>
      </div>
    );
  }
}

class Child2 extends React.Component {
  constructor(props) {
    console.log("Child - 2 - constructor");
    super(props);
  }

  componentWillUnmount() {
    console.log("Child - 2 - componentWillUnmount");
  }

  render() {
    console.log("Child - 2 - render");
    return (
      <div>
        Child - 2
        <div
          style={{
            display: "flex",
            margin: "auto",
            padding: "10px",
            flexDirection: "column",
            border: "1px solid gray"
          }}
        >
          Value: {this.props.value}
        </div>
      </div>
    );
  }
}
