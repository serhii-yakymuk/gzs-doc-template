import React from 'react';
import PropTypes from 'prop-types';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import theme from './theme';

const propTypes = {
  name:       PropTypes.string.isRequired,
  items:      PropTypes.array.isRequired,
  value:      PropTypes.string.isRequired,
  onChange:   PropTypes.func.isRequired,
  disabled:   PropTypes.bool
};

const defaultProps = {
  disabled: false
};

const RadioButtonsRow = ({
  name,
  items,
  value,
  onChange,
  disabled
}) => {
  return (
    <RadioButtonGroup
      name={name}
      defaultSelected={value}
      style={theme.radioButtonRow}
      onChange={(evt, val) => onChange(name, val)}
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
  );
};

RadioButtonsRow.propTypes = propTypes;
RadioButtonsRow.defaultProps = defaultProps;

export default RadioButtonsRow;
