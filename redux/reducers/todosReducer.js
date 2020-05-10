import { TODO_ADDED, TODOS_LOADED, TODO_DELETED, TODO_EDITED } from "../actions/types";

export default function (state = [], action) {
    switch (action.type) {
        //can come from form or server
        case TODO_ADDED:
            return [...state, action.payload];
        case TODOS_LOADED:
            return action.payload;
        case TODO_DELETED:
            const upDatedDelete = state.filter((todo) => {
                return todo._id != action.payload;
            });
            return upDatedDelete;
        case TODO_EDITED:
            const upDatedEdit = state.map((todo) => {
                if (todo._id === action.id) return (todo = { ...todo, ...action.payload });
                return todo;
            });
            return upDatedEdit;

        default:
            return state;
    }
}
