import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import ResultsContainer from './components/ResultsContainer/ResultsContainer';

const name =require('@rstacruz/startup-name-generator');

class App extends React.Component{
    state = {
        headerText:"Nameinator!",
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded : !inputText,
            suggestedNames : inputText ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header 
                    headTitle={this.state.headerText}
                    headerExpanded={this.state.headerExpanded}
                />
                <SearchBox onInputChange = {this.handleInputChange} />
                <ResultsContainer suggestedNames = {this.state.suggestedNames} />
            </div>
        );
    }
}

export default App; 