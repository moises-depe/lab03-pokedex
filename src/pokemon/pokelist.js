import React, { Component } from 'react'
import pokemon from '../data'
import PokeItem from './pokeitem.js'


export default class PokeList extends Component {
    render() {

        return (
            <ul className='list'>
                { pokemon.map(pokeObject =>
                    <PokeItem
                        key={pokeObject.pokemon}
                        pokeItemProp={pokeObject}
                    />)}
            </ul>
        )
    }
}