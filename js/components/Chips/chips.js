import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';

import theme from './theme';
import styles from './chips.scss';

const propTypes = {
  items:     PropTypes.arrayOf(PropTypes.string).isRequired,
  onRemove:  PropTypes.func.isRequired
};

const Chips = ({
  items,
  onRemove
}) => {
  return (
    <div className={styles.chips}>
      {
        items.map((item, idx) =>
          <Chip
            key={idx}
            style={theme.chip}
            onRequestDelete={() => onRemove(idx)}
          >
            {item}
          </Chip>
        )
      }
    </div>
  );
};

Chips.propTypes = propTypes;

export default Chips;
