import React, { Component } from "react";
class App extends Component {
  state = {
    message: "Click here!"
  };
  render() {
    return (
      <button type="button" onClick={() => console.log(this.state.message)}>
        {this.state.message}
      </button>
    );
  }
}
export default App;
