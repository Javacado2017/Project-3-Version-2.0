
import React, { Component } from 'react';
import moment from 'moment';

import ChartsTickerSymbol from '../components/ChartsTickerSymbol';
import ChartsLineGraph from '../components/ChartsLineGraph';
import ChartsToolTip from '../components/ChartsToolTip';
import ChartsInfoBox from '../components/ChartsInfoBox';


import {Paper} from "@material-ui/core/";

class Charts extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      active: '',
      fetchingData: true,
      data: {},
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
  getData (symbol) {
    const lowerCaseSymbol = symbol.toLowerCase(),
        url = '/api/priceTrends/' + symbol.toLowerCase();
    if (this.state.data[lowerCaseSymbol]) {
        this.setState({
            active: lowerCaseSymbol
        });
    }

    fetch(url).then( r => r.json())
      .then((priceTrends) => {
        var newPriceTrends = Object.assign({}, this.state.data);
        newPriceTrends[lowerCaseSymbol] = priceTrends;
        this.setState({
          active: lowerCaseSymbol,
          data: newPriceTrends,
          fetchingData: false
        })
      })
      .catch((e) => {
        console.log(e);
      });
  }
  componentDidMount(){
    this.getData('btc')
  }

  changeTickerSymbol(type) {
      this.getData(type);
  }

  render() {
    return (

      <div className="chart-spread">
        <Paper>
            <ChartsTickerSymbol onClick={this.changeTickerSymbol.bind(this)} activeType={this.state.active}/>

            { !this.state.fetchingData ?
            <ChartsInfoBox data={this.state.data[this.state.active]} type={this.state.active} />
            : null }

            <div className='popup col s12'>
              {this.state.hoverLoc ? <ChartsToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint}/> : null}
            </div>

              <div className='chart col s12'>
                { !this.state.fetchingData ?
                  <ChartsLineGraph data={this.state.data[this.state.active]} onChartHover={ (a,b) => this.handleChartHover(a,b) }/>
                  : null }
              </div>
        </Paper>
      </div>

    );
  }
}

export default Charts;
