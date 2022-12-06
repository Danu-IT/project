import { createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store";

export const lightTheme = createTheme();

export const darkTheme = createTheme({palette: {mode: 'dark'}});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  // </React.StrictMode>
);