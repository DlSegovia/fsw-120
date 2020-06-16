import React from "react"
import "./App.css"

function VacationCard(props) {
  return (
    <div className="vacation-card">
      <img class = {props.imageclass} Src= {props.imgUrl} alt=" "/>
      <h1>Place: {props.place}</h1>
      <h2>Price: {props.price}</h2>
      <h2>Time To Go: {props.timeToGo}</h2>
      <hr />
    </div>
  )
}

export default VacationCard

