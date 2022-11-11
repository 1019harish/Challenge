import {createStore} from 'redux'
import rootReducers from './reducer/handleUserStatus'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReducers , composeWithDevTools())

export default store ;
