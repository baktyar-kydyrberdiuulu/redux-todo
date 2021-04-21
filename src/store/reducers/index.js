import { combineReducers } from 'redux';
import { counterReducer } from './Counter.reducer';
import { todolist_reducer } from './todoList.reducer';

export default combineReducers({
    todolist: todolist_reducer,
    counter: counterReducer,
});