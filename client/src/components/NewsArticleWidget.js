import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  maxHeight: 250
};

function SimpleMediaCard(props) {
  const { title, description, url, image } = props;
  return (
    <Card style={styles}>
      <div className="row">
        <div className="col s6">
          <CardMedia>
            <img
              width="100%"
              src={image}
              alt=""
            />
          </CardMedia>
        </div>
        <div className="col s6">
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {title}
            </Typography>
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <a href={url} target="_blank">
                Learn more
              </a>
            </Button>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}

export default SimpleMediaCard;
