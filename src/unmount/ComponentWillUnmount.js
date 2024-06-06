import React, { Component } from "react";

class Child extends Component {
  componentWillUnmount() {
    alert("See you in next webinar!! I am unmounting");
  }

  render() {
    return <h4>I am a child</h4>;
  }
}

export default class componentWillUnmount extends Component {
  state = {
    show: true
  };

  componentWillUnmount() {
    alert("RIP");
  }

  render() {
    return (
      <>
        <h3>componentWillUnmount</h3>
        {this.state.show ? <Child /> : null}
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          {this.state.show ? "Unmount" : "Mount"} child...
        </button>
      </>
    );
  }
}
