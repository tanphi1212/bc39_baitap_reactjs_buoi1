import { combineReducers } from "redux"
import tickerReducer from "./tickets";
const rootReducers = combineReducers({
    tickerReducer,
})

export default rootReducers;