import React from 'react';

import PageContent from '../../shared/components/PageContent';
import Results from '../../shared/components/Results';
import FormControl from '../../shared/components/FormControl';

import './index.css';

function FizzBuzzFibonacci({content}) {
  return (
    <div className="FizzBuzzFibonacci">
      <PageContent pageTitle={content.pageTitle} challenge={content.challenge} solution={content.solution} />
    </div>
  )
}

export default FizzBuzzFibonacci;
