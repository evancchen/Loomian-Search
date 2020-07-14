import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {loomians} from '../loomians'; 
import ErrorBoundry from '../components/ErrorBoundry'
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            loomians: [],
            searchfield: ''
        }
    }
    
    componentDidMount() {
        this.setState({loomians: loomians})
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredLoomians = this.state.loomians.filter(loomian => loomian.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
        if (this.state.loomians.length === 0 ) {
            return <h1 className = 'tc'>Loading</h1>
        } else {
            return (
                <div className = 'tc'>
                    <h1 className = "f1">Loomians</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
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

export default App;