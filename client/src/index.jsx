import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('app'));
root.render(<App/>);