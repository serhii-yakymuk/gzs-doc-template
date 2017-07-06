import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import SelectFieldMaterial from 'material-ui/SelectField';

import theme from './theme';
import styles from './selectField.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string
  })),
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  floatingLabelText: PropTypes.string.isRequired
};

const defaultProps = {
  items: []
};

const SelectField = ({
  name,
  value,
  items,
  disabled,
  onChange,
  className,
  fullWidth,
  floatingLabelText
}) => {
  return (
    <SelectFieldMaterial
      name={name}
      value={value}
      className={className}
      fullWidth={fullWidth}
      disabled={disabled || !items.length}
      floatingLabelText={floatingLabelText}
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
