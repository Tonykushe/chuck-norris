import { GET_CATEGORIES, GET_JOKE } from "./jokesConstants";

const initialState = {
    categories: [],
    joke: {}
}


const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case GET_JOKE:
            return {
                ...state,
                joke: action.payload
            }
            
        default:
            return state;
    }
}


export default jokesReducer