import React from "react";
import ReactDOM from "react-dom/client";
class Props extends React.Component {
  render() {
    return (
      <div>
        <h1>React Props</h1>
        <p>Props are arguments passed into React components.</p>
        <p>Props are passed to components via HTML attributes.</p>
        <p>React Props are like function arguments in JavaScript and attributes in HTML.</p>
        <p>To send props into a component, use the same syntax as HTML attributes:</p>
      </div>
    );
  }
}
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Props />);
export default Props;