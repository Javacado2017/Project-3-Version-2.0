import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  maxHeight: 500
};

function HomeUserIntro(props) {
  const { classes } = props;
  return (
    <Card align="center" style={styles}>
      <div class="row">
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
          <a href="#">Get Started</a>
        </Button>
        <Button size="medium" color="primary">
          <a href="#">View Trends</a>
        </Button>
        <Button size="medium" color="primary">
          <a href="#">Read News</a>
        </Button>
      </div>
    </Card>
  );
}

HomeUserIntro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default HomeUserIntro;
