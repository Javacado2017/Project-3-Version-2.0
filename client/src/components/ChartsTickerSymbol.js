import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import {Tabs, Tab } from "@material-ui/core/";

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

const ChartsTickerSymbol = ({ classes, onClick, activeType}) => (
    <Tabs value={Object.keys(cryptoInformation).indexOf(activeType.toUpperCase())+1} indicatorColor="primary" textColor="primary" centered>
      {Object.keys(cryptoInformation).map((tickersymbol, index) => (
        <Tab key={"ticker" + index} onClick={onClick.bind(null, tickersymbol)} label={tickersymbol} />
      ))}
    </Tabs>
);

ChartsTickerSymbol.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChartsTickerSymbol);
