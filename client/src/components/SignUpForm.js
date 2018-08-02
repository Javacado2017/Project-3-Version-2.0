import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import TextField from "material-ui/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const SignUpForm = ({ onSubmit, onChange, errors, user }) => (
  <Card className="container">
    <CardContent>
      <form action="/" onSubmit={onSubmit}>
        <div>
          <Typography gutterBottom variant="headline" component="h2">
            CREATE AN ACCOUNT
          </Typography>
        </div>
        {errors.summary && <p>{errors.summary}</p>}
        <div>
          <TextField
            label="Name"
            name="name"
            errorText={errors.name}
            onChange={onChange}
            value={user.name}
          />
        </div>
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
            type="submit"
            variant="raised"
          >
            Create an Account
          </Button>
        </div>

        <div>
          <Typography>
            Already have an account? <Link to={"/signin"}>Sign In</Link>
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
  user: PropTypes.object.isRequired
};

export default SignUpForm;
