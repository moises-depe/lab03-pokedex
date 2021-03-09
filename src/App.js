import React, { Component } from 'react'
import Header from './header/header.js';
import SearchPage from './search/search.js';
import DetailPage from './detail/details.js';
import HomePage from './home/home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/search"
              exact
              render={(routerProps) => <SearchPage {...routerProps} />}
            />
            <Route
              path="/:pokemonName"
              exact
              render={(routerProps) => <DetailPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
