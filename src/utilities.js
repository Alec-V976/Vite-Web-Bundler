/*
 * Class: SWE2511 - Calculator
 *
 * Utility functions
 */

// Helper functions for parameter validation
/*
 * Checks if a value is defined
 */
const isDefined = (value) => (
    value !== undefined && value !== null && typeof(value) !== 'undefined'
);

/*
 * Checks if a value is defined and is a number
 */
const isNumber = (value) => (
    isDefined(value) && !isNaN(value) && !isNaN(parseFloat(value))
);