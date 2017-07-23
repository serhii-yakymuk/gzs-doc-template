import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

import Loader from 'components/Loader';
import SelectField from 'components/SelectField';
import TextFieldRow from 'components/TextFieldRow';
import ChipsTextField from 'components/ChipsTextField';
import RadioButtonsRow from 'components/RadioButtonsRow';

import styles from './project.scss';

import SEX_LIST from 'constants/sex';
import PURPOSES_LIST from 'constants/purposes';
import LOCATIONS_LIST from 'constants/locations';
import * as fieldNames from 'constants/projectFieldNames';

const propTypes = {
  fields:                PropTypes.object.isRequired,
  isLoading:             PropTypes.bool.isRequired,
  generatedProject:      PropTypes.object,
  changeField:           PropTypes.func.isRequired,
  changeFields:          PropTypes.func.isRequired,
  fetchGenerateProject:  PropTypes.func.isRequired
};

class Project extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      fileLink: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    const { generatedProject } = nextProps;

    if (generatedProject && generatedProject !== this.props.generatedProject) {
      this.setState({
        fileLink: window.URL.createObjectURL(generatedProject)
      });
    }
  }

  render() {
    const {
      fields,
      isLoading,
      generatedProject,
      changeField: handleFieldChange,
      changeFields: handleFieldsChange,
      addArrayField: handleArrayFieldAdd,
      changeArrayField: handleArrayFieldChange,
      removeArrayField: handleArrayFieldRemove,
      fetchGenerateProject: handleGenerateProjectClick
    } = this.props;
    const {
      FIRST_NAME_WHO,
      LAST_NAME_WHO,
      MIDDLE_NAME_WHO,
      FIRST_NAME_WHOM,
      LAST_NAME_WHOM,
      MIDDLE_NAME_WHOM,
      PASSPORT,
      ISSUED_DATE,
      ISSUED_AUTHORITY,
      OWNER_ADDRESS,
      OWNER_SEX,
      PURPOSE,
      SIX_ZEM_ROW,
      SIX_ZEM_COLUMN,
      SETTLEMENT_TYPE,
      SETTLEMENT_NAME,
      SETTLEMENT_REGION,
      PROPERTY_AREA,
      PROPERTY_LOCATION,
      PROPERTY_ADDRESS_TYPE,
      PROPERTY_ADDRESS_NAME,
      PROPERTY_ADDRESS_BUILDING,
      PROPERTY_ADDRESS_BLOCK,
      PROPERTY_ORIENTATION,
      PROPERTY_NEIGHBOURS,
      BORDER_SIGNS_COUNT,
      LOCAL_GOVERNMENT_HEAD,
      LOCAL_GOVERNMENT_NAME,
      RESOLUTION_DATE,
      RESOLUTION_NUMBER,
      DEVELOPER_NAME,
      DEVELOPER_ENGINEER_NAME,
      CONTRACT_DATE,
      CONTRACT_NUMBER
    } = fieldNames;

    return (
      <div>
        {isLoading && <Loader />}
        <div className={styles.projectContainer}>
          <div className={styles.leftContainer}>
            <h2 className={styles.chapterCaption}>Дані про власника земельної ділянки:</h2>
            <TextFieldRow
              tip='Хто?'
              fields={fields}
              caption='У називному відмінку'
              onChange={handleFieldsChange}
              fieldNames={[LAST_NAME_WHO, FIRST_NAME_WHO, MIDDLE_NAME_WHO]}
              dependants={[LAST_NAME_WHOM, FIRST_NAME_WHOM, MIDDLE_NAME_WHOM]}
            />
            <TextFieldRow
              tip='Кому?'
              fields={fields}
              onChange={handleFieldChange}
              caption='У давальному відмінку'
              fieldNames={[LAST_NAME_WHOM, FIRST_NAME_WHOM, MIDDLE_NAME_WHOM]}
            />
            <TextFieldRow
              fields={fields}
              caption='Паспортні дані'
              onChange={handleFieldChange}
              fieldNames={[PASSPORT, ISSUED_DATE, ISSUED_AUTHORITY]}
            />
            <TextFieldRow
              fields={fields}
              caption='Адреса проживання'
              onChange={handleFieldChange}
              fieldNames={[OWNER_ADDRESS]}
            />
            <RadioButtonsRow
              caption='Стать'
              items={SEX_LIST}
              fieldName={OWNER_SEX}
              field={fields[OWNER_SEX]}
              onChange={handleFieldChange}
            />
            <h2 className={styles.chapterCaption}>Дані про земельну ділянку:</h2>
            <SelectField
              fieldName={PURPOSE}
              items={PURPOSES_LIST}
              onChange={handleFieldChange}
              value={fields[PURPOSE].value}
              floatingLabelText='Цільове призначення'
            />
            <TextFieldRow
              fields={fields}
              caption='За рахунок земель'
              onChange={handleFieldChange}
              fieldNames={[SIX_ZEM_ROW, SIX_ZEM_COLUMN]}
            />
            <TextFieldRow
              fields={fields}
              caption='Деталі'
              onChange={handleFieldChange}
              fieldNames={[PROPERTY_AREA, BORDER_SIGNS_COUNT, PROPERTY_ORIENTATION]}
            />
            <TextFieldRow
              fields={fields}
              caption='Населений пункт'
              onChange={handleFieldChange}
              fieldNames={[SETTLEMENT_TYPE, SETTLEMENT_NAME, SETTLEMENT_REGION]}
            />
            <TextFieldRow
              fields={fields}
              caption='Адреса ділянки'
              onChange={handleFieldChange}
              fieldNames={[PROPERTY_ADDRESS_TYPE, PROPERTY_ADDRESS_NAME, PROPERTY_ADDRESS_BUILDING, PROPERTY_ADDRESS_BLOCK]}
            />
            <RadioButtonsRow
              disabled
              caption='Розміщення'
              items={LOCATIONS_LIST}
              onChange={handleFieldChange}
              fieldName={PROPERTY_LOCATION}
              field={fields[PROPERTY_LOCATION]}
            />
            <ChipsTextField
              caption='Суміжники'
              onAdd={handleArrayFieldAdd}
              fieldName={PROPERTY_NEIGHBOURS}
              onRemove={handleArrayFieldRemove}
              onChange={handleArrayFieldChange}
              field={fields[PROPERTY_NEIGHBOURS]}
            />
            <h2 className={styles.chapterCaption}>Дані про підставу для розробки проекту землеустрою:</h2>
            <TextFieldRow
              fields={fields}
              onChange={handleFieldChange}
              caption='Орган самоврядування'
              fieldNames={[LOCAL_GOVERNMENT_HEAD, LOCAL_GOVERNMENT_NAME]}
            />
            <TextFieldRow
              fields={fields}
              caption='Рішення сесії'
              onChange={handleFieldChange}
              fieldNames={[RESOLUTION_DATE, RESOLUTION_NUMBER]}
            />
            <h2 className={styles.chapterCaption}>Дані про розробника:</h2>
            <TextFieldRow
              fields={fields}
              caption='Працівники'
              onChange={handleFieldChange}
              fieldNames={[DEVELOPER_NAME, DEVELOPER_ENGINEER_NAME]}
            />
            <TextFieldRow
              fields={fields}
              caption='Договір'
              onChange={handleFieldChange}
              fieldNames={[CONTRACT_DATE, CONTRACT_NUMBER]}
            />
            <div className={styles.controlsContainer}>
              <RaisedButton
                primary
                label='Згенерувати проект'
                onClick={() => handleGenerateProjectClick(fields)}
                disabled={Object.keys(fields).some(key => fields[key].errorText)}
              />
              {generatedProject && !isLoading &&
                <a
                  href={this.state.fileLink}
                  className={styles.downloadLink}
                  download={`Проект ${fields.lastNameWho.value}.docx`}
                >
                  Завантажити проект
                </a>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = propTypes;

export default Project;
