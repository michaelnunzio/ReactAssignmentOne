import React, { Component } from "react";
import Counter from "./components/Counter";
import HypeCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import hype from "./hype.json";

class App extends Component {
  // Setting this.state.hype to the json array
  state = {
    hype,
    clicked: [],
    score: 0,
    highScore: 0,
    message: ''
  };


//*** On the picture click ***//
clickPic = id =>{
    const shufflePics = this.shuffle(hype);
    this.setState({hype: shufflePics});
    console.log(id) //check correct id being inserted
    console.log(this.state.clicked); //check clicked array is working before
    if(this.state.clicked.includes(id)){ //double clicked

        this.setState({score: 0, clicked: [], message: "Wronggg, start over"})

        console.log("already clicked!!")

    } else { //correct click

        this.setState({

          clicked: this.state.clicked.concat([id]), message: "Correct! Keep Guessing!", 
          score: this.state.score +1
          
        });
    }

    if(this.state.score > this.state.highScore){
      console.log("new high score: " + this.state.score) //test
      this.setState({highScore: this.state.score})
    }
}

shuffle = a => {
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  return a;
}


  
  // Map over the cards and pass info
  render() {
    return (
   
      <Wrapper>
      <Title 
      score={this.state.score}
      highScore={this.state.highScore}
      message={this.state.message}
      />
    {/* <Score
    value={1}
    />
        <Score
    text={"Top Score"}
    value={2}
    /> */}
    {/* displayCard= */}
    {this.state.hype.map(displayCard => (
        <HypeCard
        clickPic={this.clickPic}
        id={displayCard.id}
        name={displayCard.name}
        image={displayCard.image}
       />
       ))}
      </Wrapper>
    );
  }
}

export default App;
