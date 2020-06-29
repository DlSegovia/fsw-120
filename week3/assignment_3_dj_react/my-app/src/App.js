import React, { Component } from "react"
import App from "react"
import "./App.css"


class App extends React.Component {
    constructor(props){
      super(props)
      this.state ={
        
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
    blue = (event) => {
      const currentSquare = 'square'+event.target.id;
      return (
      this.setState({[currentSquare]: {color: "blue"}}))
  }

  blackOrWhite = ()=> {
    if (this.state.square1.color === "white") {
        this.setState({square1: {color: "black"}}),
        this.setState({square2: {color: "black"}}),
        this.setState({square3: {color: "black"}}),
        this.setState({square4: {color: "black"}})
      
    } 
    else if (this.state.square1.color !== "white") {
      this.setState({square1: {color: "white"}}),
        this.setState({square2: {color: "white"}}),
        this.setState({square3: {color: "white"}}),
        this.setState({square4: {color: "white"}})
    } 
  }
    }
  
  
  export default App
  