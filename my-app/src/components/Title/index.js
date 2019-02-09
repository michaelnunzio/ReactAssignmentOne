import React from "react";
import "./style.css";

function Title(props) {

  return  <React.Fragment>
    <div className="col-lg-12 col-md-12 col-sm-12">
  <h1 className="title">HYPE Clicky Game</h1>
    </div>

   
          <h3 className="score col-lg-4">Score:{props.score}</h3> 
          <h3 className="score col-lg-4">High Score:{props.highScore}</h3>
          <h3 className="score col-lg-4">Click to play : {props.message}</h3>


  </React.Fragment>

     
   
}


export default Title;

