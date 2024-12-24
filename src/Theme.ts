import { createTheme, Theme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    bookIconColors: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
    };
  }
  interface PaletteOptions {
    bookIconColors?: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
    };
  }
}

export const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0077B6",
      contrastText: "#fff",
    },
    secondary: {
      main: "#E63946",
      contrastText: "#fff",
    },
    background: {
      default: "#FFF8DE",
      paper: "#FFF",
    },
    bookIconColors: {
      color1: "#FF6347",
      color2: "#32CD32",
      color3: "#FFD700",
      color4: "#FF1493",
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
    mode: "dark",
    primary: {
      main: "#64B5F6",
      contrastText: "#000",
    },
    secondary: {
      main: "#EF476F",
      contrastText: "#000",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    bookIconColors: {
      color1: "#FF6347",
      color2: "#32CD32",
      color3: "#FFD700",
      color4: "#FF1493",
    },
  },
});
