
import React, { Component } from 'react';
import moment from 'moment';
import './Charts.css';

import ChartsTickerSymbol from '../sub-components/ChartsTickerSymbol';
import ChartsLineGraph from '../sub-components/ChartsLineGraph';
import ChartsToolTip from '../sub-components/ChartsToolTip';
import ChartsInfoBox from '../sub-components/ChartsInfoBox';

// const config = require('../server/config');
// console.log(config.cryptoAPI)

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingData: true,
      data: null,
      hoverLoc: null,
      activePoint: null
    }
  }
  handleChartHover(hoverLoc, activePoint){
    this.setState({
      hoverLoc: hoverLoc,
      activePoint: activePoint
    })
  }


  componentDidMount(){
    const getData = () => {
      const url = '/api/priceTrends';
      
      fetch(url).then( r => r.json())
        .then((priceTrends) => {    
          this.setState({
            data: priceTrends,
            fetchingData: false
          })
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getData();

  }

  render() {
    return (

      <div className="chart-spread">
      <div className='row'>
        <ChartsTickerSymbol/>
      </div>
      <div className='row'>
        { !this.state.fetchingData ?
        <ChartsInfoBox data={this.state.data} />
        : null }
      </div>
      <div className='row'>
        <div className='popup'>
          {this.state.hoverLoc ? <ChartsToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint}/> : null}
        </div>
      </div>
        <div className='row'>
          <div className='chart col s12'>
            { !this.state.fetchingData ?
              <ChartsLineGraph data={this.state.data} onChartHover={ (a,b) => this.handleChartHover(a,b) }/>
              : null }
          </div>
        </div>
      </div>

    );
  }
}

export default Charts;
