/*
 * Class: SWE2511 - Calculator
 *
 * Calculator math functions
 */

/**
 * arithmeticOperations - object of operations for arithmetic
 * @type {{minus: (function(*, *): *), plus: (function(*, *): *)}}
 */
const arithmeticOperations = {
    plus: (a, b) => { return a + b; },
    minus: (a, b) => { return a - b; }
}

/**
 * doArithmetic - performs an arithmetic operation
 * @param a - value for the operation
 * @param b - value for the operation
 * @param op - operation (string) to perform
 * @returns {*} - the result
 * @throws an error if the operation does not exist
 */
const doArithmetic = (a, b, op) => {
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
const doQuadratic = (a, b, c) => {

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