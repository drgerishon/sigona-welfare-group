import { Colors, DrawerWidth } from '../../styles/theme';
import '@fontsource/montez';
import styled from '@emotion/styled';
import { Box, IconButton, List, Typography } from '@mui/material';
export const AppConatiner = styled(Box)(() => ({
  display: 'flex',
  marginTop: 4,
  JustifyContent: 'center',
  alignItems: 'center',
  padding: '2px 8px',
}));

export const AppHeader = styled(Typography)(() => ({
  padding: '4px',
  flexGrow: 1,
  fontSize: '4em',
  fontFamily: ' "Montez", "Cursive" ',
  color: Colors.secondary,
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === 'row' ? 'flex' : 'block',
  flexGrow: 3,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: Colors.shaft,
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}));
export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 10,
  left: 250,
  zIndex: 1999,      
}));
