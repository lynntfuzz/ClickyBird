import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./birds.json";

class App extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      score: 0,
      topscore: 0,
      friends: friends                 
    };
   
  }

  shuffle = array => {
     let m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  };

  resetDeck = friends => {
    const resetData = friends.map(item => ({ ...item, selected: false }));

    return this.shuffle(resetData);
  };

  // componentDidMount() {
  // }

  incrementCounter() {
    this.setState({score: this.state.score + 1});
  }

  decrementCounter() {
    this.setState({score: this.state.score - 1});
  }

  handleClickEvent = id => {
    
    let clickedFriend = this.state.friends.find(friend => friend.id === id);
    console.log("Clicky Click: " + id + " " + clickedFriend.name + " " + clickedFriend.selected);
    if (!clickedFriend.selected) {
      console.log("Clicked on " + clickedFriend.name + " not selected yet");
      clickedFriend.selected = true;
      this.setState( {score: this.state.score + 1, friends: this.shuffle(this.state.friends)});
    } else {
      console.log("yikes");
      this.setState( {
        score: 0, 
        friends: this.resetDeck(this.shuffle(this.state.friends)),
        topscore: this.state.score > this.state.topscore? this.state.score : this.state.topscore
      });
    }
      
  };

  // Map over this.state.cards and render a FriendCard component for each card object
  render() {
 
    return (
      <Wrapper>
        <Title>Bird Memory Game- Don't click the same bird twice! </Title>
        <Title>Score: {this.state.score} Top Score: {this.state.topscore}</Title>
        
        {this.state.friends.map(friend => (
          
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            selected={friend.selected}
            handleClickEvent={this.handleClickEvent}
          />
        ))}
        
      </Wrapper>
    );
};
}

export default App;

