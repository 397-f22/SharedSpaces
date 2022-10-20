import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {ThemeProvider } from '@mui/material/styles';
import {headerTheme} from '../styles/Themes';
import '../index.css';

//import { NavLink } from 'react-router-dom';
import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';
const style = {color:"#2E6171", backgroundColor: "whitesmoke", fontFamily: 'Ubuntu',
'&:hover': {
    color: 'white',
    backgroundColor: '#798086',
  },
  '&:active': {
    color: 'white',
    backgroundColor: '#556F7A',
  }}


const SignInButton = () => (
  <Button size="small" sx= {style} onClick={() => signInWithGoogle()}>Sign in</Button>
);

const SignOutButton = () => (
  <Button size="small" sx= {style}  onClick={() => signOut()}>Sign Out</Button>
);

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};

const activation = ({isActive}) => isActive ? 'active' : 'inactive';


const NavBar = () => {
  return (
    <ThemeProvider theme={headerTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#2E6171" }}>
          <Toolbar>
            <Typography variant="h6" component="div" color="white" sx={{ flexGrow: 1, paddingLeft: 15, fontSize: 30, fontFamily: 'Ubuntu'}}>
              SharedSpaces
            </Typography>
            <AuthButton />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default NavBar;
