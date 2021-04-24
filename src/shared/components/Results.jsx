import React from 'react';
import './component.css';

function Results({ results, reverse, styles }) {
    return (
        reverse ? (
            <ul>
                <label className="result-label">Results:</label> {results.reverse().map((result, index) => {
                    return <li className="result-list" key={index}> {(index ? ', ' : '') +result}</li>
                })}
            </ul>
        ) : (
            <ul>
                <label className="result-label">Results:</label>  {results.map((result, index) => {
                  return <li className="result-list" key={index}> {(index ? ', ' : '') +result}</li>
              })}
            </ul>
        )
    )
}

export default Results;