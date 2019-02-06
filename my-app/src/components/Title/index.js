import React from "react";
import "./style.css";

function Title(props) {

  return  <div className="col-lg-12 col-md-12 col-sm-12">
  <h1 className="title">HYPE Clicky Game</h1>
  <h3 className="score">Score:{props.score}</h3> 
  <h3 className="score">High Score:{props.highScore}</h3>
  <h3 className="score">Click to play : {props.message}</h3>
  </div>
     
   
}


export default Title;

