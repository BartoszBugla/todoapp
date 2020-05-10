import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";
import todosReducer from "./todosReducer";
import modalReducer from "./modalReducer";
const rootReducer = combineReducers({
    Auth: authReducer,
    errors: errorsReducer,
    modal: modalReducer,
    todos: todosReducer,
});

export default rootReducer;
