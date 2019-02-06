import React from 'react'
import { Link } from "react-router-dom";

const CategoryItem = ({category}) => {
    
    return (
        <div class="list-group">
            <Link
                to={`/api.chucknorris.io/jokes/random?category=${category}`}
                class="list-group-item list-group-item-action"
            >
                {category}
            </Link>
        </div>
        
    )
}







export default CategoryItem
