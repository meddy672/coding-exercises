import React from 'react';
import './component.css';

/**
 * this component is used to display the results after executing solution to a challenge
 */
function Results({ results, reverse }) {
    return (
        reverse ? (
            <div className="result-container">
                <label className="result-label">Results:</label> {results.reverse().map((result, index) => {
                    return <span className="result-list" key={index}> {(index ? ', ' : '') +result}</span>
                })}
            </div>
        ) : (
            <div className="result-container">
                <label className="result-label">Results:</label>  {results.map((result, index) => {
                  return <span className="result-list" key={index}> {(index ? ', ' : '') +result}</span>
              })}
            </div>
        )
    )
}

export default Results;