import moment from 'moment';

export const dateValidator = value => moment(value, 'DD.MM.YYYY', true).isValid();

