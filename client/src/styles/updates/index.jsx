import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { Colors } from '../theme';

export const UpdateContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    padding: '40px 0px 40px 0px',
  },
  display: 'flex',
  justifyContent: 'center',
  height: '10px',
  alignItems: 'center',
  padding: '20px 0px 20px 0px',
  overflow: 'hidden',
  background: Colors.secondary,
}));

export const UpdateText = styled(Typography)(({ theme }) => ({
    fontFamily: ' "Montez", "Cursive" ',
  [theme.breakpoints.up('md')]: {
    fontSize: '3em',
  },
  color: Colors.red,
  fontSize: '1.5rem',
}));
