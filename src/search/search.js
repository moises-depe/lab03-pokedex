import React, { Component } from 'react';
import searchBar from '../search/searchbar.js';
import Spinner from './Spinner.js';
import request from 'superagent';
import '../App.css';

export default class SearchPage extends Component {
    state = {
        pokemon: [],
        sortOrder: '',
        sortBy: '',
        query: '',
        loading: false,
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({ loading: true });
        const data = await request.get(`https://pokedex-alchemy.xherokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}`);

        this.setState({
            pokemon: data.body.results,
            loading: false,
        })
    }

    handleClick = async () => {
        await this.fetchPokemon();
    }

    handleSortBy = (e) => {
        this.setState({
            sortBy: e.target.value
        })
    }
    handleSortOrder = async (e) => {
        this.setState({
            sortOrder: e.target.value
        })
    }
    handleQuery = async (e) => {
        this.setState({
            query: e.target.value
        })
    }


//     render() {
//         return (
//             <>
//                 <div>
//                     <searchBar currentValue={this.state.query}
//                         handleChange={this.handleQuery}
//                         handleClick={this.handleClick} />
//             Sort By:
//                     <sort currentValue={this.state.sortBy} handleChange={this.handleSortBy}
//                         options={[{ value: 'pokemon', name: 'Pokemon' },
//                         { value: 'type_1', name: 'Type' },
//                         { value: 'attack', name: 'Attack' },
//                         { value: 'defense', name: 'Defense' }]} />
//                     <sort currentValue={this.state.sortOrder}
//                         handleChange={this.handleSortOrder}
//                         options={[{ value: 'Ascend', name: 'Ascending' },
//                         { value: 'Descend', name: 'Descending' }]} />
//                 </div>
//                 <section class="pokemons">
//                     {this.state.loading
//                         ? <Spinner />
//                         : this.state.pokemon.map(poke =>
//                             <div key={poke.pokemon} class="PokeList">
//                                 <p><img src={poke.url_image} alt="poke" /></p>
//                                 <p>Name:{poke.pokemon}</p>
//                                 <p>Type: {poke.type_1} </p>
//                                 <p>Attack:{poke.attack}</p>
//                                 <p>Defense:{poke.defense}</p>
//                             </div>)

//                     }
//                 </section>
//             </>
//         )
//     }
// }

