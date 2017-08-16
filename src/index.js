/* eslint-disable react/jsx-filename-extension */

// FIXME: fix flow for flexboxgrid2

import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
