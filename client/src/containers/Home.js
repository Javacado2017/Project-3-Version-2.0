import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent } from "@material-ui/core/";
import HomeUserIntro from "../sub-component/HomeUserIntro";
import HomeChartsWidget from "../sub-component/HomeChartsWidget";

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
    <Card>
      <CardContent>
        <Grid container justify={"center"} spacing={24}>
          <Grid item xs={8}>
            <HomeUserIntro />
          </Grid>
        </Grid>

        <Grid container justify={"center"} spacing={24}>
          <Grid item xs={3}>
            <HomeChartsWidget />
          </Grid>
          <Grid item xs={3}>
            <HomeChartsWidget />
          </Grid>
          <Grid item xs={3}>
            <HomeChartsWidget />
          </Grid>
        </Grid>

        
      </CardContent>
    </Card>
  </div>
);

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
