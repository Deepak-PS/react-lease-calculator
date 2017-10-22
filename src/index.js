import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LeaseCalculator from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LeaseCalculator />, document.getElementById('root'));
registerServiceWorker();
