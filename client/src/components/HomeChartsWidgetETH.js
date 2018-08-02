import React from "react";
import PropTypes from "prop-types";

import "./stylesheets/ChartsLineGraph.css";
import HomeChartSamples from './HomeChartSamples';

import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Card,
  CardActions,
  CardContent,
  Button,
  Tooltip,
  Avatar,
  Chip,
  Typography
} from "@material-ui/core/";

const styles = {
  root: {
    flexGrow: 1
  }
};

const HomeChartsWidgetETH = ({ classes }) => (
  <div className={classes.root}>
    <Card>
      <CardContent>
        <Typography variant="subheading" color="primary">
          <i className="cf cf-btc" /> Ethereum
        </Typography>
        <Typography variant="display1">$411.50</Typography>
        <HomeChartSamples type={'eth'}/>
      </CardContent>
    </Card>
  </div>
);

HomeChartsWidgetETH.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeChartsWidgetETH);
