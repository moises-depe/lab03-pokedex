import React, { Component } from 'react'
import PokeList from '../pokemon/pokelist.js'

export default class SearchPage extends Component {
    render() {
        console.log('hello')
        return (
            <div>
                <PokeList />
            </div>
        )
    }
}