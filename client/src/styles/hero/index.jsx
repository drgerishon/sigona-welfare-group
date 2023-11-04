import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import { Colors } from '../theme';

export const HeroContainer = styled(Box)(({theme}) => ({
    
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    background: Colors.light_gray,
    [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        alignItems: "center",
    }
})) 

export const HeroImage = styled("img")(({src, theme}) => ({
    src:`url(${src})`,
width: "500px",
[theme.breakpoints.down("md")] : {
    width: "350px"
},

[theme.breakpoints.down("sm")] : {
    width: "320px",
    height: "300px"
}
}))

export const HeroContent = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 420,
    padding: "30px"
}))

export const HeroTitle = styled(Typography)(({theme}) => ({
    
    lineHeight: 1.5,
    fontSize: "42px",
    marginBottom: "20px",
    [theme.breakpoints.down('sm')]: {
       fontSize: "26px"
    }
})) 

export const HeroDesription = styled(Typography)(({theme}) => ({
    
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: "1.5em",
    }
})) 

export const HeroReadMoreButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "color",
    name: "MyReadMoreButton",
    slot: "Root",
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === "primary" && styles.primary,
        props.color === "secondary" && styles.secondary,
    ],
})(({theme}) => ({
  padding: "20px 0px",
  fontSize: "16px",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")] : {
    padding: "10px 0px",
    fontSize: "14px"
  }
}))