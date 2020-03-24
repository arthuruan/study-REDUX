//englobar todos os reducers
import { combineReducers } from 'redux';

import todos from './todos';

export default combineReducers({
    todos,
});