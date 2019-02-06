import React, {Component} from 'react'
import { connect } from "react-redux";
import { getJoke } from "../jokesActions";
import PropTypes from "prop-types";
import queryString from 'query-string'



const actions = {
    getJoke
}

const mapState = (state) => ({
    jokes: state.jokes
})


class Jokes extends Component {
    componentDidMount() {
        const value = queryString.parse(this.props.location.search); // Returns an object
        if (value) {
            this.props.getJoke(value.category)
        }
        
    }
    render() {
        const { joke } = this.props.jokes
        return (
            <div className="container">
                <div className="row">   
                    <div className="col-md-8 m-auto">
                        <div className="card card-body bg-light mb-3">
                            <div className="row">
                                <div className="col-2">
                                    <img className="rounded-circle" src={joke.icon_url} alt="avatar" />
                                </div>
                                <div className="col-lg-6 col-md-4 col-8">
                                    <a href={joke.url}>
                                        <h3>{joke.category}</h3>
                                    </a>
                                    <p>{joke.value}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
        );
    }
}

Jokes.propTypes = {
  jokes: PropTypes.object.isRequired,
  getJoke: PropTypes.func.isRequired
};


export default connect(mapState, actions)(Jokes);
