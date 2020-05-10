import { OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

const today = new Date();
const currentMonth = today.getMonth();
const currentDay = today.getDate();
const currentYear = today.getFullYear();
const currentMinute = today.getMinutes();
const currentHour = today.getHours();

const initialState = {
    day: currentDay,
    hour: currentHour,
    month: currentMonth + 1,
    title: "",
    year: currentYear,
    minute: currentMinute,
    open: false,
};
export default function (state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return { ...state, open: true, ...action.payload };
        case CLOSE_MODAL:
            return initialState;
        default:
            return state;
    }
}
