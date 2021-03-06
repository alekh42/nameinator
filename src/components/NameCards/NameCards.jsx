import React from 'react';
import './NameCards.css';

const nameCheapUrl='https://www.namecheap.com/domains/registration/results/?domain='

const NameCards = ({ suggestedName }) => {
    return (
        <a
        target="_blank"
        rel="noreferrer" 
        className="result-text" 
        href={`${nameCheapUrl}${suggestedName}`} >
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    );
};

export default NameCards;