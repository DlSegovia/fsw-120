import React from "react";
import "./App.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      num1: Math.floor(Math.random() * 6),
      num2: Math.floor(Math.random() * 6),
      num3: Math.floor(Math.random() * 6),
      num4: Math.floor(Math.random() * 6),
      num5: Math.floor(Math.random() * 6)
    });
  };
  render() {
    return (

      <div className="DiceContainer">
        <h1 className="header">Try Your Luck and Roll The Dice</h1>
        <div className="item1">{this.state.num1}
        </div>
        <button className="btnum1" onClick={this.handleClick}
        >ROLL THE DICE!</button>

        <div className="item2">{this.state.num2}
        </div>
        <button className="btnum2" onClick={this.handleClick}
        >ROLL THE DICE!</button>

        <div className="item3">{this.state.num3}
        </div>
        <button className="btnum3" onClick={this.handleClick}
        >ROLL THE DICE!</button>

        <div className="item4">{this.state.num4}
        </div>
        <button className="btnum4" onClick={this.handleClick}
        >ROLL THE DICE!</button>

        <div className="item5">{this.state.num5}
        </div>
        <button className="btnum5" onClick={this.handleClick}
        >ROLL THE DICE!</button>

        <button className="rollAll" onClick={this.handleClick}
        >ROLL ALL DICE!</button>

      </div>
    )
  }
}

export default App
