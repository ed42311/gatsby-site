import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducer'
import thunk from 'redux-thunk';

const createStore = () => reduxCreateStore(rootReducer, applyMiddleware(thunk))
export default createStore;