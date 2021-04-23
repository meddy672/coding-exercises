import React from 'react';

function Results({ results, reverse, styles }) {
    return (
        reverse ? (
            <ul>
                <strong>Results:</strong> {results.reverse().map((result, index) => {
                    return <li style={styles} key={index}> {(index ? ', ' : '') +result}</li>
                })}
            </ul>
        ) : (
            <ul>
                <strong>Results:</strong>  {results.map((result, index) => {
                  return <li style={styles} key={index}> {(index ? ', ' : '') +result}</li>
              })}
            </ul>
        )
    )
}

export default Results;