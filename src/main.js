import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        Hello world!
        <Card />
      </div>
    );
  }
}

function Card(props) {
  return {
    render: () => {
      return (
        <div>Hello from Card</div>
      );
    }
  };
}

React.render(<App />, document.body);