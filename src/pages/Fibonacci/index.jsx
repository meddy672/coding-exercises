import React, { useState } from 'react';
import FormControl from '../../shared/components/FormControl';
import PageHeading from '../../shared/components/PageHeading';
import Results from '../../shared/components/Results';

import './index.css';


/**
 * this is the main component for the Fibonacci challenge
 */
function Fibonacci(props) {
  const [results, setResults] = useState([]);


  /**
   * this function prepares the data submitted by the form
   * to be analyzed by the fibonacci function
   */
  function prepareFormFields(e) {
    e.preventDefault();
    const xValue = e.target.x.value;
    const yValue = e.target.y.value;
    const zValue = e.target.z.value;
    const results = fibonacci(xValue, yValue, zValue);
    setResults(results);
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
    return fibos;
}

  return (
    <div className="Fibonacci">
      <PageHeading title="Fibonacci Challenge" />
      <h3>Problem</h3>
      <p>
        The Fibonacci is a sequence of numbers so that <i>F(n) = F(n-1)+F(n+2)</i> where <i>n</i> is the number in the sequence.
        For example: <i>F(6)=8</i> and the sequence <i>F(6)=1,1,2,3,5,8</i>. Write a program that accepts a user input,
       <i>x</i>, and outputs the sequence <i>F(x)</i>.
    </p>
      <h4>Additional Requirements(Complete what you can)</h4>
      <ol>
        <li>Accept inputs for <i>y</i> and <i>z,</i> where <i>F(x)=F(x+y)+F(x-z)</i>. Like the original sequence, if
          <i>F(x-n)</i> does not exist yet in the sequence, simply output 1
        </li>
      </ol>
      <h3>Solution</h3>
      <p>The only field required to run the program is the <strong>Dividend</strong>. If you do not supply values to
       the additional fields the default values will be used instead. Once you hit submit the output will appear below
       with the results.</p>
      <form onSubmit={prepareFormFields}>
        <FormControl type="number" name="x" label="x:" info="(Required)" />
        <FormControl type="number" name="y" label="y:" info="(Optional)" />
        <FormControl type="number" name="z" label="z:" info="(Optional)" />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <Results results={results} reverse  />
    </div>
  );
}

export default Fibonacci;
