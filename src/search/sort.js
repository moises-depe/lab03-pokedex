import React, { Component } from 'react'

export default class Sort extends Component {
    render() {

        return (
            <div>
                <span>
                    <label>Sort by </label>
                    <select onChange={this.props.sort1}>
                        <option value='pokemon'>Name</option>
                        <option value='type_1'>Type</option>
                        <option value='attack'>Attack</option>
                        <option value='defense'>Defense</option>
                    </select>
                </span>
                <select onChange={this.props.sort2}>
                    <option value='ascending'>Ascending</option>
                    <option value='descending'>Descending</option>
                </select>
                <label>order</label>
            </div>
        )
    }
}