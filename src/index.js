import React from 'react';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';




const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
   <Provider store={store}>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  </Provider>
  </BrowserRouter>
);

