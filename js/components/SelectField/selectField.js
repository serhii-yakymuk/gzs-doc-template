import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import SelectFieldMaterial from 'material-ui/SelectField';

import theme from './theme';
import styles from './selectField.scss';

const propTypes = {
  name:               PropTypes.string.isRequired,
  width:              PropTypes.number,
  value:              PropTypes.string.isRequired,
  items:              PropTypes.arrayOf(PropTypes.shape({
    value:              PropTypes.string.isRequired,
    label:              PropTypes.string.isRequired,
    description:        PropTypes.string
  })),
  disabled:           PropTypes.bool,
  onChange:           PropTypes.func.isRequired,
  className:          PropTypes.string,
  floatingLabelText:  PropTypes.string.isRequired
};

const defaultProps = {
  items: []
};

const SelectField = ({
  name,
  width,
  value,
  items,
  disabled,
  onChange,
  className,
  floatingLabelText
}) => {
  return (
    <SelectFieldMaterial
      name={name}
      value={value}
      fullWidth={!width}
      className={className}
      disabled={disabled || !items.length}
      floatingLabelText={floatingLabelText}
      style={width ? theme.selectField(width) : null}
      onChange={(evt, idx, val) => onChange(name, val)}
    >
      {
        items.map((item, index) => {
          return (
            <MenuItem
              key={index}
              value={item.value}
              primaryText={item.label}
              innerDivStyle={item.description ? theme.menuItem : null}
            >
              {
                item.description &&
                  <div className={styles.descriptionText}>
                    <span title={item.description}>
                      {item.description}
                    </span>
                  </div>
              }
            </MenuItem>
          );
        })
      }
    </SelectFieldMaterial>
  );
};

SelectField.propTypes = propTypes;
SelectField.defaultProps = defaultProps;

export default SelectField;
