import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Routes from "./routes";
import reportWebVitals from './reportWebVitals';
import SearchContext from "./HOC/SearchContext";
import ErrorBoundary from "./HOC/ErrorBoundary";

import 'animate.css';

export const Context = React.createContext({
	content: '',
	handleContentChange() {}
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-width: 320px;
    background: #FFF;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    font-size: 14px;
    line-height: 1.4285em;
    color: rgba(0, 0, 0, .87);
    font-smoothing: antialiased;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <SearchContext>
        <GlobalStyle />
        <Routes />
      </SearchContext>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
