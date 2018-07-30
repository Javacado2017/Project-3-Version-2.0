
import React, { Component } from 'react';
import moment from 'moment';
import './ChartsTickerSymbol.css';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// const config = require('../server/config');
// console.log(config.cryptoAPI)

class ChartsTickerSymbol extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 0
    }
  }

  //NOT SURE WHY THIS IS FLAGGING
  handleChange = (event, value) => {
    this.setState({ value });
  }

  render() {
    return (
        <div className="row">
            <Paper className="charts__content col s10 offset-s1" elevation={1}>
                <div className="charts__tabs section">
                    <Tabs value={this.state.value}
                        onChange={this.handleChange}
                        fullWidth
                        centered
                        indicatorColor="secondary"
                        textColor="secondary">
                            <Tab icon={<i className="charts__crypto-icon fab fa-bitcoin"></i>} label="BCH" />
                            <Tab icon={<i className="charts__crypto-icon fab fa-btc"></i>} label="BTC" />
                            <Tab icon={<i className="charts__crypto-icon fab fa-ethereum"></i>} label="ETH" />
                            <Tab icon={<i className="charts__crypto-icon">&#x141;</i>} label="LTC" />
                    </Tabs>
                </div>

            </Paper>
        </div>
    );
  }
}

export default ChartsTickerSymbol;
