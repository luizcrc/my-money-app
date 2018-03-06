import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './main/app.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
