import React from 'react';
import PropTypes from 'prop-types';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import styles from './radioButtonsRow.scss';
import theme from './theme';

const propTypes = {
  items:     PropTypes.array.isRequired,
  field:     PropTypes.string.isRequired,
  caption:   PropTypes.string.isRequired,
  onChange:  PropTypes.func.isRequired,
  disabled:  PropTypes.bool,
  fieldName: PropTypes.string.isRequired
};

const defaultProps = {
  disabled: false
};

const RadioButtonsRow = ({
  items,
  field,
  caption,
  onChange,
  disabled,
  fieldName
}) => {
  return (
    <div className={styles.radioButtonsContainer}>
      <div className={styles.radioButtonsCaption}>
        {caption}:
      </div>
      <RadioButtonGroup
        name={fieldName}
        defaultSelected={field}
        style={theme.radioButtonRow}
        onChange={(evt, value) => onChange(fieldName, value)}
      >
        {
          items.map((item, index) => {
            return (
              <RadioButton
                key={index}
                label={item.label}
                value={item.value}
                disabled={disabled}
                style={theme.radioButton}
              />
            );
          })
        }
      </RadioButtonGroup>
    </div>
  );
};

RadioButtonsRow.propTypes = propTypes;
RadioButtonsRow.defaultProps = defaultProps;

export default RadioButtonsRow;
