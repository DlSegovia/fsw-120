import React, { Component } from "react"
import "./App.css";
class App extends Component {
  constructor() {
    super()
    this.state = {
      numberOfDice: 0,
      rolls: [],
      rollSum: 0
    }
  }
  diceRoll = numberOfDice => {

    let rolls = [];
    let rollSum = 0;
    for (let i = 0; i < numberOfDice; i++) {

      rolls[i] = Math.floor(Math.random() * 6) + 1;
      console.log(numberOfDice, "numberOfDice")
      console.log(rolls, "rolls")
      rollSum += rolls[i];
      console.log(rollSum, "rollSum")
    }
    this.setState({
      numberOfDice,
      rolls,
      rollSum
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Dice Roll Demo</h1>
        {[1, 2, 3, 4, 5].map(number => {
          let text = number === 1 ? "die" : "dice";
          return (
            <button
              key={number}
              onClick={() => this.diceRoll(number)}
              className="button">
              {number} {text}
            </button>
          );
        })}
        <p>{this.state.rolls.map((roll, index) => {
          //  const DiceImage = ( {roll} ) => {
          if (roll === 1) {
            return <img className="dice-image"
              src={"https://raw.githubusercontent.com/DlSegovia/fsw-120/master/week3/assignment_2_rolling-dice_with_react_state/my-app/src/dice_pics/1.png"}
              alt="1" />;
          }
          else if (roll === 2) {
            return <img className="dice-image"
              src={"https://raw.githubusercontent.com/DlSegovia/fsw-120/master/week3/assignment_2_rolling-dice_with_react_state/my-app/src/dice_pics/2.png"} alt="2" />;
          }
          else if (roll === 3) {
            return <img className="dice-image"
              src={"https://raw.githubusercontent.com/DlSegovia/fsw-120/master/week3/assignment_2_rolling-dice_with_react_state/my-app/src/dice_pics/3.png"} alt="3" />;
          }
          else if (roll === 4) {
            return <img className="dice-image"
              src={"https://raw.githubusercontent.com/DlSegovia/fsw-120/master/week3/assignment_2_rolling-dice_with_react_state/my-app/src/dice_pics/4.png"} alt="4" />;
          }
          else if (roll === 5) {
            return <img className="dice-image"
              src={"https://raw.githubusercontent.com/DlSegovia/fsw-120/master/week3/assignment_2_rolling-dice_with_react_state/my-app/src/dice_pics/5.png"} alt="5" />;
          }
          else if (roll === 6) {
            return <img className="dice-image"
              src={"https://raw.githubusercontent.com/DlSegovia/fsw-120/master/week3/assignment_2_rolling-dice_with_react_state/my-app/src/dice_pics/6.png"} alt="6" />;
          }
        }
        )}</p>
      </div>
    )
  }
}


export default App