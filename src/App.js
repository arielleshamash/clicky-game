import React from 'react';
import './App.css';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";


class App extends React.Component {
  
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    currentScore: 0,
    highscore: 0,
    clicked: []
  };

  

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({currentScore : this.state.currentScore + 1}, function(){
            console.log(this.state.currentScore);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
gameOver = () => {
    if (this.state.currentScore > this.state.highscore) {
      this.setState({highscore: this.state.currentScore}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over \nscore: ${this.state.currentScore}`);
    this.setState({currentScore: 0});
    return true;
  }
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Header currentScore={this.state.currentScore} highscore={this.state.highscore}></Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;