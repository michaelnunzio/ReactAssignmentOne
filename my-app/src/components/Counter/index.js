import React from "react";
import "./style.css";


 // The render method returns the JSX that should be rendered
function Counter(props) {
  return <React.Fragment>
    <h1 className="County col-lg-6 offset-lg-3">Times Clicked: {props.children} </h1>
      <h2>High Score: {}</h2>
        </React.Fragment>
}

export default Counter;



