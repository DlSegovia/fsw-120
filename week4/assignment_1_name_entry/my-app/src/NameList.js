import React from "react"

function NameList(props) {
    return(
        <ol>
           {props.text.map(item => <li key={item}>{item}</li>)}
        </ol>
    )
}




export default NameList
