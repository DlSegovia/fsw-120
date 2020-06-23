import React from "react";
import "./App.css"

class App extends React.createClass({
  constructor() {
    super()
    this.state = {
          color: 'white'
      }
      this.handleClick = this.handleClick.bind(this)
  }

  changeColor: function() {
    var newColor = this.state.color === 'white' ? 'black' : 'white';
    this.setState({ color: newColor });
},

render: function() {
  return (
      <div>
          <div
              className='box'
              style={{background:this.state.color}}
              onClick={this.changeColor}
          >
              In here already
          </div>
      </div>
  )
}
})

export default App
