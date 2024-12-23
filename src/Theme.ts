import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
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

export const darkTheme = createTheme(lightTheme, {
  palette: {
    mode: 'light',
    primary: {
      main: '#64B5F6',
      contrastText: '#000',
    },
    secondary: {
      main: '#EF476F',
      contrastText: '#000',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
})