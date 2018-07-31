import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core/";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  }
};

const MainHeaderBar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          BlockTrain
        </Typography>
        <Button color="inherit">Sign Up</Button>
        <Button color="inherit">Sign In</Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  </div>
);

MainHeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainHeaderBar);
