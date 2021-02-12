import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './header/header.js';
import SearchPage from './search/search.js';
import HomePage from './home/home';

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
          </Switch>
        </Router>
      </div>
    )
  }
}
