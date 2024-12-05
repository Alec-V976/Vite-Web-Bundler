/*
 * Class: SWE2511 - Calculator
 * Name: Alec VerStrate
 * Section: 111
 * Utility functions
 */

// Helper functions for parameter validation

/*
 * Checks if a value is defined
 */
export const isDefined = (value) => (
    value !== undefined && value !== null && typeof(value) !== 'undefined'
);

/*
 * Checks if a value is defined and is a number
 */
export const isNumber = (value) => (
    isDefined(value) && !isNaN(value) && !isNaN(parseFloat(value))
);

//checks if a number is greater than zero, returns boolean
export const greaterThanZero = (v) => {
    return isDefined(v) && isNumber(v) && v > 0
}