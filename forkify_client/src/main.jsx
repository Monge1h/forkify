import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#98DFBA',
      },
    },
  },
})
ReactDOM.render(
  <ChakraProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
)
