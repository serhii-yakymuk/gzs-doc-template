import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { purple500, purple700, grey400 } from 'material-ui/styles/colors';

export const primary = purple700;
export const primaryLight = purple500;

export const error = '#cd2127';
export const warning = '#ff3d00';
export const success = '#00c853';

export const dark = '#000';
export const light = '#fff';
export const disabled = '#ccc';
export const mainFontColor = '#989898';

export const muiTheme = getMuiTheme({
  datePicker: {
    selectColor: primary
  },
  flatButton: {
    primaryTextColor: primary
  },
  palette: {
    primary1Color: primaryLight,
    primary2Color: primary,
    primary3Color: grey400,
    pickerHeaderColor: primaryLight
  }
});
