// @flow weak

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import classNames from 'classnames';
import { cloneChildrenWithClassName } from '../utils/react';

export const styleSheet = createStyleSheet('CardActions', () => ({
  cardActions: {
    padding: '8px 4px',
  },
  cardAction: {
    margin: '0 4px',
  },
}), { index: 10 });

export default function CardActions(props, context) {
  const {
    children,
    className: classNameProp,
    ...other,
  } = props;

  const classes = context.styleManager.render(styleSheet);
  const className = classNames(classes.cardActions, classNameProp);

  return (
    <div className={className} {...other}>
      {cloneChildrenWithClassName(children, classes.cardAction)}
    </div>
  );
}

CardActions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CardActions.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};
