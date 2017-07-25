import { PROJECT_FIELDS } from 'constants/projectFields';
import { ERROR_TEXT_REQUIRED } from 'constants/errorTexts';

export default function getErrorText(field, value) {
  const { validator, pattern, errorText, isRequired } = PROJECT_FIELDS[field];

  if (!isRequired && !value) {
    return '';
  }
  if (isRequired && !value) {
    return ERROR_TEXT_REQUIRED;
  }
  return pattern && !pattern.test(value) || validator && !validator(value) ? errorText : '';
}
