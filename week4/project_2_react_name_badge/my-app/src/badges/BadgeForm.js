import React, { Component } from 'react'
import BadgeList from './BadgeList'


class BadgeForm extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: 0,
            nameBadges: []
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
            age: this.state.age,
        }
        this.setState({
            nameBadges: [newUserData, ...this.state.nameBadges],
            firstName: '',
            lastName: '',
            age: 0,
        })
    }


    handleDelete = (i) => {
        let updatedBadgeArray = this.state.nameBadges
        updatedBadgeArray.splice(i, 1)
        this.setState({ nameBadges: updatedBadgeArray })
    }


    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <label className='fname'>
                        First Name :
                </label>
                    <input className='input1'
                        type='text'
                        name='firstName'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        required={true}
                    />
                    <br />
                    <br />
                    <label className='lname'>
                        Last Name :
                        </label>
                    <input className='input2'
                        type='text'
                        name='lastName'
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                        Age:
                    <input className='inpit3'
                        style={{ width: 45 }}
                        type='number'
                        name='age'
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
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