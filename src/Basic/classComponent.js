import React from "react";
import ReactDOM from "react-dom/client";

class Car extends React.Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>
          A class component must include the extends React.Component statement.
          This statement creates an inheritance to <b>React.Component,</b>and gives
          your component access to React.Component's functions.
        </p>
        <p>
          The component also requires a <b>render()</b> method, this method returns
          HTML.
        </p>
      </div>
    );
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Car />);

export default Car;
