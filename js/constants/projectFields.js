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
  ERROR_TEXT_NUMBER,
  ERROR_TEXT_PASSPORT,
  ERROR_TEXT_SHORT_NAME
} from 'constants/errorTexts';
import {
  FIELD_TYPE_DROPDOWN,
  FIELD_TYPE_CHIPS,
  FIELD_TYPE_RADIO
} from 'constants/fieldTypes';
import {
  LIST_SEXES,
  LIST_PURPOSES,
  LIST_LOCATIONS,
  LIST_SETTLEMENTS,
  LIST_LOCATION_PARTS
} from 'constants/listItemsNames';

export const PROJECT_FIELDS = {
  [fieldNames.FIRST_NAME_WHO]: {
    label: 'Ім\'я',
    defaultValue: 'Іван',
    pattern: NAME_PATTERN,
    errorText: ERROR_TEXT_NAME,
    isRequired: true
  },
  [fieldNames.LAST_NAME_WHO]: {
    label: 'Прізвище',
    defaultValue: 'Іванов',
    pattern: NAME_PATTERN,
    errorText: ERROR_TEXT_NAME,
    isRequired: true
  },
  [fieldNames.MIDDLE_NAME_WHO]: {
    label: 'По батькові',
    defaultValue: 'Іванович',
    pattern: NAME_PATTERN,
    errorText: ERROR_TEXT_NAME,
    isRequired: true
  },
  [fieldNames.FIRST_NAME_WHOM]: {
    label: 'Ім\'я',
    defaultValue: 'Івану',
    pattern: NAME_PATTERN,
    errorText: ERROR_TEXT_NAME,
    isRequired: true
  },
  [fieldNames.LAST_NAME_WHOM]: {
    label: 'Прізвище',
    defaultValue: 'Іванову',
    pattern: NAME_PATTERN,
    errorText: ERROR_TEXT_NAME,
    isRequired: true
  },
  [fieldNames.MIDDLE_NAME_WHOM]: {
    label: 'По батькові',
    defaultValue: 'Івановичу',
    pattern: NAME_PATTERN,
    errorText: ERROR_TEXT_NAME,
    isRequired: true
  },
  [fieldNames.PASSPORT]: {
    width: 118,
    label: 'Серія і номер',
    defaultValue: 'МС 000000',
    pattern: PASSPORT_PATTERN,
    errorText: ERROR_TEXT_PASSPORT,
    isRequired: true
  },
  [fieldNames.ISSUED_DATE]: {
    width: 118,
    label: 'Дата видачі',
    defaultValue: '01.01.2000',
    validator: dateValidator,
    errorText: ERROR_TEXT_DATE,
    isRequired: true
  },
  [fieldNames.ISSUED_AUTHORITY]: {
    width: 532,
    label: 'Ким видано',
    defaultValue: 'Тернопільським РВ УМВС України в Тернопільській області',
    isRequired: true
  },
  [fieldNames.OWNER_ADDRESS]: {
    width: 808,
    label: 'Адреса',
    defaultValue: 'м. Тернопіль, вул. Руська, 29/46',
    isRequired: true
  },
  [fieldNames.OWNER_SEX]: {
    label: 'Стать',
    defaultValue: 'male',
    type: FIELD_TYPE_RADIO,
    items: LIST_SEXES,
    isRequired: true
  },
  [fieldNames.PURPOSE]: {
    width: 808,
    label: 'Цільове призначення',
    defaultValue: '02.01',
    type: FIELD_TYPE_DROPDOWN,
    items: LIST_PURPOSES,
    isRequired: true
  },
  [fieldNames.SIX_ZEM_ROW]: {
    label: 'Шифр рядка 6-зем',
    defaultValue: '96',
    pattern: NUMBER_PATTERN,
    errorText: 'Число в діапазоні (01 ... 97)',
    validator: value => parseInt(value, 10) <= 97,
    isRequired: true
  },
  [fieldNames.SIX_ZEM_COLUMN]: {
    label: 'Номер стовпця 6-зем',
    defaultValue: '12',
    pattern: NUMBER_PATTERN,
    errorText: 'Число в діапазоні (5 ... 87)',
    validator: value => parseInt(value, 10) >= 5 && parseInt(value, 10) <= 87,
    isRequired: true
  },
  [fieldNames.SETTLEMENT_TYPE]: {
    width: 118,
    label: 'Тип',
    defaultValue: 'village',
    type: FIELD_TYPE_DROPDOWN,
    items: LIST_SETTLEMENTS,
    isRequired: true
  },
  [fieldNames.SETTLEMENT_NAME]: {
    label: 'Назва',
    defaultValue: 'Петриків',
    isRequired: true
  },
  [fieldNames.SETTLEMENT_REGION]: {
    label: 'Район',
    defaultValue: 'Тернопільський',
    isRequired: true
  },
  [fieldNames.PROPERTY_AREA]: {
    width: 118,
    label: 'Площа (га)',
    defaultValue: '0,1000',
    pattern: AREA_PATTERN,
    errorText: ERROR_TEXT_AREA,
    isRequired: true
  },
  [fieldNames.PROPERTY_LOCATION]: {
    label: 'Розміщення',
    defaultValue: 'in',
    type: FIELD_TYPE_RADIO,
    items: LIST_LOCATIONS,
    isRequired: true
  },
  [fieldNames.PROPERTY_ADDRESS_TYPE]: {
    label: 'Тип',
    isRequired: false
  },
  [fieldNames.PROPERTY_ADDRESS_NAME]: {
    label: 'Назва',
    isRequired: false
  },
  [fieldNames.PROPERTY_ADDRESS_BUILDING]: {
    width: 118,
    label: 'Будинок',
    isRequired: false
  },
  [fieldNames.PROPERTY_ADDRESS_BLOCK]: {
    width: 118,
    label: 'Корпус',
    isRequired: false
  },
  [fieldNames.PROPERTY_ORIENTATION]: {
    width: 256,
    label: 'Частина населеного пункту',
    defaultValue: 'західна',
    type: FIELD_TYPE_DROPDOWN,
    items: LIST_LOCATION_PARTS,
    isRequired: true
  },
  [fieldNames.PROPERTY_NEIGHBOURS]: {
    label: 'Суміжник (П.І.П.)',
    defaultValue: ['Іванов І.І.'],
    pattern: SHORT_NAME_PATTERN,
    errorText: ERROR_TEXT_SHORT_NAME,
    type: FIELD_TYPE_CHIPS,
    isRequired: false
  },
  [fieldNames.BORDER_SIGNS_COUNT]: {
    width: 118,
    label: 'Межові знаки',
    defaultValue: '4',
    pattern: NUMBER_PATTERN,
    errorText: ERROR_TEXT_NUMBER,
    isRequired: true
  },
  [fieldNames.LOCAL_GOVERNMENT_HEAD]: {
    label: 'Голова ОМС (П.І.П.)',
    defaultValue: 'Петров П.П.',
    pattern: SHORT_NAME_PATTERN,
    errorText: ERROR_TEXT_SHORT_NAME,
    isRequired: true
  },
  [fieldNames.LOCAL_GOVERNMENT_NAME]: {
    label: 'Назва ОМС',
    defaultValue: 'Петриківська сільська рада'
  },
  [fieldNames.RESOLUTION_DATE]: {
    label: 'Дата рішення сесії',
    defaultValue: '01.01.2000',
    validator: dateValidator,
    errorText: ERROR_TEXT_DATE,
    isRequired: true
  },
  [fieldNames.RESOLUTION_NUMBER]: {
    label: 'Номер рішення сесії',
    defaultValue: '123',
    isRequired: true
  },
  [fieldNames.DEVELOPER_NAME]: {
    label: 'Розробник проекту (П.І.П.)',
    defaultValue: 'Савоцька І.І.',
    pattern: SHORT_NAME_PATTERN,
    errorText: ERROR_TEXT_SHORT_NAME,
    isRequired: true
  },
  [fieldNames.DEVELOPER_ENGINEER_NAME]: {
    label: 'Інженер-геодезист (П.І.П.)',
    defaultValue: 'Солодченко М.О.',
    pattern: SHORT_NAME_PATTERN,
    errorText: ERROR_TEXT_SHORT_NAME,
    isRequired: true
  },
  [fieldNames.CONTRACT_DATE]: {
    label: 'Дата договору',
    defaultValue: new Date().toLocaleDateString(),
    validator: dateValidator,
    errorText: ERROR_TEXT_DATE,
    isRequired: true
  },
  [fieldNames.CONTRACT_NUMBER]: {
    label: 'Номер договору',
    defaultValue: '123',
    pattern: NUMBER_PATTERN,
    errorText: ERROR_TEXT_NUMBER,
    isRequired: true
  }
};
