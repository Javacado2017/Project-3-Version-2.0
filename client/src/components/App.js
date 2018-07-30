
import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import Home from './components/Home';
import Charts from './components/Charts';

import Nav from './components/MainHeaderBar';
// const config = require('../server/config');
// console.log(config.cryptoAPI)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentPage: 'home'
    }
  }
  render() {
    var layout = <Home />;

    if (this.state.currentPage === 'charts') {
        layout = <Charts />;
    }

    return (
      <div className={this.state.currentPage === 'home' ? 'app__content' : 'app__content alt-background'}>
        <MainHeaderBar activeLayout={this.state.currentPage}/>
        {layout}
      </div>
    );
  }
}

export default App;