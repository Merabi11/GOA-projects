import { createRoot } from 'react-dom/client';
import Apps from './App.jsx';

// createRoot(document.getElementById('root12')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

const divContainer = document.getElementById('div');

const div = createRoot(divContainer);

div.render(<Apps />);
