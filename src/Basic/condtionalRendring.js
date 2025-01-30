import React from "react";
import ReactDOM from "react-dom/client";
function CondRender() {
  return (
    <div>
      <h1>Conditional Rendaring </h1>
    </div>
  );
}

export default CondRender;
function MissedGoal() {
  return <h1>Goal Missed!</h1>;
}
function MadeGoal() {
  return <h1>Goal Made!</h1>;
}
// eslint-disable-next-line no-unused-vars
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  } else {
    return <MissedGoal />;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Goal isGoal={false} />);
