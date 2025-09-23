import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const divContainer = document.getElementById('root');
const root = createRoot(divContainer);

root.render(<App />);
