
import React from 'react';
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { HomeUserIntro, HomeChartsWidget } from '../sub-components';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  }
};

const Home = ({ classes }) => (
  <div className={classes.root}>
      <HomeUserIntro/>
      <HomeChartsWidget/>
      <HomeChartsWidget/>
    </div>
);

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
