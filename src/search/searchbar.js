import React, { Component } from 'react'

export default class searchbar extends Component {
    render() {
        return (
            <div>
                <label>Search By Name:</label>
                <input type='text' onChange={this.props.handleChange} />
                <button onClick={this.props.buttonClick}>start</button>
            </div>
        )
    }
}