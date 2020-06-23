import React from "react";
import one from "./dice_pics/1.png";
import two from "./dice_pics/2.png";
import three from "./dice_pics/3.png";
import four from "./dice_pics/4.png";
import five from "./dice_pics/5.png";
import six from "./dice_pics/6.png";
import "./App.css";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numberOfDice: null,
      rolls: [],
      rollSum: null  
    };

    const DiceImage = ({ roll }) => {
      if (roll === 1) {
        return <img className="dice-image" src={one} alt="1" />;
      } else if (roll === 2) {
        return <img className="dice-image" src={two} alt="2" />;
      } else if (roll === 3) {
        return <img className="dice-image" src={three} alt="3" />;
      } else if (roll === 4) {
        return <img className="dice-image" src={four} alt="4" />;
      } else if (roll === 5) {
        return <img className="dice-image" src={five} alt="5" />;
      } else if (roll === 6) {
        return <img className="dice-image" src={six} alt="6" />;
      };
    };

    {
      this.state.numberOfDice ? (
        <h2>
          Roll Total: <span className="sum">{this.state.rollSum}</span> /{" "}
          {this.state.numberOfDice * 6}
        </h2>
      ) : null
    };
    };

    diceRoll = numberOfDice => {
      let rolls = [];
      let rollSum = 0;
      for (let i = 0; i < numberOfDice; i++) {
        rolls[i] = Math.floor(Math.random() * 6) + 1;
        rollSum += rolls[i];
      }
      this.setState({
        numberOfDice,
        rolls,
        rollSum
      });
    };
    
  };
  
  render() {
    
      <div className="DiceContainer">
        <h1 className="header">Try Your Luck and Roll The Dice</h1>

        <div className="buttons">
        {
          this.state.rolls.map((roll, index) => <DiceImage roll={roll} key={index} />)
        };
  {[1, 2, 3, 4, 5].map(number => {
    let text = number === 1 ? "die" : "dice";
    return (
      <button
        key={number}
        onClick={() => this.diceRoll(number)}
        className="button"
      >
        {number} {text}
      </button>
      
    );
  })}
</div>
    </div>
    
  };


  export default App
