import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {occasions} from './occasions.js';
import {reducers} from './reducer/reducers.js'
import registerServiceWorker from './registerServiceWorker';
import { createStore} from 'redux'
import { Provider } from 'react-redux'

const store = createStore(reducers,occasions);
//window.store = store;
const render=() =>
ReactDOM.render(<Provider  store={store}>
    <App />
    </Provider>, document.getElementById('root'));
render();
//store.subscribe (render)
registerServiceWorker();
