import React from 'react';
import ReactDOM from 'react-dom';
// This is a functional component
const Welcome = () => {
  return <h1>Hello World!</h1>;
}
ReactDOM.render(
  <Welcome />,  // Use <Welcome /> instead of <welcome>
  document.getElementById("root")
);
export default Welcome;

