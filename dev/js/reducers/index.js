import {combineReducers} from 'redux';
import UserReducer from './reducer-user';
import UsersDetail from './reducer-detail';

const allReducers = combineReducers({
  users: UserReducer,
  usersdetail: UsersDetail
});

export default allReducers;
