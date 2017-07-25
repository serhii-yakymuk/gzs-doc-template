import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

import Loader from 'components/Loader';
import FieldsRow from 'components/FieldsRow';
import ChipsTextField from 'components/ChipsTextField';

import styles from './project.scss';

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
            <FieldsRow
              tip='Хто?'
              fields={fields}
              caption='У називному відмінку'
              onChange={handleFieldsChange}
              fieldNames={[LAST_NAME_WHO, FIRST_NAME_WHO, MIDDLE_NAME_WHO]}
              dependants={[LAST_NAME_WHOM, FIRST_NAME_WHOM, MIDDLE_NAME_WHOM]}
            />
            <FieldsRow
              tip='Кому?'
              fields={fields}
              onChange={handleFieldChange}
              caption='У давальному відмінку'
              fieldNames={[LAST_NAME_WHOM, FIRST_NAME_WHOM, MIDDLE_NAME_WHOM]}
            />
            <FieldsRow
              fields={fields}
              caption='Паспортні дані'
              onChange={handleFieldChange}
              fieldNames={[PASSPORT, ISSUED_DATE, ISSUED_AUTHORITY]}
            />
            <FieldsRow
              fields={fields}
              caption='Адреса проживання'
              onChange={handleFieldChange}
              fieldNames={[OWNER_ADDRESS]}
            />
            <FieldsRow
              fields={fields}
              caption='Стать'
              fieldNames={[OWNER_SEX]}
              onChange={handleFieldChange}
            />
            <h2 className={styles.chapterCaption}>Дані про земельну ділянку:</h2>
            <FieldsRow
              fields={fields}
              fieldNames={[PURPOSE]}
              caption='Цільове призначення'
              onChange={handleFieldChange}
            />
            <FieldsRow
              fields={fields}
              caption='За рахунок земель'
              onChange={handleFieldChange}
              fieldNames={[SIX_ZEM_ROW, SIX_ZEM_COLUMN]}
            />
            <FieldsRow
              fields={fields}
              caption='Деталі'
              onChange={handleFieldChange}
              fieldNames={[PROPERTY_AREA, BORDER_SIGNS_COUNT, PROPERTY_ORIENTATION]}
            />
            <FieldsRow
              fields={fields}
              caption='Населений пункт'
              onChange={handleFieldChange}
              fieldNames={[SETTLEMENT_TYPE, SETTLEMENT_NAME, SETTLEMENT_REGION]}
            />
            <FieldsRow
              fields={fields}
              caption='Адреса ділянки'
              onChange={handleFieldChange}
              fieldNames={[PROPERTY_ADDRESS_TYPE, PROPERTY_ADDRESS_NAME, PROPERTY_ADDRESS_BUILDING, PROPERTY_ADDRESS_BLOCK]}
            />
            <FieldsRow
              fields={fields}
              caption='Розміщення'
              onChange={handleFieldChange}
              fieldNames={[PROPERTY_LOCATION]}
            />
            <FieldsRow
              fields={fields}
              caption='Суміжники'
              onChange={handleFieldChange}
            >
              <ChipsTextField
                name={PROPERTY_NEIGHBOURS}
                onAdd={handleArrayFieldAdd}
                onRemove={handleArrayFieldRemove}
                onChange={handleArrayFieldChange}
                field={fields[PROPERTY_NEIGHBOURS]}
              />
            </FieldsRow>
            <h2 className={styles.chapterCaption}>Дані про підставу для розробки проекту землеустрою:</h2>
            <FieldsRow
              fields={fields}
              onChange={handleFieldChange}
              caption='Орган самоврядування'
              fieldNames={[LOCAL_GOVERNMENT_HEAD, LOCAL_GOVERNMENT_NAME]}
            />
            <FieldsRow
              fields={fields}
              caption='Рішення сесії'
              onChange={handleFieldChange}
              fieldNames={[RESOLUTION_DATE, RESOLUTION_NUMBER]}
            />
            <h2 className={styles.chapterCaption}>Дані про розробника:</h2>
            <FieldsRow
              fields={fields}
              caption='Працівники'
              onChange={handleFieldChange}
              fieldNames={[DEVELOPER_NAME, DEVELOPER_ENGINEER_NAME]}
            />
            <FieldsRow
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
