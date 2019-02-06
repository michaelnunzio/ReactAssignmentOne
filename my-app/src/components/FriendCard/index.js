import React from "react";
import "./style.css";

function HypeCard (props) {
  return (
    <div className="card" >
      <div className="img-container">
            <img className="hypeImg img-reponsive"alt={props.name} src={props.image}onClick={() =>  props.clickPic(props.id)}/>
           
      </div>
    </div>
  );
}

export default HypeCard;
