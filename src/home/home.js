import React, { Component } from 'react'
import '../App.css'


export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1 className="pokedex">Pokemon Home page!</h1>
                <img className="pokedexImage" src="./pokedex.gif" alt="pokedex"></img>
            </div>

        )
    }
}
