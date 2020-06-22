import React from "react"
import "../App.css"

function SuperHeroItem(props) {
    return (
        <div className="superhero-item">
            <figure id={props.id} onMouseEnter={(event) => props.onEnter(event)} onMouseLeave={(event) => props.onLeave(event)}>
                <img className="img" src={props.item.imageName} alt=" " />
            </figure>
            <h1 className="name">Name: {props.item.name}</h1>
            <h2 className="show" >Show: {props.item.show}</h2>
            <h2 className="chPhrase">Catch Phrase: {props.item.catchPhrase}</h2>
        </div>
    )
}

export default SuperHeroItem
