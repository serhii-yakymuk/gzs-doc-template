import React from 'react';
import PropTypes from 'prop-types';

import Chips from 'components/Chips';
import TextField from 'components/TextField';

import { PROJECT_FIELDS } from 'constants/projectFields';
import styles from './chipsTextField.scss';

const propTypes = {
  field:              PropTypes.shape({
    value:              PropTypes.arrayOf(PropTypes.string),
    errorText:          PropTypes.string
  }).isRequired,
  onAdd:              PropTypes.func.isRequired,
  caption:            PropTypes.string.isRequired,
  onChange:           PropTypes.func.isRequired,
  onRemove:           PropTypes.func.isRequired,
  fieldName:          PropTypes.string.isRequired
};

const ChipsTextField = ({
  field,
  onAdd,
  caption,
  onChange,
  onRemove,
  fieldName
}) => {
  const onKeyPress = target => target.charCode === 13 && !field.errorText ? onAdd(fieldName) : null;

  return (
    <div className={styles.chipsTextFieldContainer}>
      <div className={styles.chipsTextFieldCaption}>
        {caption}:
      </div>
      <div>
        <TextField
          name={fieldName}
          onKeyPress={onKeyPress}
          value={field.currentValue}
          errorText={field.errorText}
          floatingLabelText={PROJECT_FIELDS[fieldName].label}
          onChange={(evt, value) => onChange(fieldName, value)}
        />
        <span onClick={() => !field.errorText ? onAdd(fieldName) : null}> + </span>
        <Chips
          items={field.value}
          onRemove={idx => onRemove(fieldName, idx)}
        />
      </div>
    </div>
  );
};

ChipsTextField.propTypes = propTypes;

export default ChipsTextField;
