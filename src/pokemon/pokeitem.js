import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {
    render() {
        return (
            <Link to={this.props.pokemomItemProp.pokemon} className="poke-display">
                <li className="pokeItems">
                    <p className="title">{this.props.pokemomItemProp.pokemon}</p>
                    <img src={this.props.pokemomItemProp.url_image} alt={this.props.pokemomItemProp.pokemon}></img>
                    <p>Type: {this.props.pokemomItemProp.type_1}</p>
                    <p>HP: {this.props.pokemomItemProp.hp}</p>
                    <p>Attack: {this.props.pokemomItemProp.attack}</p>
                    <p>Defense: {this.props.pokemomItemProp.defense}</p>
                </li>
            </Link>
        )
    }
}