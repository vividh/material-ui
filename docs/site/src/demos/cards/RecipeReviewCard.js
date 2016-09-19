// @flow weak

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Text from 'material-ui/Text';
import paellaImage from 'docs/site/assets/images/paella@2x.jpg';

const styleSheet = createStyleSheet('RecipeReviewCard', () => ({
  card: { maxWidth: 345 },
}));

export default function RecipeReviewCard(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          avatar="R"
          title="Shrimp and Chorizo Paella"
          subhead="September 14, 2016"
        />
        <CardMedia>
          <img src={paellaImage} alt="Contemplative Reptile" />
        </CardMedia>
        <CardContent>
          <Text component="p">
            Lizards are a widespread group of squamate reptiles, with over
            6,000 species, ranging across all continents except Antarctica
          </Text>
        </CardContent>
        <CardActions>
          <Button compact primary>Share</Button>
          <Button compact primary>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

RecipeReviewCard.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};
