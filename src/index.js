import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import GlobalCss from './Global.css';


const theme = {
  secondary: "#D72323" ,
  secondaryOp: "rgba(215, 35, 35, 0.8)"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalCss />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  
  </>
);