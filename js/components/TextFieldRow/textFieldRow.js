import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'components/TextField';

import styles from './textFieldRow.scss';
import { PROJECT_FIELDS } from 'constants/projectFields';

const propTypes = {
  tip:         PropTypes.string,
  fields:      PropTypes.object.isRequired,
  caption:     PropTypes.string.isRequired,
  onChange:    PropTypes.func.isRequired,
  dependants:  PropTypes.arrayOf(PropTypes.string),
  fieldNames:  PropTypes.arrayOf(PropTypes.string).isRequired
};

const defaultProps = {
  dependants: []
};

const TextFieldRow = ({
  tip,
  fields,
  caption,
  onChange,
  dependants,
  fieldNames
}) => {
  return (
    <div className={styles.textFieldsContainer}>
      <div className={styles.textFieldsCaption}>
        {caption}
        {tip && <span className={styles.tipText}>{` (${tip})`}</span>}
        :
      </div>
      {
        fieldNames.map((item, index) => {
          return (
            <TextField
              key={index}
              name={item}
              onChange={onChange}
              value={fields[item].value}
              dependant={dependants[index]}
              width={PROJECT_FIELDS[item].width}
              errorText={fields[item].errorText}
              className={index > 0 ? styles.leftIndent : ''}
              floatingLabelText={PROJECT_FIELDS[item].label}
            />
          );
        })
      }
    </div>
  );
};

TextFieldRow.propTypes = propTypes;
TextFieldRow.defaultProps = defaultProps;

export default TextFieldRow;
