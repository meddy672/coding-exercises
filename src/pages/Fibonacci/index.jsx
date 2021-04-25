import React, { useState } from 'react';
import PageContent from '../../shared/components/PageContent';
import FormControl from '../../shared/components/FormControl';
import Results from '../../shared/components/Results';

import './index.css';

/**
 * this is the main component for the Fibonacci challenge
 */
function Fibonacci({ content }) {
  
  const [results, setResults] = useState([]);

  /**
   * this function prepares the data submitted by the form
   * to be analyzed by the fibonacci function
   */
  function prepareDataForAnalysis(e) {
    e.preventDefault();
    const xValue = e.target.x.value;
    const yValue = e.target.y.value;
    const zValue = e.target.z.value;
    fibonacci(xValue, yValue, zValue);
  }

  /**
   * 
   */
  function fibonacci(x, y, z) {
    let fibos = [];
    fibos[0] = 1;
    fibos[1] = 1;
    fibos[2] = 2;
    if (y !== '' && z !== '') {
      for (let i = 3; i < x; i++){
        fibos[i] = fibos[x -y] + fibos[x - z]
      }
    } else {
      for (let i = 3; i < x; i++){
        fibos[i] = fibos[i -1] + fibos[i -2]
      }
    }
    setResults(results);
  }
  
  // function Test(x, y, z) {
  //   let sequence = [0]; // f(0) = 0
  //   let v1,             // f(x-y)
  //       v2;             // f(x-z)
    
  //   for (let i=1; i < x; i++) {
  //     // f(x - y)
  //     v1 = sequence[i - y];
  //     // f(x-z)
  //     v2 = sequence[i - z];
      
  //     // If a number does not exist in the sequence output a 1 instead
  //     if (typeof v1 === 'undefined')
  //       v1 = 1;
  //     if (typeof v2 === 'undefined')
  //       v2 = 1;
  
  //     sequence.push(v1 + v2)
  //   }
    
  //   return sequence
  // }

  return (
    <div className="Fibonacci">
      <PageContent pageTitle={content.pageTitle} challenge={content.challenge} solution={content.solution} />
      <form onSubmit={prepareDataForAnalysis}>
        <FormControl type="number" name="x" label="x:" info="(Required)" />
        <FormControl type="number" name="y" label="y:" info="(Optional)" />
        <FormControl type="number" name="z" label="z:" info="(Optional)" />
        <button type="submit" className="btn">Submit</button>
      </form>
      <Results results={results}  />
    </div>
  );
}

export default Fibonacci;
