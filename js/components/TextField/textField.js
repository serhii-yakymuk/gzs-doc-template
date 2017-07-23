import React from 'react';
import PropTypes from 'prop-types';
import TextFieldMaterial from 'material-ui/TextField';

import theme from './theme';

const propTypes = {
  name:               PropTypes.string.isRequired,
  value:              PropTypes.string.isRequired,
  width:              PropTypes.number,
  onChange:           PropTypes.func.isRequired,
  onKeyPress:         PropTypes.func,
  className:          PropTypes.string,
  dependant:          PropTypes.string,
  errorText:          PropTypes.string,
  floatingLabelText:  PropTypes.string.isRequired
};

const TextField = ({
  name,
  value,
  width,
  onChange,
  className,
  dependant,
  errorText,
  onKeyPress,
  floatingLabelText
}) => {
  return (
    <TextFieldMaterial
      name={name}
      value={value}
      className={className}
      errorText={errorText}
      onKeyPress={onKeyPress}
      errorStyle={theme.errorText}
      style={width ? { width } : null}
      floatingLabelText={floatingLabelText}
      onChange={(evt, val) => onChange(dependant ? [name, dependant] : name, val)}
    />
  );
};

TextField.propTypes = propTypes;

export default TextField;
