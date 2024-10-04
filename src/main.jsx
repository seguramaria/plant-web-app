import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { data } from './data/data.js'; // Asegúrate de que 'data' se exporta correctamente
import App from './App.jsx';

document.title = data.name;

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
