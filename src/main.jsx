import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>,
);

// npm install json-server@0.17.4
// npm i styled-components prop-types react-hook-form yup react-router redux redux-thunk react-redux

// npm i --save @fortawesome/react-fontawesome@latest
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
