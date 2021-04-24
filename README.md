# Overview
The *Coding Challenges App* is a web application built with [React.js](https://reactjs.org/). The application consists of three main components where each component represents a coding challenge often required during an interviewing process. The initial page starts on the FizzBuzz challenge
but a user can navigate to any challenge they choose.

### Required Software
1. Node.js

### FizzBuzz Challenge
Write a program that accepts an integer as an input and prodces an output for every integer from zero to the input integer.
The program should display *fizz* for numbers divisble by 3, *buzz* for numbers divisble by 5, and *fizzbuzz* for
numbers divisble by 3 and 5.

* Additional Requirements(Complete what you can)
1. Allow divisors to passed as arguments. If the number is divisble by the divisors, not 3 or 5, return correct phrase.
2. Allow the phrases to be passed as arguments. That is allow an input to be returned as a response instead of *fizz or buzz*

### Fibonacci Challenge
The Fibonacci is a sequence of numbers so that *F(n) = F(n-1)+F(n+2)* where *n* is the number in the sequence.
For example: *F(6)=8* and the sequence *F(6)=1,1,2,3,5,8*. Write a program that accepts a user input,
*x*, and outputs the sequence *F(x)*

* Additional Requirements(Complete what you can)
1. Accept inputs for *y* and *z*, where *F(x)=F(x+y)+F(x-z)*. Like the original sequence, if *F(x-n)* does not exist yet in the sequence, simply output 1

### FizzBuzz + Fibonacci Challenge
Given the first two challenges write a program that accepts the following inputs:
1. The divisors for *fizz* and *buzz*, if left blank defaults to 3 and 5.
2. The words *fizz* and *buzz*, if left blank defaults to *fizz* and *buzz*
3. Input for *F(x)* sequence
4. Input for *y* and *z* for *F(x) = F(x-y) + F(x-z)*, if the input is left blank uses *y = 1* and *z = 2*

Using these inputs, display the sequence up to *F(x)*, expcept displaying your subsitute phrases for each *F(n)* in the sequence according to the divisors you set E.G using all defaults for input and *x = 6* would display *1,1 fizz, buzz*.

### How To Use
1. Clone or download the repository.
2. Run *npm install*
3. Run *npm start*

The appliction should start on [localhost:3000](http://localhost:3000)