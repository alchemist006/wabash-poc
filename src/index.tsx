import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import { ContextProvider } from './context';

const customScrollbarStyles = `
  ::-webkit-scrollbar {
    width: 10px; 
    background: #E0E0E0 0 0 no-repeat padding-box;
    border-radius: 4px;

  }

  ::-webkit-scrollbar-thumb {
    background: #9E9E9E 0 0 no-repeat padding-box; 
    border-radius: 4px;
    box-shadow: 0 3px 6px #00000029
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = customScrollbarStyles;
  document.head.appendChild(style);
}

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
);
