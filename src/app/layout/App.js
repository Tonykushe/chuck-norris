import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Categories from '../../components/jokes/Categories/Categories';
import Jokes from "../../components/jokes/Jokes/Jokes";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path='/' component={Categories}/>
                    <Route exact path='/api.chucknorris.io/jokes/random' component={Jokes}/>

                </div>
            </Router>
            
        );
    }
}

export default App;
