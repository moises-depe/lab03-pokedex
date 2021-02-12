import React, { Component } from 'react'
import '../App.css'

export default class PokeItem extends Component {
    render() {

        return (

            <li className="pokeItems">
                <p className="title">{this.props.pokeItemProp.pokemon}</p>
                <img src={this.props.pokeItemProp.url_image} alt={this.props.pokeItemProp.pokemon}></img>
                <p>Name:{this.props.pokeItemProp.type_1}</p>
                <p>Type:{this.props.pokeItemProp.type_2}</p>
                <p>Attack:{this.props.pokeItemProp.type_3}</p>
                <p>Defense:{this.props.pokeItemProp.type_4}</p>
            </li>
        )
    }
}
