import * as fieldNames from 'constants/projectFieldNames';
import {
  AREA_PATTERN,
  NAME_PATTERN,
  NUMBER_PATTERN,
  PASSPORT_PATTERN,
  SHORT_NAME_PATTERN
} from 'constants/patterns';
import { dateValidator } from 'services/utils/validators';
import {
  ERROR_TEXT_AREA,
  ERROR_TEXT_DATE,
  ERROR_TEXT_NAME,
  ERROR_TEXT_PASSPORT,
  ERROR_TEXT_SHORT_NAME
} from 'constants/errorTexts';

export const PROJECT_FIELDS = {
  [fieldNames.FIRST_NAME_WHO]: {
    label: 'Ім\'я',
    defaultValue: 'Іван',
    pattern: NAME_PATTERN,
    errorText: ERROR_TEXT_NAME
  },
  [fieldNames.LAST_NAME_WHO]: {
    label: 'Прізвище',
    defaultValue: 'Іванов',
    pattern: NAME_PATTERN,
    errorText: ERROR_TEXT_NAME
  },
  [fieldNames.MIDDLE_NAME_WHO]: {
    label: 'По батькові',
    defaultValue: 'Іванович',
    pattern: NAME_PATTERN,
    errorText: ERROR_TEXT_NAME
  },
  [fieldNames.FIRST_NAME_WHOM]: {
    label: 'Ім\'я',
    defaultValue: 'Івану',
    pattern: NAME_PATTERN,
    errorText: ERROR_TEXT_NAME
  },
  [fieldNames.LAST_NAME_WHOM]: {
    label: 'Прізвище',
    defaultValue: 'Іванову',
    pattern: NAME_PATTERN,
    errorText: ERROR_TEXT_NAME
  },
  [fieldNames.MIDDLE_NAME_WHOM]: {
    label: 'По батькові',
    defaultValue: 'Івановичу',
    pattern: NAME_PATTERN,
    errorText: ERROR_TEXT_NAME
  },
  [fieldNames.PASSPORT]: {
    width: 118,
    label: 'Серія і номер',
    defaultValue: 'МС 000000',
    pattern: PASSPORT_PATTERN,
    errorText: ERROR_TEXT_PASSPORT
  },
  [fieldNames.ISSUED_DATE]: {
    width: 118,
    label: 'Дата видачі',
    defaultValue: '01.01.2000',
    validator: dateValidator,
    errorText: ERROR_TEXT_DATE
  },
  [fieldNames.ISSUED_AUTHORITY]: {
    width: 532,
    label: 'Ким видано',
    defaultValue: 'Тернопільським РВ УМВС України в Тернопільській області'
  },
  [fieldNames.OWNER_ADDRESS]: {
    width: 808,
    label: 'Адреса',
    defaultValue: 'м. Тернопіль, вул. Руська, 29/46'
  },
  [fieldNames.OWNER_SEX]: {
    label: 'Стать',
    defaultValue: 'male'
  },
  [fieldNames.PURPOSE]: {
    width: 1058,
    label: 'Цільове призначення',
    defaultValue: '02.01'
  },
  [fieldNames.SIX_ZEM_ROW]: {
    label: 'Шифр рядка 6-зем',
    defaultValue: '96',
    pattern: NUMBER_PATTERN,
    errorText: 'Число в діапазоні (01 ... 97)',
    validator: value => parseInt(value, 10) <= 97
  },
  [fieldNames.SIX_ZEM_COLUMN]: {
    label: 'Номер стовпця 6-зем',
    defaultValue: '12',
    pattern: NUMBER_PATTERN,
    errorText: 'Число в діапазоні (5 ... 87)',
    validator: value => parseInt(value, 10) >= 5 && parseInt(value, 10) <= 87
  },
  [fieldNames.SETTLEMENT_TYPE]: {
    label: 'Тип',
    defaultValue: 'с.'
  },
  [fieldNames.SETTLEMENT_NAME]: {
    label: 'Назва',
    defaultValue: 'Петриків'
  },
  [fieldNames.SETTLEMENT_REGION]: {
    label: 'Район',
    defaultValue: 'Тернопільський'
  },
  [fieldNames.PROPERTY_AREA]: {
    width: 118,
    label: 'Площа (га)',
    defaultValue: '0,1000',
    pattern: AREA_PATTERN,
    errorText: ERROR_TEXT_AREA
  },
  [fieldNames.PROPERTY_LOCATION]: {
    label: 'Розміщення',
    defaultValue: 'in'
  },
  [fieldNames.PROPERTY_ADDRESS_TYPE]: {
    label: 'Тип'
  },
  [fieldNames.PROPERTY_ADDRESS_NAME]: {
    label: 'Назва'
  },
  [fieldNames.PROPERTY_ADDRESS_BUILDING]: {
    width: 118,
    label: 'Будинок'
  },
  [fieldNames.PROPERTY_ADDRESS_BLOCK]: {
    width: 118,
    label: 'Корпус'
  },
  [fieldNames.PROPERTY_ORIENTATION]: {
    label: 'Частина населеного пункту',
    defaultValue: 'західна'
  },
  [fieldNames.PROPERTY_NEIGHBOURS]: {
    label: 'Суміжник (П.І.П.)',
    defaultValue: ['Іванов І.І.'],
    pattern: SHORT_NAME_PATTERN,
    errorText: ERROR_TEXT_SHORT_NAME
  },
  [fieldNames.BORDER_SIGNS_COUNT]: {
    width: 118,
    label: 'Межові знаки',
    defaultValue: '4',
    pattern: NUMBER_PATTERN
  },
  [fieldNames.LOCAL_GOVERNMENT_HEAD]: {
    label: 'Голова ОМС (П.І.П.)',
    defaultValue: 'Петров П.П.',
    pattern: SHORT_NAME_PATTERN,
    errorText: ERROR_TEXT_SHORT_NAME
  },
  [fieldNames.LOCAL_GOVERNMENT_NAME]: {
    label: 'Назва ОМС',
    defaultValue: 'Петриківська сільська рада'
  },
  [fieldNames.RESOLUTION_DATE]: {
    label: 'Дата рішення сесії',
    defaultValue: '01.01.2000',
    validator: dateValidator,
    errorText: ERROR_TEXT_DATE
  },
  [fieldNames.RESOLUTION_NUMBER]: {
    label: 'Номер рішення сесії',
    defaultValue: '123'
  },
  [fieldNames.DEVELOPER_NAME]: {
    label: 'Розробник проекту (П.І.П.)',
    defaultValue: 'Савоцька І.І.',
    pattern: SHORT_NAME_PATTERN,
    errorText: ERROR_TEXT_SHORT_NAME
  },
  [fieldNames.DEVELOPER_ENGINEER_NAME]: {
    label: 'Інженер-геодезист (П.І.П.)',
    defaultValue: 'Солодченко М.О.',
    pattern: SHORT_NAME_PATTERN,
    errorText: ERROR_TEXT_SHORT_NAME
  },
  [fieldNames.CONTRACT_DATE]: {
    label: 'Дата договору',
    defaultValue: new Date().toLocaleDateString(),
    validator: dateValidator,
    errorText: ERROR_TEXT_DATE
  },
  [fieldNames.CONTRACT_NUMBER]: {
    label: 'Номер договору',
    defaultValue: '123'
  }
};
