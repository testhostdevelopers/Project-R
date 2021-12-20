import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers';

// Creating redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;