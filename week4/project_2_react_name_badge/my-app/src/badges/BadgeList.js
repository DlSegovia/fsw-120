import React, { Component } from 'react'
import BadgeCard from './BadgeCard'


class BadgeList extends Component {

    render() {


        const mappedCards = this.props.nameBadge.map((card, i) => {
            return (
                <BadgeCard
                    key={i}
                    index={i}
                    firstName={card.firstName}
                    lastName={card.lastName}
                    age={card.age}
                    handleDelete={this.props.handleDelete}
                />
            )
        })
        return (
            <div>
                Badge List
                {mappedCards}
            </div>
        )
    }
}


export default BadgeList