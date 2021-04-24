import React, { useState } from 'react';
import FormControl from '../../shared/components/FormControl';
import Results from '../../shared/components/Results'
import PageHeading from '../../shared/components/PageHeading'
import './index.css'

/**
 * this is the main component for the FizzBuzz challenge
 */
function FizzBuzz() {

  const [results, setResults] = useState([]);


  /**
   * this functions prepares the data recieved from the form fields
   * to be analyzed by the fizzBuzz function
   */
  function prepareFormData(e) {
    e.preventDefault();
    let dividend = e.target.integer.value
    const divisor1 = e.target.divisor1.value
    const divisor2 = e.target.divisor2.value
    const phrase1 = e.target.phrase1.value
    const phrase2 = e.target.phrase2.value
    const results = fizzBuzz(dividend, divisor1, divisor2, phrase1, phrase2);
    setResults(results);
  }


  /**
   * this function will check to see if there is a remainder between the dividend
   * and the divisiors and if so initializes the correct phrase i.e FizzBuzz etc.
   */
  function fizzBuzz(dividend, divisorOne, divisorTwo, phraseOne, phraseTwo) {
    const div1 = divisorOne !== '' ? divisorOne : 3;
    const div2 = divisorTwo !== '' ? divisorTwo : 5;
    const phrase1 = phraseOne !== '' ? phraseOne : 'fizz';
    const phrase2 = phraseTwo !== '' ? phraseTwo : 'buzz';
    const results = [];
    while (dividend > 0) {
      let output = `${dividend}`;
      if ((dividend % div1) === 0) {
        output = phrase1;
      }
      if ((dividend % div2) === 0) {
        output = phrase2;
      }
      if ((dividend % div1) === 0 && (dividend % div2) === 0) {
        output = phrase1 + phrase2;
      }
      results.push(output);
      dividend--;
    }
    return results;
  }

  return (
    <div className="FizzBuzz">
    <PageHeading title="Fizz Buzz Challenge" />
      <h3>Challenge</h3>
      <p>
        Write a program that accepts an integer as an input and prodces an output for every integer from zero to the input integer.
       The program should display <i>fizz</i> for numbers divisble by 3, <i>buzz</i> for numbers divisble by 5, and <i>fizzbuzz</i> for
      numbers divisble by 3 and 5.
    </p>
      <h4>Additional Requirements(Complete what you can)</h4>
      <ol>
        <li>Allow divisors to passed as arguments. If the number is divisble by the divisors, not 3 or 5, return correct phrase.</li>
        <li>Allow the phrases to be passed as arguments. That is allow an input to be returned as a response instead of <i>fizz or buzz</i> </li>
      </ol>
      <h3>Solution</h3>
      <p>The only field required to run the program is the <strong>Dividend</strong>.
       If you do not supply values to the additional fields the default values
       will be used instead. Once you hit submit the output will appear below with the results.</p>
      <form onSubmit={prepareFormData}>
        <FormControl type="number" name="integer" label="Dividend:" info="(Required)" />
        <FormControl type="number" min="1" name="divisor1" label="Divisor:" info="(Default 3)" />
        <FormControl type="number" min="1" name="divisor2" label="Divisor:" info="(Default 5)" />
        <FormControl type="text" name="phrase1" label="Phrase:" info="(Default Fizz)" />
        <FormControl type="text" name="phrase2" label="Phrase:" info="(Default Buzz)" />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <Results results={results} reverse  />
    </div>
  );
}



export default FizzBuzz;
