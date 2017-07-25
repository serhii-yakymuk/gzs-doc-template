import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'components/TextField';
import SelectField from 'components/SelectField';
import RadioButtonsRow from 'components/RadioButtonsRow';

import styles from './fieldsRow.scss';
import { PROJECT_FIELDS } from 'constants/projectFields';
import { LIST_ITEMS } from 'constants/listItems';
import {
  FIELD_TYPE_DROPDOWN,
  FIELD_TYPE_RADIO
} from 'constants/fieldTypes';

const propTypes = {
  tip:         PropTypes.string,
  fields:      PropTypes.object.isRequired,
  caption:     PropTypes.string.isRequired,
  children:    PropTypes.node,
  onChange:    PropTypes.func.isRequired,
  dependants:  PropTypes.arrayOf(PropTypes.string),
  fieldNames:  PropTypes.arrayOf(PropTypes.string)
};

const defaultProps = {
  dependants: [],
  fieldNames: []
};

const FieldsRow = ({
  tip,
  fields,
  caption,
  children,
  onChange,
  dependants,
  fieldNames
}) => {
  return (
    <div className={styles.fieldsRowContainer}>
      <div className={styles.fieldsRowCaption}>
        {caption}
        {tip && <span className={styles.tipText}>{` (${tip})`}</span>}
        :
      </div>
      {
        fieldNames.map((item, index) => {
          const field = PROJECT_FIELDS[item];
          const items = LIST_ITEMS[field.items];

          switch (field.type) {
          case FIELD_TYPE_DROPDOWN:
            return (
              <SelectField
                key={index}
                name={item}
                items={items}
                onChange={onChange}
                width={field.width}
                value={fields[item].value}
                floatingLabelText={field.label}
                className={index > 0 ? styles.leftIndent : ''}
              />
            );
          case FIELD_TYPE_RADIO:
            return (
              <RadioButtonsRow
                key={index}
                name={item}
                items={items}
                onChange={onChange}
                value={fields[item].value}
                floatingLabelText={field.label}
              />
            );
          default:
            return (
              <TextField
                key={index}
                name={item}
                width={field.width}
                onChange={onChange}
                value={fields[item].value}
                dependant={dependants[index]}
                floatingLabelText={field.label}
                errorText={fields[item].errorText}
                className={index > 0 ? styles.leftIndent : ''}
              />
            );
          }
        })
      }
      { children }
    </div>
  );
};

FieldsRow.propTypes = propTypes;
FieldsRow.defaultProps = defaultProps;

export default FieldsRow;
