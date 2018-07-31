import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  disableUnderline: true
};

function SignIn(props) {
  const { onSubmit, onChange, errors, user, successMsg } = props;

  return (
    <Card align="center">
      <CardContent>
        <form>
          <div class="row">
            <Typography gutterBottom variant="headline" component="h2">
              SIGN IN TO YOUR ACCOUNT
            </Typography>
          </div>
          <div class="row">
            <div class="col s6">
              <TextField
                name="email"
                label="Enter Email"
                margin="normal"
                InputProps={styles}
                InputLabelProps={styles}
              />
            </div>
            <div class="col s6">
              <TextField
                name="name"
                type="password"
                label="Enter Password"
                margin="normal"
                InputProps={styles}
                InputLabelProps={styles}
              />
            </div>
          </div>
          <div class="row">
            <Button size="large" color="primary">
              <a href="#">Sign In</a>
            </Button>
          </div>
          <p>
            Don't have an account?
            <a href="#">Sign Up</a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  successMsg: PropTypes.string.isRequired
};

export default SignIn;