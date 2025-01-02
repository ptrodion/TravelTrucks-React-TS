import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';

const theme = {
  color: {
    whiteColor: '#FFFFFF',
    mainBkgColor: '#F7F7F7',
    mainTextColor: '#101828',
    secondTextColor: '#475467',
    grayTextColor: '#6C717B',
    buttonLinkColor: '#E44848',
    buttonLinkColorHover: '#D84343',
    borderColor: '#DADDE1',
    itemsBkgColor: '#F2F4F7',
  },
  font: {
    weights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
    },
    size: {
      regular: '16px',
      medium: '20px',
      large: '48px',
    },
  },
  lineHeight: {
    regular: '1.2',
    medium: '1.5',
  },
  gaps: {
    s: '8px',
    m: '10px',
    x: '12px',
    xl: '32px',
    xxl: '64px',
  },
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
