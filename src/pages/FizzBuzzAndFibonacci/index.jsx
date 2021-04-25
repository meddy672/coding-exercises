import React, {useState} from 'react';

import PageContent from '../../shared/components/PageContent';
import Results from '../../shared/components/Results';
import FormControl from '../../shared/components/FormControl';

import './index.css';

/**
 * this is the main component for the FizzBuzzFibonacci challenge
 */
function FizzBuzzFibonacci({ content }) {

  const [results, setResults] = useState([]);

  /**
   * this function prepares data submitted by the form for the 
   * fizzBuzzFibonacciPlus function
   */
  function prepareDataForAnalysis(e) {
    
  }

  /**
   * this function analyzes the data submitted by the form and sets the 
   * appropriate response.
   */
  function fizzBuzzFibonacciPlus() {
    
  }

  return (
    <div className="FizzBuzzFibonacci">
      <PageContent pageTitle={content.pageTitle} challenge={content.challenge} solution={content.solution} />
      <form onSubmit={prepareDataForAnalysis}>
        <div className="flex-container">
          <div className="flex-group">
            <FormControl type="number" name="integer" label="Dividend:" info="(Required)" />
            <FormControl type="number" min="1" name="divisor1" label="Divisor 1:" info="(Default 3)" />
            <FormControl type="number" min="1" name="divisor2" label="Divisor 2:" info="(Default 5)" />
            <FormControl type="text" name="phrase1" label="Phrase 1:" info="(Default Fizz)" />
            <FormControl type="text" name="phrase2" label="Phrase 2:" info="(Default Buzz)" />
          </div>
          <div className="flex-group">
            <FormControl type="number" name="x" label="x:" info="(Required)" />
            <FormControl type="text" name="y" label="y:" info="(Optional)" />
            <FormControl type="text" name="z" label="z:" info="(Optional)" />
          </div>
        </div>

        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  )
}

export default FizzBuzzFibonacci;
