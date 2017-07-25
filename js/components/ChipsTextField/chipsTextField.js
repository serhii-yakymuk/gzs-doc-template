import React from 'react';
import PropTypes from 'prop-types';

import Chips from 'components/Chips';
import TextField from 'components/TextField';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { PROJECT_FIELDS } from 'constants/projectFields';
import { primary } from 'styles/theme';
import theme from './theme';

const propTypes = {
  name:               PropTypes.string.isRequired,
  field:              PropTypes.shape({
    value:              PropTypes.arrayOf(PropTypes.string),
    errorText:          PropTypes.string
  }).isRequired,
  onAdd:              PropTypes.func.isRequired,
  onChange:           PropTypes.func.isRequired,
  onRemove:           PropTypes.func.isRequired
};

const ChipsTextField = ({
  name,
  field,
  onAdd,
  onChange,
  onRemove
}) => {
  const { errorText, currentValue } = field;
  const onKeyPress = target =>
    target.charCode === 13 && !errorText && currentValue ?
      onAdd(name) :
      null;

  return (
    <div>
      <TextField
        name={name}
        value={currentValue}
        errorText={errorText}
        onKeyPress={onKeyPress}
        floatingLabelText={PROJECT_FIELDS[name].label}
        onChange={(evt, value) => onChange(name, value)}
      />
      <IconButton
        style={theme.icon}
        onClick={() => onAdd(name)}
        disabled={!!errorText || !currentValue}
      >
        <ContentAdd
          hoverColor={primary}
        />
      </IconButton>
      <Chips
        items={field.value}
        onRemove={idx => onRemove(name, idx)}
      />
    </div>
  );
};

ChipsTextField.propTypes = propTypes;

export default ChipsTextField;
