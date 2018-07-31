import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const styles = {
  margin: 10
};

function MainHeaderBar(props) {
  const { classes } = props;
  return (
    <AppBar color="inherit">
      <Toolbar variant="regular">
        <Typography align="left" variant="title">
          BlockTrain
        </Typography>
        <Typography align="right" variant="title">
          <Button>Sign Up</Button>
          <Button>Sign In</Button>
          <Button>Sign Out</Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

MainHeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default MainHeaderBar;
