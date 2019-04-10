import reducer from 'reducer.js';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

export default function initStore() {
    const reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer, reduxCompose(applyMiddleware(thunk)));

    if (module.hot) {
        module.hot.accept('reducer.js', () => {
            store.replaceReducer(reducer);
        });
    }

    return store;
}
