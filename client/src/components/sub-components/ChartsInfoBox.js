import React, { Component } from 'react';
import moment from 'moment';
import './stylesheets/ChartsInfoBox.css';

class ChartsInfoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: null,
      monthChangeD: null,
      monthChangeP: null,
      updatedAt: null
    }
  }
   componentDidMount(){
    this.getData(this.props.data, this.props.type);
    this.refresh = setInterval(() => this.getData(), 90000);
  }

  getData (data, type) {
     const price = parseFloat(data[data.length - 1].y);
     const change = price - parseFloat(data[0].y);
     const changeP = (price - parseFloat(data[0].y)) / parseFloat(data[0].y) * 100;

     this.setState({
       currentPrice: price,
       monthChangeD: change.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
       monthChangeP: changeP.toFixed(2) + '%'
   });
  }

  componentWillReceiveProps(nextProps) {
  if (nextProps.type !== this.props.type) {
    this.getData(nextProps.data, nextProps.type);
  }
}

  componentWillUnmount(){
    clearInterval(this.refresh);
  }
  render(){
    return (
      <div id="data-container">
        { this.state.currentPrice ?
          <div id="left" className='box'>
            <div className="heading">{this.state.currentPrice.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' })}</div>
            <div className="subtext">Current price</div>
          </div>
        : null}
        { this.state.currentPrice ?
          <div id="middle" className='box'>
            <div className="heading">{this.state.monthChangeD}</div>
            <div className="subtext">Change Since Last Month (USD)</div>
          </div>
        : null}
          <div id="right" className='box'>
            <div className="heading">{this.state.monthChangeP}</div>
            <div className="subtext">Change Since Last Month (%)</div>
          </div>

      </div>
    );
  }
}

export default ChartsInfoBox;
