import React, {Component} from "react";
import './App.css';
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                distance: [],
                term: '',
                options: {},
                zeroServices: false
            }
        };
    }

    onApplyFilter = (filters) => {
        this.setState({filters});
    }
    onResetFilter = (filters) => {
        this.setState({filters});
    }

    render() {
        return (
            <div className="App">
                <Main filters={this.state.filters}/>
                <Sidebar onApplyFilter={this.onApplyFilter} onResetFilter={this.onResetFilter}/>
            </div>
        );
    }
}

export default App;
