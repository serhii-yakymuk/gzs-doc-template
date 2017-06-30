import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const dark = '#000';

export const light = '#fff';

export const disabled = '#ccc';

export const warning = '#ff3d00';

export const success = '#00c853';

export const primary = '#2580d6';

export const faceIcon = '#71ade6';

export const solitude = '#e4f2ff';

export const primaryLight = '#0091ea';

export const mainFontColor = '#989898';

export const muiTheme = getMuiTheme({
  datePicker: {
    selectColor: primary
  },
  flatButton: {
    primaryTextColor: primary
  }
});
