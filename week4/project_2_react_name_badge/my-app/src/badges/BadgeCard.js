import React from 'react';
import '../Card.css'


const BadgeCard = ({
    index, firstName, lastName, email, placeOfBirth, phoneNumber, favoriteFood, textarea, handleDelete }) => {
    return (
        <div className='badge'>
            <h2 className='header'>Badge Card</h2>
            <h3 className='fname'>{'Name: '}{firstName}</h3>
            <h3 className='lname'>{lastName}</h3>
            <h3 className='email'>{'Email: '}{email}</h3>
            <h3 className='pob'>{'Place of Birth: '}{placeOfBirth}</h3>
            <h3 className='phnum'>{'Phone: '}{phoneNumber}</h3>
            <h3 className='favfood'>{'Favorite Food: '}{favoriteFood}</h3>
            <textarea className='txarea2'>{textarea}</textarea>
            <button className='btn2' onClick={() => handleDelete(index)}>Delete this one</button>
        </div>
    )
}
export default BadgeCard;