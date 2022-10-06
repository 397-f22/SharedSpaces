import {createTheme} from '@mui/material/styles';

// creating theme for SharedSpaces
export const headerTheme = createTheme({
    palette: {
      primary: {
        light: '#ffffff',
        main: '#fafafa',
        dark: '#c7c7c7',
        contrastText: '#4a367a',
        boxShadow: "px 0px 0px 0px",
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
});