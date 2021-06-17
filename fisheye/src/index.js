import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CalculationContextProvider from './contexts/calculationContext';
import FilterContextProvider from './contexts/filterContext';
import './styles/index.scss';


ReactDOM.render(
  <React.StrictMode>
    <FilterContextProvider>
      <CalculationContextProvider>
        <App />
      </CalculationContextProvider>
    </FilterContextProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);

