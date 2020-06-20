import React from 'react';
import SuperHeroItem from "./components/SuperHeroItem"
import superHeroData from "./components/SuperHeroData"
import Header from "./components/Header"

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          heros: superHeroData
      }
  }

  render(){
    const superHeroItems = this.state.heros.map(item => <SuperHeroItem item={item}/>)
    
    return (
        <div className="superHero-list">
            <Header />
            {superHeroItems}
        </div>
        
    )
}
}
export default App
//  key={item.id}