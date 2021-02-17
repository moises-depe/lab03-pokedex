import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <li className="pokeItems">
                <p className="title">{this.props.pokemomItemProp.pokemon}</p>
                <img src={this.props.pokemomItemProp.url_image} alt={this.props.pokemomItemProp.pokemon}></img>
                <p className="typeText">Type: {this.props.pokemomItemProp.type_1}</p>
                <p className="typeText">HP: {this.props.pokemomItemProp.hp}</p>
                <p className="typeText">Attack: {this.props.pokemomItemProp.attack}</p>
                <p className="typeText">Defense: {this.props.pokemomItemProp.defense}</p>

            </li>
        )
    }
}