// @flow weak

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import {
  Card,
  CardMedia,
  CardContent,
} from 'material-ui/Card';
import Text from 'material-ui/Text';
import reptileImage from 'docs/site/assets/images/contemplative-reptile@2x.jpg';

const styleSheet = createStyleSheet('SimpleCard', () => ({
  card: { maxWidth: 345 },
}));

export default function SimpleCard(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia>
          <img src={reptileImage} alt="Contemplative Reptile" />
        </CardMedia>
        <CardContent>
          <Text>Hello dude</Text>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleCard.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};
