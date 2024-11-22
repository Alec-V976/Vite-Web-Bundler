/*
 * Class: SWE2511 - Calculator
 *
 * Calculator validation and user interface functions
 */

/**
 * validateNumberInput - checks if an input value is a number
 * @param inputId - identifier of input element
 * @param errorId - identifier of error display element
 * @returns {boolean} - true if valid, false if not
 */
const validateNumberInput = (inputId, errorId) => {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.getElementById(errorId);
    const inputValue = inputElement.value;
    if(!isNumber(inputValue)) {
        errorElement.innerText = "Please enter a number";
        inputElement.classList.add('is-invalid');
        return false;
    } else {
        inputElement.classList.remove('is-invalid');
        errorElement.innerText = "";
        return true;
    }
}

/**
 * validateNonZeroNumberInput - checks if an input value is a number and not zero
 * @param inputId - identifier of input element
 * @param errorId - identifier of error display element
 * @returns {boolean} - true if valid, false if not
 */
const validateNonZeroNumberInput = (inputId, errorId) => {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.getElementById(errorId);
    const inputValue = inputElement.value;
    if(!isNumber(inputValue)) {
        errorElement.innerText = "Please enter a number";
        inputElement.classList.add('is-invalid');
        return false;
    } else if(parseFloat(inputValue) === 0) {
        errorElement.innerText = "Value cannot be zero";
        inputElement.classList.add('is-invalid');
        return false;
    } else {
        inputElement.classList.remove('is-invalid');
        errorElement.innerText = "";
        return true;
    }
}

/**
 * Retrieve the floating point value from an input field
 * @param inputId - identifier of input element
 * @returns {number} - input parsed to a float
 */
const getFloatValue = (inputId) => {
    return parseFloat(document.getElementById(inputId).value);
}

/**
 * handleArithmetic - handle input validation and display for arithmetic operations
 */
const handleArithmetic = () => {
    const selectElement = document.getElementById("operation_select");
    const resultElement = document.getElementById("result");

    const aValid = validateNumberInput("input_a", "numA_error");
    const bValid = validateNumberInput("input_b", "numB_error");

    // If inputs are not valid set the result to empty
    if(!aValid || !bValid) {
        resultElement.innerText = "";
        return;
    }

    // Retrieve the input values and compute the solution
    const aValue = getFloatValue("input_a");
    const bValue = getFloatValue("input_b");
    const operation = selectElement.value;

    try {
        resultElement.innerText = doArithmetic(aValue, bValue, operation);
    }
    // Catch errors if any exist
    catch (error) {
        resultElement.innerText = error.message;
    }
}

/**
 * handleQuadratic - handle input validation and display for quadratic equation
 */
const handleQuadratic = () => {

    // Retrieve the results element to display results
    const resultElement = document.getElementById("quad_result");

    // Validate input
    //  A, B, and C must be a number
    //  A cannot be zero
    const aValid = validateNonZeroNumberInput("quad_a", "quadA_error");
    const bValid = validateNumberInput("quad_b", "quadB_error");
    const cValid = validateNumberInput("quad_c", "quadC_error");

    // If inputs are not valid set the result to empty
    if(!aValid || !bValid || !cValid) {
        resultElement.innerText = "";
        return;
    }

    // Retrieve the input values and compute the solution(s)
    const aValue = getFloatValue("quad_a");
    const bValue = getFloatValue("quad_b");
    const cValue = getFloatValue("quad_c");

    try {
        const quad_solution = doQuadratic(aValue, bValue, cValue);

        // doQuadratic returns undefined if there is no solution
        if(quad_solution === undefined) {
            resultElement.innerText = ` - no real solution`;
        } else {

            // Display the solution(s)
            const formatted_quad_solution = quad_solution.map((entry) => {
                return entry.toFixed(2);
            });
            resultElement.innerText = ` - (${formatted_quad_solution.join(", ")})`;
        }
    }
    // Catch errors if any exist
    catch (error) {
        resultElement.innerText = ` - ${error.message}`;
    }
}

/**
 * Window load event handler
 *    Setup events for math functions
 */
window.onload = () => {
    const numAElement = document.getElementById("input_a");
    const numBElement = document.getElementById("input_b");
    const selectElement = document.getElementById("operation_select");
    numAElement.onkeyup = handleArithmetic;
    numBElement.onkeyup = handleArithmetic;
    selectElement.onchange = handleArithmetic;
    handleArithmetic();

    const quadAElement = document.getElementById("quad_a");
    const quadBElement = document.getElementById("quad_b");
    const quadCElement = document.getElementById("quad_c");
    quadAElement.onkeyup = handleQuadratic;
    quadBElement.onkeyup = handleQuadratic;
    quadCElement.onkeyup = handleQuadratic;
    handleQuadratic();
}