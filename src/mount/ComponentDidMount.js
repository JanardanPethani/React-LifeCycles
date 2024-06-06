import React, { Component } from "react";

export default class ComponentDidMountMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial value",
      data: []
    };
  }

  componentDidMount() {
    console.log("From componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  }

  changeState() {
    this.setState({ name: "This is a componentDidMount Method" });
  }

  render() {
    return (
      <div>
        <h3>componentDidMount</h3>
        <p>This will print all the name available in API users data</p>

        {this.state.data.map((d) => (
          <div key={d.id}>{d.name}</div>
        ))}

        <p>
          <b>{this.state.name}</b>
        </p>

        <button onClick={this.changeState.bind(this)}>Change name</button>
      </div>
    );
  }
}
