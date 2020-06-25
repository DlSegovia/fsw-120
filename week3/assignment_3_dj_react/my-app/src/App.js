import React from "react";
import ReactDOM from 'react-dom';
import "./App.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color: 'black'
        }}
        var Box = React.createClass({
            getInitialState: function() {
                return {
                    color: 'black'
                };
            },
    changeColor: function() {
        var newColor = this.state.color === 'white' ? 'black' : 'white';
        this.setState({
            color: newColor
        });
    },

    render: function() {
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
        )},




export default App