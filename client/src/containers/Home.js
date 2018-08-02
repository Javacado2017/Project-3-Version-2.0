import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";
import HomeUserIntro from "./HomeUserIntro";
import HomeChartsWidget from "./HomeChartsWidget";

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
    
    <Grid container justify={'center'} spacing={24}>
      <Grid item sm={8}>
        <HomeUserIntro />
      </Grid>
    </Grid>



    <Grid container justify={'center'} spacing={24}>


      <Grid item sm={3}>
        <HomeChartsWidget />
      </Grid>
      <Grid item sm={3}>
        <HomeChartsWidget />
      </Grid>
      <Grid item sm={3}>
        <HomeChartsWidget />
      </Grid>

    
    </Grid>


  </div>
);

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
