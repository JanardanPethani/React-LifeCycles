import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  // Initializing the state
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  static getDerivedStateFromError(error) {
    // Changing the state to true if some error occurs
    console.log("getDerivedStateFromError:", error);
    return {
      error
    };
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch:", error, info);
  }

  render() {
    return (
      <div>
        {this.state.error ? (
          <h4>{this.state.error.message}</h4>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
