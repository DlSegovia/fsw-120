import React from 'react';
import Square from './Square';
// import './App.css';
// import './index.css';


const DEFAULT_COLOR ="white";
class App extends React.Component {
 constructor() {
   super()
    this.state = 
        {
          square1: {color:DEFAULT_COLOR},
          square2: {color:DEFAULT_COLOR}, 
          square3: {color:DEFAULT_COLOR},
          square4: {color:DEFAULT_COLOR}
        };
      }
  onChangeColorEvent = (event) => {
      const currentSquare = 'square'+event.target.id;
      this.setState((previousState) => {
          return { ...previousState, [currentSquare]: {color:this.getRandomColor()}};
    });
  }
  
  blackOrWhite = ()=> {
    if (this.state.square1.color === "white") {
      return (
        this.setState({square1: {color: "black"}}),
        this.setState({square2: {color: "white"}}),
        this.setState({square3: {color: "white"}}),
        this.setState({square4: {color: "black"}})
      )
    } 
    if (this.state.square1.color !== "white") {
      return (
        this.setState({square1: {color: "white"}}),
        this.setState({square2: {color: "black"}}),
        this.setState({square3: {color: "black"}}),
        this.setState({square4: {color: "white"}})
      )
    } 
  }
    purple = () => {
      return (
        this.setState({square1: {color: "purple"}}),
        this.setState({square2: {color: "purple"}})
      )      
    }

    blue = (event) => {
      const currentSquare = 'square'+event.target.id;
      return (
      this.setState({[currentSquare]: {color: "blue"}}))
  }

  getRandomColor = () => {
    let randomColor = Math.random()
    if (randomColor <= 0.1) {
        return "Lime";
    }
    if (randomColor > 0.1 && randomColor < 0.3) {
      return "HotPink";
    }
    if (randomColor >= 0.3 && randomColor < 0.5) {
      return "Aquamarine";
    }
    if (randomColor >= 0.5 && randomColor < 0.7) {
      return "DodgerBlue";
    } 
    if (randomColor >= 0.7) {
      return "BlueViolet";
    }
  }
  render(){
    return (
      <div>
        <div className="gridContainer">
            <Square color={this.state.square1.color}/>
            <Square color={this.state.square2.color}/>
        </div>
        <div className="gridContainer">
            <Square color={this.state.square3.color}/>
            <Square color={this.state.square4.color}/>     
        </div>
        <div className="gridContainer">
          <button id="1" 
            className="button" 
            onClick={this.blackOrWhite}>
              Small Time DJ
          </button>       
          <button id="2" 
            className="button"  
            onClick={this.purple}>
              Party DJ
          </button>         
          <button id="3" 
            className="button"  
            onClick={this.blue}>
              Professional DJ Left
          </button>
          <button id="4" 
            className="button"  
            onClick={this.blue}>
              Professional DJ Right
          </button>
        </div>
        <div className="gridContainer">
          <button id="1" 
            className="button" 
            onClick={this.onChangeColorEvent}>
              Big Time DJ 1
          </button>
          <button id="2" 
            className="button" 
            onClick={this.onChangeColorEvent}>
              Big Time DJ 2
          </button>
          <button id="3" 
            className="button" 
            onClick={this.onChangeColorEvent}>
              Big Time DJ 3
          </button>
          <button id="4" 
            className="button" 
            onClick={this.onChangeColorEvent}>
              Big Time DJ 4
          </button>
        </div>
      </div>
    )
    }
  }
export default App