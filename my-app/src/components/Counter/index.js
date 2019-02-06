import React from "react";
import "./style.css";


 // The render method returns the JSX that should be rendered
function Counter(props) {
  return <div>
    <h1 className="County">Times Clicked: {props.children} </h1>
      <h2>High Score: {}</h2>
          </div>
}

export default Counter;



