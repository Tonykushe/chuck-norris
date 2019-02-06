import axios from 'axios'
import { GET_CATEGORIES, GET_JOKE } from "./jokesConstants";


// GET ALL CATEGORIES
export const getCategories = () => dispatch => {
    axios.get("https://api.chucknorris.io/jokes/categories")
        .then(res => 
            dispatch({
                type: GET_CATEGORIES,
                payload: res.data
            })
            
        )
}


// Get JOKE BY CATEGORY
export const getJoke = (category) => dispatch => {
    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(res => 
            dispatch({
                type: GET_JOKE,
                payload: res.data
            })
        )
}
