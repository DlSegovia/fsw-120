import React from 'react'
import BadgeCard from './BadgeCard'

class BadgeList extends React.Component {

    render() {

        const mappedCards = this.props.nameBadges.map((card, i) => {
            return (
                <BadgeCard
                    key={i}
                    index={i}
                    firstName={card.firstName}
                    lastName={card.lastName}
                    email={card.email}
                    placeOfBirth={card.placeOfBirth}
                    phoneNumber={card.phoneNumber}
                    favoriteFood={card.favoriteFood}
                    textarea={card.textarea}
                    handleDelete={this.props.handleDelete}
                />
            )
        })

        return (
            <div>
                <br />
                {mappedCards}
            </div>
        )
    }
}

export default BadgeList