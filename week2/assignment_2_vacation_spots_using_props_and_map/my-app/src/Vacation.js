import React from "react"

function Vacation(props) {
    return (
    <div className="contact">
        <img src={props.imgUrl} alt=" "/>
        <h1>Place: {props.place}</h1>
        <h2>Price: {props.price}</h2>
        <h2>Time To Go: {props.timeToGo}</h2>
        <hr/>
    </div>
  )
}

export default Vacation