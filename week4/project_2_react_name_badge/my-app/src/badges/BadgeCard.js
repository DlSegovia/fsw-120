import React from 'react';



const BadgeCard = ({
    index, firstName, lastName, email, placeOfBirth, phoneNumber, favoriteFood, handleDelete }) => {
    return (
        <div>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <h1>{email}</h1>
            <h1>{placeOfBirth}</h1>
            <h1>{phoneNumber}</h1>
            <h1>{favoriteFood}</h1>
            <button onClick={() => handleDelete(index)}>Delete this one</button>
        </div>
    )
}
export default BadgeCard;