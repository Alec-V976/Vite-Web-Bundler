/*
 * Class: SWE2511 - Calculator
 * Name: Alec VerStrate
 * Section: 111
 * Calculator math functions
 */


import {isDefined} from "./utilities.js";
import {greaterThanZero} from "./utilities.js";

/**
 * arithmeticOperations - object of operations for arithmetic
 * @type {{minus: (function(*, *): *), plus: (function(*, *): *), times: (function(*, *): *), divide: (function(*, *): *), GCD: (function(*, *): *)}}
 */
const arithmeticOperations = {
    plus: (a, b) => { return a + b; },
    minus: (a, b) => { return a - b; },
    times: (a, b) => { return a * b; },
    divide: (a, b) => {
        if(b === 0) {
            throw new Error(`Second number can not be zero.`);
        }
        return a / b;
    },
    GCD: (a, b) => {
        if(!greaterThanZero(b) || !greaterThanZero(a)) {
            throw new Error(`Inputs must be greater than zero`);
        }
        return calculateGCD(a,b)
    }
}



//calculates the greatest common divisor between two numbers, returns a number

const calculateGCD = (a, b) => {
    let calcA = a;
    let calcB = b;
    while(calcB !== 0) {
        let tempB = calcA % calcB
        calcA = calcB;
        calcB = tempB;
    }
    return calcA
}




/**
 * doArithmetic - performs an arithmetic operation
 * @param a - value for the operation
 * @param b - value for the operation
 * @param op - operation (string) to perform
 * @returns {*} - the result
 * @throws an error if the operation does not exist
 */
export const doArithmetic = (a, b, op) => {
    if(isDefined(arithmeticOperations[op])) {
        return arithmeticOperations[op](a, b);
    }
    throw new Error(`Operation ${op} is not defined`);
}

/**
 * computeDiscriminant - computes the discriminant of the quadratic formula
 * @param a
 * @param b
 * @param c
 * @returns {number} the discriminant result
 */
const computeDiscriminant = (a, b, c) => {
    return b * b - 4 * a * c;
}

/**
 * doQuadratic - computes the quadratic formula
 * @param a
 * @param b
 * @param c
 * @returns {number[]|undefined} - array of solutions or undefined if there is no real solution
 */
export const doQuadratic = (a, b, c) => {

    const discriminant = computeDiscriminant(a, b, c);
    if(discriminant < 0) {
        return undefined;
    }

    const solA = (-1 * b + Math.sqrt(discriminant)) / (2 * a);
    const solB = (-1 * b - Math.sqrt(discriminant)) / (2 * a);

    if(solA === solB) {
        return [solA];
    }
    return [solA, solB];
}


// this find the distance between two points and returns the distance as a number.
// it also returns 0 for the distance if all inputs are zeroes, which should be valid
// but causes javascript to return undefined, so i made a special case.
export const findDistanceBetweenPoints = (point1xValue,
                                          point1yValue,
                                          point2xValue,
                                          point2yValue) => {
    let result = 0;
    if(!(point1xValue === 0 && point2xValue === 0 && point1yValue === 0 && point2yValue === 0)) {
        result = Math.sqrt(Math.pow((point2xValue-point1xValue),2) + Math.pow((point2yValue-point1yValue),2));
    }
    return result;
}