import React from 'react';
import PropTypes from 'prop-types';
import TextFieldMaterial from 'material-ui/TextField';

const propTypes = {
  name:               PropTypes.string.isRequired,
  value:              PropTypes.string.isRequired,
  width:              PropTypes.number,
  onChange:           PropTypes.func.isRequired,
  className:          PropTypes.string,
  dependant:          PropTypes.string,
  floatingLabelText:  PropTypes.string.isRequired
};

const TextField = ({
  name,
  value,
  width,
  onChange,
  className,
  dependant,
  floatingLabelText
}) => {
  return (
    <TextFieldMaterial
      name={name}
      value={value}
      className={className}
      style={width ? { width } : null}
      floatingLabelText={floatingLabelText}
      onChange={(evt, val) => onChange(dependant ? [name, dependant] : name, val)}
    />
  );
};

TextField.propTypes = propTypes;

export default TextField;
