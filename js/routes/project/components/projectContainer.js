import { connect } from 'react-redux';

import Project from './project';
import {
  changeField,
  changeFields,
  addArrayField,
  changeArrayField,
  removeArrayField,
  fetchGenerateProject
} from 'reducers/project';

const mapDispatchToProps = {
  changeField,
  changeFields,
  addArrayField,
  changeArrayField,
  removeArrayField,
  fetchGenerateProject
};
const mapStateToProps = state => ({
  fields: state.project.fields,
  isLoading: state.project.isLoading,
  generatedProject: state.project.generatedProject
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
