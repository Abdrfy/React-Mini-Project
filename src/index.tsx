import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/configureStore';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
