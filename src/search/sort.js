import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <>
                <select onChange={this.props.handleChange}
                    value={this.props.currentValue}>

                    {this.props.options.map(
                        option => <option value={option.value} key={option.value}>{option.name}</option>)}
                </select>
            </>
        )
    }
}