import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0077B6',
      contrastText: '#fff',
    },
    secondary: {
      main: '#E63946',
      contrastText: '#fff',
    },
    background: {
      default: '#FFF8DE',
      paper: '#FFF',
    },
  },
  typography: {
    fontFamily: 'Lora, "Times New Roman", Times, serif',
    fontSize: 16,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});