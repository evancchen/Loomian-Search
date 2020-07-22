import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {loomians} from '../loomians'; 
import ErrorBoundry from '../components/ErrorBoundry'
import Scroll from '../components/Scroll';
import './App.css';
import {setSearchField} from '../actions'

const mapStateToProps = (state) => {
    return {        
        searchField: state.searchField
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            loomians: [],
        }
    }
    
    componentDidMount() {
        this.setState({loomians: loomians})
    }


    render() {
        const {loomians} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredLoomians = loomians.filter(loomian => loomian.name.toLowerCase().includes(searchField.toLowerCase()));
        if (this.state.loomians.length === 0 ) {
            return <h1 className = 'tc'>Loading</h1>
        } else {
            return (
                <div className = 'tc'>
                    <h1 className = "f1">Loomians</h1>
                    <SearchBox searchChange = {onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList loomians = {filteredLoomians}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);