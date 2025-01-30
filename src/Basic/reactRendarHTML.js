import React from "react";
function RendarHTML() {
  return (
    <div>
      <h2>React Render HTML</h2>
      <p>React's goal is in many ways to render HTML in a web page.</p>
      <p>
        React renders HTML to the web page by using a function called{" "}
        <b>createRoot() </b>and its method <b>render().</b>
      </p>
      <hr />
      <script>
      const container = document.getElementById('root'); const root = ReactDOM.createRoot(container); root.render(<p>Hello</p>);
      </script>
    </div>
  );
}

export default RendarHTML;
