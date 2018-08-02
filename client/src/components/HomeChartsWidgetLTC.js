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

const HomeChartsWidgetLTC = ({ classes }) => (
  <div className={classes.root}>
    <Card>
      <CardContent>
        <Typography variant="subheading" color="primary">
          <i className="cf cf-btc" /> Litecoin
        </Typography>
        <Typography variant="display1">$76.10</Typography>
        <HomeChartSamples type={'ltc'}/>
      </CardContent>
    </Card>
  </div>
);

HomeChartsWidgetLTC.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeChartsWidgetLTC);
