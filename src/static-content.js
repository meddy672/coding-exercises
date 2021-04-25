/**
 * the static content for the pages of the site.
 */ 
const staticContent = {
    FizzBuzz: {
        pageTitle: 'Fizz Buzz Challenge',
        challenge: {
            title: 'Challenge',
            content: 'Write a program that accepts an integer as an input and prodces an output for every integer from zero to the input integer.' +
                'The program should display <i>fizz</i> for numbers divisble by 3, <i>buzz</i> for numbers divisble by 5, and <i>fizzbuzz</i> for' +
                'numbers divisble by 3 and 5.',
            additional_requirements: 'Additional Requirements(Complete what you can)',
            list: [
                'Allow divisors to passed as arguments. If the number is divisble by the divisors, not 3 or 5, return correct phrase.',
                'Allow the phrases to be passed as arguments. That is allow an input to be returned as a response instead of <i>fizz or buzz</i>'
            ]

        },
        solution: {
            title: 'Solution',
            content: 'The only field required to run the program is the <strong>Dividend</strong>. ' +
                'If you do not supply values to the additional fields the default values ' +
                'will be used instead. Once you hit submit the output will appear below with the results.'
        }
    },
    Fibonacci: {
        pageTitle: 'Fibonacci Challenge',
        challenge: {
            title: 'Challenge',
            content: 'The Fibonacci is a sequence of numbers so that <i>F(n) = F(n-1)+F(n+2)</i> where <i>n</i> is the number in the sequence.'+
            'For example: <i>F(6)=8</i> and the sequence <i>F(6)=1,1,2,3,5,8</i>. Write a program that accepts a user input,'+
           '<i>x</i>, and outputs the sequence <i>F(x)</i>.',
           additional_requirements: 'Additional Requirements(Complete what you can)',
            list: [
                'Accept inputs for <i>y</i> and <i>z,</i> where <i>F(x)=F(x+y)+F(x-z)</i>. Like the original sequence, if'+
                '<i>F(x-n)</i> does not exist yet in the sequence, simply output 1',
            ]
        },
        solution: {
            title: 'Solution',
            content: 'The only field required to run the program is the <strong>Dividend</strong>. If you do not supply values to'+
            'the additional fields the default values will be used instead. Once you hit submit the output will appear below'+
            'with the results.'
        }
    },
    FibonacciAndFizzBuzz: {
        pageTitle: 'Fizz Buzz + Fibonacci Challenge',
        challenge: {
            title: 'Challenge',
            content: 'Given the first two challenges write a program that accepts the following inputs:',
            list: [
                'The divisors for <i>fizz</i> and <i>buzz</i>, if left blank defaults to 3 and 5',
                'The words <i>fizz</i> and <i>buzz</i>, if left blank defaults to <i>fizz</i> and <i>buzz</i>',
                'Input for <i>F(x)</i> sequence',
                'Input for <i>y</i> and <i>z</i> for <i>F(x) = F(x-y) + F(x-z)</i>, if the input is left blank uses <i>y = 1</i> and <i>z = 2</i>'
            ],
            additional_content: 'Using these inputs, display the sequence up to <i>F(x)</i>, expcept displaying' +
                'your subsitute phrases for each <i>F(n)</i> in the sequence according to the divisors you set' +
            'E.G using all defaults for input and <i>x = 6</i> would display <i>1,1 fizz, buzz</i>.'
        },
        solution: {
            title: 'Solution',
            content: 'This is some test content for now unitl the solution is in place.'
        }
    }
 }

export { staticContent };
