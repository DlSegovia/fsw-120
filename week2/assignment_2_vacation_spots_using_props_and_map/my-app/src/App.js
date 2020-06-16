import React from "react"
import "./App.css"
import VacationCard from "./Vacation"
import vacations from "./vacationData"


function App() {
    return (

        <div className="vacation-spots">
            {vacations.map(vacation => {
                return (
                    <VacationCard className= "card"
                    key={vacation.place}
                        imgUrl={vacation.imgUrl}
                        class={vacation.imageclass} 
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