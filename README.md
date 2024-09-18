# ts-random-number-generator

A simple random number generator in TypeScript.

## Installation

Install via npm:

```
npm install ts-random-number-generator
```

## Usage 
Import and use the generateRandomNumber function:
```
import { generateRandomNumber } from 'ts-random-number-generator';

// Generate a random number between 1 and 10
const randomNumber = generateRandomNumber(1, 10);
console.log(randomNumber);

```

## Function
```
generateRandomNumber(min: number, max: number): number
```

Generates a random integer between min and max (inclusive).