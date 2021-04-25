import React, {useState} from 'react';
import PageContent from '../../shared/components/PageContent';
import Results from '../../shared/components/Results';
import FormControl from '../../shared/components/FormControl';

import './index.css';

/**
 * this is the main component for the FizzBuzzFibonacci challenge
 */
function FizzBuzzFibonacci({ content }) {

  const {pageTitle, challenge, solution} = content;
  const [results, setResults] = useState([]);

  /**
   * this function prepares data submitted by the form for the 
   * fizzBuzzFibonacciPlus function
   */
  function prepareDataForAnalysis(e) {
    e.preventDefault();

    const divisor1 = e.target.divisor1.value !== '' ? e.target.divisor1.value : 3;
    const divisor2 = e.target.divisor2.value !== '' ? e.target.divisor2.value : 5;
    const phrase1 =  e.target.phrase1.value  !== '' ? e.target.phrase1.value : 'fizz';
    const phrase2 =  e.target.phrase2.value  !== '' ? e.target.phrase2.value : 'buzz';

    const xValue = e.target.x.value;
    const yValue = e.target.y.value !== '' ? e.target.y.value : 1;
    const zValue = e.target.z.value !== '' ? e.target.z.value : 2;
    fibonacciPlus(divisor1, divisor2, phrase1, phrase2, xValue, yValue, zValue);
  }

  /**
   * this function analyzes the data submitted by the form and sets the 
   * appropriate response.
   */
  function fibonacciPlus(d1, d2, p1, p2, x, y, z) {
    const fibos = [];
    fibos[0] = 1;
    fibos[1] = 1;
    fibos[2] = 2;
    for (let i = 3; i < x; i++){
      const res = fibos[i - y] + fibos[i - z];
      fibos[i] = res ? res : 1;
    }
    fizzbuzz(fibos, d1, d2, p1, p2);
  }

  /**
   * this function analyzes the sequence of numbers witin fibos and sets the correct phrase.
   */
  function fizzbuzz(fibos, divisor1, divisor2, phrase1, phrase2) {
    console.log(fibos, divisor1, divisor2);
    const results = fibos.map(number => {
      let output = `${number}`;
      if ((number % divisor1) === 0) {
        output = phrase1; // fizz
      }
      if ((number % divisor2) === 0) {
        output = phrase2; // buzz
      }
      if ((number % divisor1) === 0 && (number % divisor2) === 0) {
        output = phrase1 + phrase2; // fizzbuzz
      }
      return output
    });
    setResults(results);
  }

  return (
    <div className="FizzBuzzFibonacci">
      <PageContent pageTitle={pageTitle} challenge={challenge} solution={solution} />
      <form onSubmit={prepareDataForAnalysis}>
        <div className="flex-container">
          <div className="flex-group">
            <FormControl type="number" min="1" name="divisor1" label="Divisor 1:" info="(Default 3)" />
            <FormControl type="number" min="1" name="divisor2" label="Divisor 2:" info="(Default 5)" />
            <FormControl type="text" name="phrase1" label="Phrase 1:" info="(Default Fizz)" />
            <FormControl type="text" name="phrase2" label="Phrase 2:" info="(Default Buzz)" />
          </div>
          <div className="flex-group">
            <FormControl type="number" name="x" label="x:" info="(Required)" />
            <FormControl type="number" name="y" label="y:" info="(Optional)" />
            <FormControl type="number" name="z" label="z:" info="(Optional)" />
          </div>
        </div>
        <button type="submit" className="btn">Submit</button>
        <Results results={results}  />
      </form>
    </div>
  )
}

export default FizzBuzzFibonacci;
