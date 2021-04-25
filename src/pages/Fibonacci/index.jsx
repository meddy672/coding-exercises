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
    fibonacciPlus(xValue, yValue, zValue);
  }

  /**
   * this function returns two different sequences:
   * If the y and z values are defined F(x) = F(x - y) + F(x - z)
   * If y and z are not defined it will perform the regular Fibonacci sequence
   * which is F(n) = F(n -1) + F(n - 2).
   */
  function fibonacciPlus(x, y, z) {
    let fibos = [];
    fibos[0] = 1;
    fibos[1] = 1;
    fibos[2] = 2;
    if (y !== '' && z !== '') {
      for (let i = 3; i < x; i++){
        const res = fibos[i - y] + fibos[i - z];
        fibos[i] = res ? res : 1;
      }
    } else {
      for (let i = 3; i < x; i++){
        fibos[i] = fibos[i -1] + fibos[i -2]
      }
    }
    setResults(fibos);
  }

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
