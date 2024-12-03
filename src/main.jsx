import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4'; 

import './index.css';
import Router from './router/router.jsx';


ReactGA.initialize('G-7J7GSZ5GPR');  
ReactGA.send('pageview');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
