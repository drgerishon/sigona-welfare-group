import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { FooterTitle, SubscribeText } from '../../styles/footer';
import { Colors } from '../../styles/theme';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' },
      }}
    >
      <Grid container spacing={2} justifyContent={'center'}>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About Us</FooterTitle>
          <Typography variant="caption2">
            The group goal is to raise monetry contribution to families whre
            there is s deceased member
          </Typography>
          <Box sx={{ mt: 4, color: Colors.dove_gray }}>
            <WhatsAppIcon sx={{ mr: 1 }} />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                About Us
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Contributions
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Members
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>

        <Grid item md={6} lg={2}>
          <FooterTitle>Updates</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Login
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Updates
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                FAQ
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Info &amp; contact
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>

        <Grid item md={6} lg={4}>
          <FooterTitle>Enquiries</FooterTitle>
          <Stack>
            <SubscribeText
              color="primary"
              label="Email address"
              variant="standard"
            />

            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Send Message
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
