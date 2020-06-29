import React from "react"
import NameList from "./NameList"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      NameList: []
    }
  }
  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      name: event.target.value
    })
  }

  handleNameList = (event) => {
    event.preventDefault()
    this.setState({
      NameList: this.state.NameList.concat(this.state.name),
name: "" 
    })
  }

  render() {
    return (
      <div><form>
        <input type="text" name="name" value={this.state.name} onChange = {this.handleChange} />
    <h1>{this.state.name}</h1>
        <button onClick= {this.handleNameList}  >Submit</button>
      </form>
      <NameList text= {this.state.NameList} />
      </div>
    )
  }
}


export default App