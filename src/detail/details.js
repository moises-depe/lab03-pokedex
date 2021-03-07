import React, { Component } from 'react'
import request from 'superagent';
import Spinner from '../search/spinner.js'
export default class DetailPage extends Component {
    state = {
        pokemonData: {},
    }

    componentDidMount = async () => {
        this.setState({ loading: true })

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);

        this.setState({
            loading: false,
            pokemonData: data.body.results.find(item => item.pokemon === this.props.match.params.pokemonName),
        });
    }
    render() {
        return (
            <div>
                <h1>Pokemon Details</h1>
                {this.state.loading ? <Spinner /> :
                    <div>
                        <img src={this.state.pokemonData.url_image} alt="pokemon" />
                        <p>Pokemon:{this.state.pokemonData.pokemon}</p>
                        <p>Attack:{this.state.pokemonData.attack}</p>
                        <p>Defense:{this.state.pokemonData.defense}</p>
                        <p>Type:{this.state.pokemonData.type_1}</p>
                    </div>
                }
            </div>
        )
    }
}