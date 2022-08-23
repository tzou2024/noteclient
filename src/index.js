import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'

import { BrowserRouter } from 'react-router-dom';
import {createRoot} from 'react-dom/client'

import theme from './Theme';

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
    <App bg="brand.100"/>
    </ChakraProvider>
  </BrowserRouter>
)
// ReactDOM.render(
//   <BrowserRouter>
//     <ChakraProvider>
//     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//     <App />
//     </ChakraProvider>
//   </BrowserRouter>,
//   document.getElementById('root'),
// );


reportWebVitals();
