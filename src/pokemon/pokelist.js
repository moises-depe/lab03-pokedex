import React, { Component } from 'react'
import PokeItem from '../pokemon/pokeitem.js'

export default class PokeList extends Component {
    render() {
        return (
            <div>
                {this.props.filteredPokemon.map(pokeObject =>
                    <PokeItem
                        key={pokeObject.pokemon}
                        pokemomItemProp={pokeObject}
                    />)}
            </div>
        )
    }
}