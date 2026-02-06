// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Blog } from './blog';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';

// npx json-server --watch src/db.json --port 3005

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<Blog />
		</Provider>
	</BrowserRouter>,
);

// npm install json-server@0.17.4
// npm i styled-components prop-types react-hook-form yup react-router redux redux-thunk react-redux

// npm i --save @fortawesome/react-fontawesome@latest
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons

// npm i @hookform/resolvers
