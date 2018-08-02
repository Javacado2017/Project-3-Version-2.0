import React from "react";
import PropTypes from "prop-types";
import Auth from '../modules/Auth';

import { withStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography } from "@material-ui/core/";
import HomeUserIntro from "../components/HomeUserIntro";
import HomeChartsWidget from "../components/HomeChartsWidget";
import Charts from "./Charts";
import News from "./News";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  }
};

class Home extends React.Component {
  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card>
          <CardContent>
          <Grid container justify={"center"} spacing={24}>
            {Auth.isUserAuthenticated() ? (
              <Typography variant="caption" style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</Typography>
            ) : (
              <Typography variant="caption" style={{ fontSize: '16px', color: 'white' }}>You are not logged in.</Typography>
            )}
            </Grid>
            
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
        <Card>
          <Charts/>
        </Card>
        <Card>
          <News/>
        </Card>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
