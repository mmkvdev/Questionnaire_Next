import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import ReduxReducer from './redux/Reducer/RootReducer';

function getStore(initialState) {
    const store = createStore(
        ReduxReducer,
        initialState,
        applyMiddleware(thunkMiddleWare)
    )

    return store
}

export default getStore
