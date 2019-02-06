import axios from 'axios'
import { GET_CATEGORIES } from "./jokesConstants";


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

