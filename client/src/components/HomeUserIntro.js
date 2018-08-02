import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, Button, Typography } from "@material-ui/core/";

const styles = {
  root: {
    flexGrow: 1
  }
};

const HomeUserIntro = ({ classes }) => (
  <div className={classes.root}>
    <Card align="center">
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          WATCH | LEARN | STAY INFORMED
        </Typography>
        <Typography component="p">
          Welcome to the BLOCK-'TRAIN'. This is an online educational platform
          and tool to help students and new investors understand and keep
          up-to-date on the rapidly evolving world of blockhain technologies.
        </Typography>
      </CardContent>
      <Button size="medium" color="primary">
        Get Started
      </Button>
      <Button size="medium" color="primary">
        View Trends
      </Button>
      <Button size="medium" color="primary">
        Read News
      </Button>
    </Card>
  </div>
);

HomeUserIntro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeUserIntro);
