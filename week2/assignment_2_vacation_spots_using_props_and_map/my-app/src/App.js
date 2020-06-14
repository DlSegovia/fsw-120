import React from "react"

import Vacation from "./Vacation"
import vacations from "./vacationDate"


function App() {
    return (
      
        <div className="vacation-spots">
            {vacations.map(vacation =>{
                return(
            <Vacation
                  place={vacation.place}
                  price={vacation.price}
                  timeToGo={vacation.timeToGo}
            />
                )
                })}
        </div>
    )
}

export default App 