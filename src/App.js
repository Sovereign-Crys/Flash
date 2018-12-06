import React, { Component } from 'react';
import CardForm from "./Components/CardForm";
import './Styles/App.scss';
import CardList from './Components/CardList'

class App extends Component {
  state = {
    cards: [
      {id: 1, front: "Question", back: "Answer", correct: false},
      {id: 2, front: "Question2", back: "Answer2", correct: false},
      {id: 3, front: "Question3", back: "Answer3", correct: false},
      {id: 4, front: "Question4", back: "Answer4", correct: false},
      {id: 5, front: "Question5", back: "Answer5", correct: false},
      {id: 6, front: "Question6", back: "Answer6", correct: false},
      {id: 7, front: "Question7", back: "Answer7", correct: false},
      {id: 8, front: "Question8", back: "Answer8", correct: false},
      {id: 9, front: "Question9", back: "Answer9", correct: false},
      {id: 10, front: "Question10", back: "Answer10", correct: false},


    ], 
    menuOpen: false,
    currentCard: 0
  }

  toggleMenu = () => {
    let {menuOpen} = this.state
    this.setState({
      menuOpen: !menuOpen
    })
  }

  deleteCards = () => {
    let { cards } = this.state
    this.setState({
      cards: []
    })
  }
  
  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }
  
  createCard = (front, back) => {
    let {cards} = this.state
    let card = { id: this.getId(), front, back, correct: false}
    this.setState({
      cards: [...cards, card]
    })
  };

  cycleRight = () => {
    let {currentCard} = this.state
    //plus one

  }

  cycleLeft = () => {
    let {currentCard} = this.state
    this.setState({
      //currentCard:
      //minus one
    })    
  }

  render() {
    let { cards, currentCard } = this.state;
  
    return (
      <>
        {this.state.menuOpen ? <div class="overlay">
          <div class='close-menu' onClick={this.toggleMenu}> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/></svg>
          </div>
        <CardForm toggle={this.toggleMenu} newCard={this.createCard}/>
        </div> : null}
        <div className="container">
          <button className="btn" onClick={this.toggleMenu}>Add Card</button>
          <button className="btn" onClick={this.deleteCards}>Delete Card</button>
        </div>
          <CardList cards={cards} currentCard={currentCard} />
      </>
      
    );
  }
}

export default App;
