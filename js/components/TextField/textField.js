import React from 'react';
import PropTypes from 'prop-types';
import TextFieldMaterial from 'material-ui/TextField';

const propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  dependant: PropTypes.string,
  floatingLabelText: PropTypes.string.isRequired
};

const TextField = ({
  name,
  value,
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
      floatingLabelText={floatingLabelText}
      onChange={(evt, val) => onChange(dependant ? [name, dependant] : name, val)}
    />
  );
};

TextField.propTypes = propTypes;

export default TextField;
