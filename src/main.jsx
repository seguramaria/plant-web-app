import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { data } from './data/data.ts';
import App from './App.tsx';

document.title = data.name;

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
