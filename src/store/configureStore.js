import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const congifureStore = initialState => {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools()
    )
};

export default congifureStore;