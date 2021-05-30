import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FilterContextProvider from './contexts/filterContext';
import './styles/index.scss';


ReactDOM.render(
  <React.StrictMode>
    <FilterContextProvider>
      <App />
    </FilterContextProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);

