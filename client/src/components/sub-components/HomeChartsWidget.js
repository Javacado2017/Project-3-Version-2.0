import React from "react";
import PropTypes from "prop-types";

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

const HomeChartsWidget = ({ classes }) => (
  <div className={classes.root}>
    <Card>
      <CardContent>
        <Typography variant="subheading" color="textPrimary">
          <i class="cf cf-btc" /> Bitcoin
        </Typography>
        <Typography variant="display1">$7,749.99</Typography>
        <Paper>
          <img
            height="150"
            width="200"
            src="https://www.ccn.com/wp-content/uploads/2017/06/Facebook-notifications.jpg"
            alt=""
          />
        </Paper>
      </CardContent>
    </Card>
  </div>
);

HomeChartsWidget.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeChartsWidget);
