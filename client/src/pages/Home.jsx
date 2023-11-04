import { Box, Button, Container, Typography } from '@mui/material';
import AppBar from '../components/appbar';
import Hero from '../components/banner';
import Updates from '../components/updates';
import Products from '../components/products';
import Footer from '../components/footer';
import AppDrawer from '../components/drawer';
import Search from '../components/search';

const Home = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ background: '#fff' }}>
        <AppBar />
        <Updates />
        <Hero />
        <Box display="flex" justifyContent={"center"} sx={{p: 4}}>
          <Typography variant="h4">
            Our Products
          </Typography>
        </Box>
        <Products />
        <Search />
        <Footer />
        <AppDrawer />
      </Container>
    </>
  );
};
export default Home;
