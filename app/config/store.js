import { createStore, applyMiddleware } from 'redux';

// Middlewares
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from './promiseMiddleware';

// Reducers
import reducers from '../reducers';


// Applying middlewares to the store
const createStoreWithMiddleware = applyMiddleware(reduxThunk, promise, logger)(createStore);

// Creating the store configuration
const configure = createStoreWithMiddleware(reducers);

export default configure;
