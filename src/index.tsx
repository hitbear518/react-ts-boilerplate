import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';

const root = document.getElementById('root');

const store = configureStore();

render(<App store={store} />, root);
