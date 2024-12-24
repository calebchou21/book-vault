import { createTheme, Theme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    currentlyReading: {
      main: string;
    },
    completed: {
      main: string;
    },
    abandoned: {
      main: string
    }
  }

  interface PaletteOptions {
    currentlyReading?: {
      main: string;
    },
    completed?: {
      main: string;
    },
    abandoned?: {
      main: string
    }
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
      default: "#FAEED1",
      paper: "#FFF",
    },
    // Custom colors for book icon coloring
    currentlyReading: {
      main: "#FFC300",
    },
    completed: {
      main: "#50C878",
    },
    abandoned: {
      main: "#A52A2A"
    }
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
    MuiPaper: {
      defaultProps: {
        style: {
          boxShadow: 'none',
          borderRadius: '3px', 
        }
      }
    }
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
    }
  },
});
