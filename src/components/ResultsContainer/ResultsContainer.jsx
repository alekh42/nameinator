import React from 'react'
import './ResultsContainer.css'
import NameCards from '../NameCards/NameCards';

const ResultsContainer =({suggestedNames}) => {
    const suggestedNameJsx = suggestedNames.map(suggestedName => {
        return <NameCards key = { suggestedName} suggestedName = {suggestedName} />;
    }); 
    return (
        <div className="results-container">
            {suggestedNameJsx}
        </div>
    ); 
};

export default ResultsContainer;