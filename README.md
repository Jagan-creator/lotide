# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Jagan-creator/lotide`

**Require it:**

`const _ = require('@Jagan-creator/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: function that outputs the first indexed item in an array
* `tail`: function that output the tail of an array
* `middle`: function that returns the middle item of an array or the two most middle items
* `assertArraysEqual`: assertion that checks to see if two arrays ar equal to each other
* `assertEqual`: assertion that checks to see if two items are equal to each other
* `assertObjectsEqual`: assertion that checks to see if two objects are equal to each other
* `countLetters`: function that outputs the number of letters in a string
* `countOnly`: function that takes in a set of items and returns the count for that specific subset of items
* `eqArrays`: function that checks to see if two arrays are equal
* `eqObjects`: function that checks to see if two objects are equal
* `findKey`: function that looks through an object and returns the first truthy item
* `findKeyByValue`: function that looks through and object until it matches a specified input value
* `flatten`: function that takes in nested arrays and changes them into a single-line array
* `letterPositions`: function that tells us where the specified letters are within an array based on their index position
* `map`: function that will output a new array with each of the specified index items of that array
* `takeUntil`: function that returns a partial array of the inital array once it has identified the given argument
* `without`: functions that removes items from the given array if they do not match the second input array