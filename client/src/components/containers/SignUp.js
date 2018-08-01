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

function SignUp (props) {
  const { onSubmit, onChange, errors, user } = props;

  return (
    <Card align="center">
      <CardContent>
        <form>
          <div class="row">
            <Typography gutterBottom variant="headline" component="h2">
              CREATE AN ACCOUNT
            </Typography>
          </div>
          <div class="row">
            <div class="col s4">
              <TextField
                name="name"
                label="Enter Name"
                margin="normal"
                InputProps={styles}
                InputLabelProps={styles}
              />
            </div>
            <div class="col s4">
              <TextField
                name="email"
                label="Enter Email"
                margin="normal"
                InputProps={styles}
                InputLabelProps={styles}
              />
            </div>
            <div class="col s4">
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
            <Button size="large" color="primary" >
              <a href="#">Sign Up</a>
            </Button>
          </div>
          <p>
            Already have an account?
            <a href="#">Sign In</a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUp;
