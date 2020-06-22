import React from 'react';
import SuperHeroItem from "./components/SuperHeroItem"
import superHeroData from "./components/SuperHeroData"
import Header from "./components/Header"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            heros: superHeroData,

        }

    }

    render() {
        const superHeroItems = this.state.heros.map((item, index) => <SuperHeroItem item={item} id={index} key={index} onEnter={(event) => {
            const wraper = event.currentTarget
            const catchPhrase = document.createElement("h3")
            catchPhrase.textContent = item.catchPhrase
            wraper.append(catchPhrase)

            for (let i = 0; i < wraper.children.length; i++) {

                if (wraper.children[i].tagName === "IMG") {
                    wraper.children[i].remove()
                }
            }
            
        }} onLeave={(event) => {
            const wraper = event.currentTarget
            const img = document.createElement("img")
            img.src = item.imageName
            img.className = "img"
            img.alt = ""
            wraper.append(img)

            for (let i = 0; i < wraper.children.length; i++) {

                if (wraper.children[i].tagName === "H3") {
                    wraper.children[i].remove()
                }
            }


        }} />)

        return (
            <div className="superHero-list">
                <Header />
                {superHeroItems}
            </div>
        )
    }
}
export default App
