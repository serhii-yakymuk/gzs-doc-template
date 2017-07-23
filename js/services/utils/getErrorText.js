import { PROJECT_FIELDS } from 'constants/projectFields';

export default function getErrorText(field, value) {
  const { validator, pattern, errorText } = PROJECT_FIELDS[field];

  return pattern && !pattern.test(value) || validator && !validator(value) ? errorText : '';
}
