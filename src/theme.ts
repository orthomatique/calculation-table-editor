import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "98% !important"
        },
        maxWidthLg: {
          maxWidth: "98%"
        },
        maxWidthMd: {
          maxWidth: "98%"
        },
        maxWidthSm: {
          maxWidth: "98%"
        },
        maxWidthXl: {
          maxWidth: "98%"
        },
        maxWidthXs: {
          maxWidth: "98%"
        },
      }
    }
  }
});

export default theme;
