
import React, { Component } from 'react';

import ChartsTickerSymbol from '../sub-components/ChartsTickerSymbol';



class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingData: true,
      data: null,
    }
  }

  componentDidMount(){
    const getData = () => {
      const url = '/api/newsArticles';
      
      fetch(url).then( r => r.json())
        .then((newsArticles) => {    
          this.setState({
            data: newsArticles,
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
