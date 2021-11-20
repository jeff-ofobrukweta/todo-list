import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import GlobalStyles from 'styles/GlobalStyles'
import Index from 'pages/index'
import Store from 'store'
import 'typeface-poppins'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={Store}>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
