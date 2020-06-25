import React from "react";
// import ReactDOM from 'react-dom';
import "./App.css"

var Box = React.createClass({
    getInitialState() {
        return {
            color: 'black'
        }},
        
        
    changeColor: function() {
        var newColor = this.state.color === 'white' ? 'black' : 'white';
        this.setState({
            color: newColor
        })
    },
         
     render() {
        return (
            <div>
                <div
                    style = {{
                        background: this.state.color,
                        width: 100,
                        height: 100
                    }}
                    onClick = {this.changeColor}
                >
                </div>
            </div>
        )}
                })
                



export default Box