import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCategories } from "../jokesActions";
import CategoryItem from './CategoryItem'

const actions = {
    getCategories
}

const mapState = (state) => ({
    jokes: state.jokes
})

class Categories extends Component {

    componentDidMount() {
        this.props.getCategories();
    }


    render() {
        const { categories } = this.props.jokes
        
        let categoryItem;
        if (categories.length > 0) {
            categoryItem = categories.map((category, index) => (
                <CategoryItem key={index} category={category} />
            ))
        } else {
            categoryItem = <h1>No categories found</h1>
        }


        return (
            <div className="categories">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <h1>Choose a category</h1>
                            {categoryItem}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Categories.propTypes = {
    jokes: PropTypes.object.isRequired,
    getCategories: PropTypes.func.isRequired
};



export default connect(mapState, actions)(Categories);