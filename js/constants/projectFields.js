import * as fieldNames from 'constants/projectFieldNames';

export const PROJECT_FIELDS = {
  [fieldNames.FIRST_NAME_WHO]: {
    label: 'Ім\'я',
    defaultValue: ''
  },
  [fieldNames.LAST_NAME_WHO]: {
    label: 'Прізвище',
    defaultValue: ''
  },
  [fieldNames.MIDDLE_NAME_WHO]: {
    label: 'По батькові',
    defaultValue: ''
  },
  [fieldNames.FIRST_NAME_WHOM]: {
    label: 'Ім\'я',
    defaultValue: ''
  },
  [fieldNames.LAST_NAME_WHOM]: {
    label: 'Прізвище',
    defaultValue: ''
  },
  [fieldNames.MIDDLE_NAME_WHOM]: {
    label: 'По батькові',
    defaultValue: ''
  },
  [fieldNames.PASSPORT]: {
    width: 118,
    label: 'Серія і номер',
    defaultValue: 'МС 000000'
  },
  [fieldNames.ISSUED_DATE]: {
    width: 118,
    label: 'Дата видачі',
    defaultValue: '01.01.2000'
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
    label: 'Цільове призначення',
    defaultValue: '02.01'
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
    defaultValue: '0,0000'
  },
  [fieldNames.PROPERTY_LOCATION]: {
    label: 'Розміщення',
    defaultValue: 'in'
  },
  [fieldNames.PROPERTY_ADDRESS_TYPE]: {
    label: 'Тип',
    defaultValue: ''
  },
  [fieldNames.PROPERTY_ADDRESS_NAME]: {
    label: 'Назва',
    defaultValue: ''
  },
  [fieldNames.PROPERTY_ADDRESS_BUILDING]: {
    width: 118,
    label: 'Будинок',
    defaultValue: ''
  },
  [fieldNames.PROPERTY_ADDRESS_BLOCK]: {
    width: 118,
    label: 'Корпус',
    defaultValue: ''
  },
  [fieldNames.PROPERTY_ORIENTATION]: {
    label: 'Частина населеного пункту',
    defaultValue: 'західна'
  },
  [fieldNames.PROPERTY_NEIGHBOURS]: {
    label: 'Суміжники (П.І.П.)',
    defaultValue: 'Іванов І.І.'
  },
  [fieldNames.BORDER_SIGNS_COUNT]: {
    width: 118,
    label: 'Межові знаки',
    defaultValue: '4 (чотирьох)'
  },
  [fieldNames.LOCAL_GOVERNMENT_HEAD]: {
    label: 'Голова ОМС (П.І.П.)',
    defaultValue: 'Петров П.П.'
  },
  [fieldNames.LOCAL_GOVERNMENT_NAME]: {
    label: 'Назва ОМС',
    defaultValue: 'Петриківська сільська рада'
  },
  [fieldNames.RESOLUTION_DATE]: {
    label: 'Дата рішення сесії',
    defaultValue: '01.01.2000'
  },
  [fieldNames.RESOLUTION_NUMBER]: {
    label: 'Номер рішення сесії',
    defaultValue: '123'
  },
  [fieldNames.DEVELOPER_NAME]: {
    label: 'Розробник проекту (П.І.П.)',
    defaultValue: 'Савоцька І.І.'
  },
  [fieldNames.DEVELOPER_ENGINEER_NAME]: {
    label: 'Інженер-геодезист (П.І.П.)',
    defaultValue: 'Солодченко М.О.'
  },
  [fieldNames.CONTRACT_DATE]: {
    label: 'Дата договору',
    defaultValue: '01.01.2017'
  },
  [fieldNames.CONTRACT_NUMBER]: {
    label: 'Номер договору',
    defaultValue: '123'
  }
};
