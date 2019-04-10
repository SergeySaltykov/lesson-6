import {userModuleName} from 'modules/user/constants';
import {userReducer} from 'modules/user/reducers';
import {combineReducers} from 'redux';

export default combineReducers({
    [userModuleName]: userReducer,
})
