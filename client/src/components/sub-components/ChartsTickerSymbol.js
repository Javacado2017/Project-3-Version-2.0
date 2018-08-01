import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab } from "@material-ui/core/";

const styles = {
  root: {
    flexGrow: 1
  }
};

const cryptoInformation = {
  BTC: {
    coinName: "BitCoin",
    iconClass: "cf cf-btc"
  },
  ETH: {
    coinName: "Etherium",
    iconClass: "cf cf-eth"
  },
  LTC: {
    coinName: "Litecoin",
    iconClass: "cf cf-ltc"
  }
};

const ChartsTickerSymbol = ({ classes }) => (
  <Paper className={classes.root}>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      {Object.keys(cryptoInformation).map(tickersymbol => (
        <Tab label={tickersymbol} />
      ))}
    </Tabs>
    <Paper>(charts go there)</Paper>
  </Paper>
);

ChartsTickerSymbol.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChartsTickerSymbol);
