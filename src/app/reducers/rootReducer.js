import { combineReducers } from "redux";
import jokesReducer from '../../components/jokes/jokesReducer';


const rootReducer = combineReducers({
    jokes: jokesReducer
})



export default rootReducer