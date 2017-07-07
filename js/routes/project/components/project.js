import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import Loader from 'components/Loader';
import TextField from 'components/TextField';
import SelectField from 'components/SelectField';
import { changeField, changeFields, fetchGenerateProject } from 'reducers/project';

import purposes from 'constants/purposes';
import styles from './project.scss';

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
      fetchGenerateProject: handleGenerateProjectClick
    } = this.props;

    return (
      <div>
        {isLoading && <Loader />}
        <h2 className={styles.pageCaption}>Заповніть поля значеннями вручну або скористайтесь імпортом існуючого XML файлу:</h2>
        <div className={styles.projectContainer}>
          <div className={styles.leftContainer}>
            <p className={styles.textFieldsCaption}>
              У називному відмінку <span className={styles.tipText}>(Хто?)</span>:
            </p>
            <div className={styles.textFieldsContainer}>
              <TextField
                name='lastNameWho'
                dependant='lastNameWhom'
                value={fields.lastNameWho}
                floatingLabelText='Прізвище'
                onChange={handleFieldsChange}
              />
              <TextField
                name='firstNameWho'
                floatingLabelText="Ім'я"
                dependant='firstNameWhom'
                value={fields.firstNameWho}
                onChange={handleFieldsChange}
                className={styles.leftIndent}
              />
              <TextField
                name='middleNameWho'
                dependant='middleNameWhom'
                value={fields.middleNameWho}
                onChange={handleFieldsChange}
                className={styles.leftIndent}
                floatingLabelText='По батькові'
              />
            </div>
            <p className={styles.textFieldsCaption}>
              У давальному відмінку <span className={styles.tipText}>(Кому?)</span>:
            </p>
            <div className={styles.textFieldsContainer}>
              <TextField
                name='lastNameWhom'
                floatingLabelText='Прізвище'
                value={fields.lastNameWhom}
                onChange={handleFieldChange}
              />
              <TextField
                name='firstNameWhom'
                floatingLabelText="Ім'я"
                value={fields.firstNameWhom}
                onChange={handleFieldChange}
                className={styles.leftIndent}
              />
              <TextField
                name='middleNameWhom'
                onChange={handleFieldChange}
                value={fields.middleNameWhom}
                className={styles.leftIndent}
                floatingLabelText='По батькові'
              />
            </div>
            <SelectField
              fullWidth
              name='purpose'
              items={purposes}
              value={fields.purpose}
              onChange={handleFieldChange}
              floatingLabelText='Цільове призначення земельної ділянки'
            />
            <TextField
              name='propertyArea'
              value={fields.propertyArea}
              onChange={handleFieldChange}
              floatingLabelText='Площа земельної ділянки (га)'
            />
            <div>
              <RaisedButton
                primary
                label='Згенерувати проект'
                onClick={() => handleGenerateProjectClick(fields)}
              />
              {generatedProject && !isLoading &&
                <a
                  href={this.state.fileLink}
                  download='project.docx'
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

const mapDispatchToProps = {
  changeField,
  changeFields,
  fetchGenerateProject
};
const mapStateToProps = state => ({
  fields: state.project.fields,
  isLoading: state.project.isLoading,
  generatedProject: state.project.generatedProject
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
