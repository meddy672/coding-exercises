import React, { useState } from 'react';
import FormControl from '../../shared/components/FormControl';
import Results from '../../shared/components/Results';
import PageContent from '../../shared/components/PageContent';

import './index.css';

/**
 * this is the main component for the FizzBuzz challenge
 */
function FizzBuzz({ content }) {
  
  const {pageTitle, challenge, solution} = content;
  const [results, setResults] = useState([]);

  /**
   * this functions prepares the data recieved from the form fields
   * to be analyzed by the fizzBuzz function
   */
  function prepareDataForAnalysis(e) {
    e.preventDefault();
    const dividend = e.target.integer.value;
    const divisor1 = e.target.divisor1.value !== '' ? e.target.divisor1.value : 3;
    const divisor2 = e.target.divisor2.value !== '' ? e.target.divisor2.value : 5;
    const phrase1 =  e.target.phrase1.value  !== '' ? e.target.phrase1.value : 'fizz';
    const phrase2 =  e.target.phrase2.value  !== '' ? e.target.phrase2.value : 'buzz';
    fizzBuzz(dividend, divisor1, divisor2, phrase1, phrase2);
  }

  /**
   * this function will check to see if there is a remainder between the dividend
   * and the divisiors and if so initializes the correct phrase i.e FizzBuzz etc.
   */
  function fizzBuzz(dividend, divisor1, divisor2, phrase1, phrase2) {
    const results = [];
    while (dividend > -1) { // zero value
      let output = `${dividend}`;
      if ((dividend % divisor1) === 0) {
        output = phrase1; // fizz
      }
      if ((dividend % divisor2) === 0) {
        output = phrase2; // buzz
      }
      if ((dividend % divisor1) === 0 && (dividend % divisor2) === 0) {
        output = phrase1 + phrase2; // fizzbuzz
      }
      results.push(output);
      dividend--;
    } // end of while
    setResults(results);
  }

  return (
    <div className="FizzBuzz">
    <PageContent pageTitle={pageTitle} challenge={challenge} solution={solution} />
      <form onSubmit={prepareDataForAnalysis}>
        <FormControl type="number" name="integer" label="Dividend:" info="(Required)" />
        <FormControl type="number" min="1" name="divisor1" label="Divisor 1:" info="(Default 3)" />
        <FormControl type="number" min="1" name="divisor2" label="Divisor 2:" info="(Default 5)" />
        <FormControl type="text" name="phrase1" label="Phrase 1:" info="(Default Fizz)" />
        <FormControl type="text" name="phrase2" label="Phrase 2:" info="(Default Buzz)" />
        <button type="submit" className="btn">Submit</button>
      </form>
      <Results results={results} reverse  />
    </div>
  );
}

export default FizzBuzz;
