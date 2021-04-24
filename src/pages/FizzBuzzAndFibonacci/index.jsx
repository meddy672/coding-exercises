import React from 'react';
import PageHeading from '../../shared/components/PageHeading';
import Results from '../../shared/components/Results';
import FormControl from '../../shared/components/FormControl';

import './index.css';

function FizzBuzzFibonacci() {
  
  return (
    <div className="FizzBuzzFibonacci">
      <PageHeading title="Fizz Buzz + Fibonacci" />
      <h3>Challenge</h3>
      <p>
        Given the first two challenges write a program that accepts the following inputs:
    </p>
      <ol>
        <li>The divisors for <i>fizz</i> and <i>buzz</i>, if left blank defaults to 3 and 5</li>
        <li>The words <i>fizz</i> and <i>buzz</i>, if left blank defaults to <i>fizz</i> and <i>buzz</i></li>
        <li>Input for <i>F(x)</i> sequence</li>
        <li>Input for <i>y</i> and <i>z</i> for <i>F(x) = F(x-y) + F(x-z)</i>, if the input is left blank uses <i>y = 1</i> and <i>z = 2</i></li>
      </ol>
      <p>
        Using these inputs, display the sequence up to <i>F(x)</i>, expcept displaying
         your subsitute phrases for each <i>F(n)</i> in the sequence according to the divisors you set
         E.G using all defaults for input and <i>x = 6</i> would display <i>1,1 fizz, buzz</i>.
      </p>
      <h3>Solution</h3>
    </div>
  )
}

export default FizzBuzzFibonacci;
