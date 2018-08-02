import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import TextField from "material-ui/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user,
  toggleAuthenticateStatus
}) => (
  <Card className="container">
    <CardContent>
      <form action="/" onSubmit={onSubmit}>
        <div>
          <Typography gutterBottom variant="headline" component="h2">
            SIGN INTO YOUR ACCOUNT
          </Typography>
        </div>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div>
          <TextField
            label="Email"
            name="email"
            errorText={errors.email}
            onChange={onChange}
            value={user.email}
          />
        </div>

        <div>
          <TextField
            label="Password"
            type="password"
            name="password"
            onChange={onChange}
            errorText={errors.password}
            value={user.password}
          />
        </div>

        <div>
          <Button
            className="button-line"
            type="submit"
            className="button-line"
            variant="raised"
          >
            Sign In
          </Button>
        </div>

        <div>
          <Typography>
            Don't have an account? <Link to={"/signup"}>Sign Up</Link>
          </Typography>
        </div>
      </form>
    </CardContent>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
