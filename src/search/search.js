import React, { Component } from 'react';
import Spinner from './spinner.js';
import Sort from './sort.js';
import SearchBar from './searchbar.js';
import PokeList from '../pokemon/pokelist.js';
import request from 'superagent';
import '../App.css';

export default class SearchPage extends Component {
    state = {
        pokemonData: [],
        sortOrder: 'asc',
        sortBy: '',
        query: '',
        loading: false,
        currentPage: 1,
        perPage: 10,
        totalPokemon: 0,
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({ loading: true });
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}&perPage=${this.state.perPage}&page=${this.state.currentPage}`);
        console.log(data.body.results);


        this.setState({
            pokemonData: data.body.results,
            loading: false,
            totalPokemon: data.body.count,
        })
    }

    handleClick = async () => {
        await this.fetchPokemon();
    }


    handleSortBy = async (e) => {
        await this.setState({
            sortBy: e.target.value
        })
        await this.fetchPokemon();
    }
    handleSortOrder = async (e) => {

        await this.setState({
            sortOrder: e.target.value
        })
        await this.fetchPokemon();

    }
    handleQuery = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    render() {

        return (
            <>
                <div>
                    <SearchBar currentValue={this.state.query}
                        handleChange={this.handleQuery}
                        handleClick={this.handleClick} />
            Sort By:
                 <Sort currentValue={this.state.sortBy} handleChange={this.handleSortBy}
                        options={[{ value: 'pokemon', name: 'Pokemon' },
                        { value: 'type_1', name: 'Type' },
                        { value: 'attack', name: 'Attack' },
                        { value: 'defense', name: 'Defense' }]} />
                    <Sort currentValue={this.state.sortOrder} handleChange={this.handleSortOrder}
                        options={[{ value: 'asc', name: 'Ascending' },
                        { value: 'desc', name: 'Descending' }]} />
                </div>
                <section>
                    {this.state.loading
                        ? <Spinner /> :
                        <PokeList filteredPokemon={this.state.pokemonData} />
                    }
                </section>
            </>
        )
    }
}
