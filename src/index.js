import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import unsplash from './services/unsplash.js';
import { toJson } from "unsplash-js";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

window.unsplash = unsplash;
window.toJson = toJson;
