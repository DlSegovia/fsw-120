import React, { Component } from 'react'
import BadgeList from './BadgeList'
import '../App.css'



class BadgeForm extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phoneNumber: '',
            favoriteFood: '',
            textarea: '',
            nameBadges: [],

        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newUserData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            placeOfBirth: this.state.placeOfBirth,
            phoneNumber: this.state.phoneNumber,
            favoriteFood: this.state.favoriteFood,
            textarea: this.state.textarea,
        }

        this.setState({
            nameBadges: [newUserData, ...this.state.nameBadges],
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phoneNumber: 0,
            favoriteFood: '',
            textarea: '',
        })
    }

    handleDelete = (i) => {
        let updatedBadgeArray = this.state.nameBadges
        updatedBadgeArray.splice(i, 1)
        this.setState({ nameBadges: updatedBadgeArray })
    }

    render() {
        return (
            <div className='container'>
                <form className='form' onSubmit={this.handleSubmit}>

                    <h1 className='h1'>Bagde Card Template</h1>

                    <input className='input1'
                        placeholder='First Name'
                        type='text'
                        name='firstName'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        required={true}
                    />

                    <input className='input2'
                        placeholder='Last Name'
                        type='text'
                        name='lastName'
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />

                    <input className='input3'
                        placeholder='Email'
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <input className='input4'
                        placeholder='Place of Birth'
                        type='text'
                        name='placeOfBirth'
                        value={this.state.placeOfBirth}
                        onChange={this.handleChange}
                    />

                    <input className='input5'
                        placeholder='Phone Number'
                        type='text'
                        name='phoneNumber'
                        value={this.state.phoneNumber}
                        onChange={this.handleChange}
                    />

                    <input className='input6'
                        placeholder='Favorite Food'
                        type='text'
                        name='favoriteFood'
                        value={this.state.favoriteFood}
                        onChange={this.handleChange}
                    />

                    <textarea className='txarea' placeholder={'Tell us about yourself'}
                        value={this.state.textarea} onChange={this.handleChange} />

                    <button className='bt1'> Submit Me </button>

                </form>

                <BadgeList
                    nameBadges={this.state.nameBadges}
                    handleDelete={this.handleDelete}
                />

            </div>
        )
    }
}

export default BadgeForm