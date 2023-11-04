import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';
import { UIProvider } from './contex/ui';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UIProvider>
    </ThemeProvider>
  );
}

export default App;
