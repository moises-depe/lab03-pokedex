import React, { Component } from 'react'
import '../App.css'

export default class PokeItem extends Component {
    render() {
        return (

            <li className="pokeItems">
                <p className="title">{this.props.pokeItemProp.pokemon}</p>
                <img src={this.props.pokeItemProp.url_image} alt={this.props.pokeItemProp.pokemon}></img>
                <p>pokemon type:{this.props.pokeItemProp.type_1}</p>
            </li>
        )
    }
}
