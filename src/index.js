import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

console.log("%c🚀 Interested in what\'s going on under the hood?", "color: #6a5ef5; font-weight: bold;");
console.log("%c   Email me for the source code:", "font-weight: bold;");
console.log("   Studio@Andrew.mn");
