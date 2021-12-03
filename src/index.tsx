import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { HashRouter } from 'react-router-dom'
// import { FixedGlobalStyle } from './theme'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    {/* <FixedGlobalStyle> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </FixedGlobalStyle> */}
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
