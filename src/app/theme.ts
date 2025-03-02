'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const originalTheme = createTheme({});

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          // bring AppBar to front
          zIndex: originalTheme.zIndex.drawer + 1
        }
      }
    }
  }
});

export default theme;
