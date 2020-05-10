import { GET_ERRORS, CLOSE_ERRORS } from "../actions/types";
const initialState = {
    msg: "",
    type: "",
    code: 0,
};
export default function (state = initialState, action) {
    switch (action.type) {
        case CLOSE_ERRORS:
            return {
                msg: "",
                status: null,
                id: 0,
            };
        case GET_ERRORS:
            return action.payload;

        default:
            return state;
    }
}
