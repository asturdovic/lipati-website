import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';        // Global CSS import
import App from './App.jsx'; // Hovedkomponent import

// Finder root-elementet i HTML hvor React app’en skal mountes
const rootElement = document.getElementById('root');

// Opretter React root og renderer App-komponenten indeni StrictMode for ekstra fejlcheck
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
