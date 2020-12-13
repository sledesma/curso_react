import {createStore, combineReducers} from 'redux';

import itemsReducer from './reducers/items/reducer';

const rootReducer = combineReducers({
    items: itemsReducer
});

const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()))

export default store;