## Introduction

For this assignment, may be asked to answer questions, perform research, and/or write code.

- Provide complete answers to all written questions.
- When asked for examples, be specific.
- When asked to perform research, cite your sources.
- Submit your answers in a document separate from code.

Include source files for all code in your submission.  Follow good styling for programming questions and provide complete documentation (comment blocks, inline comments for complicated code, etc.).

Work on the assignment is to be done ***individually***.  You are welcome to collaborate with class members, but the project must be your own work.

## Background and References

Both client (frontend/browser) and server (backend) JavaScript allows for the use of JavaScript modules.  When it comes to the client side an additional approach that is often taken is to "bundle" JavaScript and CSS into single files that are "minified" to reduce the number of HTTP requests needed to load the web application along with reducing the size of the HTTP response payloads.  Many web bundlers exist each with their own advantages and disadvantages.

In this assignment, you will be researching web bundlers and working with one specific bundler (Vite.js).

The following resources might be useful:
- Mozilla Developer Network - JavaScript Modules Guide - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- Dev.to - The What, Why and How of JavaScript bundlers - [https://dev.to/sayanide/the-what-why-and-how-of-javascript-bundlers-4po9](https://dev.to/sayanide/the-what-why-and-how-of-javascript-bundlers-4po9)
- Vite.js - [https://vite.dev/](https://vite.dev/)
- Vite.js - Why Vite - [https://vite.dev/guide/why.html](https://vite.dev/guide/why.html)

## Web Bundlers Research

There are many web bundlers that exist, each with their own advantages and disadvantages.

***SUBMISSION REQUIREMENT:*** Research web bundlers, then answer the following (cite your sources):
- Describe in general, the purpose of a web bundler.  Why is a web bundler useful?
- Find **2** different web bundlers other than Vite.js.  For each:
  - Name and describe the bundler
  - Provide an advantage and disadvantage from your research

## Working with Vite

Vite.js is a web bundler that take advantage of browser based JavaScript modules to bundle web applications into smaller asset packages.  It has many features that are beyond the scope of this class, but we will be using it to bundle our React applications.

In this section you will be taking an existing web application and converting it to use JavaScript modules.  You will then set up the necessary packages to use vite to create a web application bundle.

### Calculator Application

In the [src](src) directory are several files that create a calculator application.  This application performs mathematical operations for the user, namely:

1. Arithmetic
2. Solving quadratic equations

Read through the HTML, CSS, and JavaScript files and familiarize yourself with the code.

- [src/index.html](src/index.html) - Web application structure for the calculator application.
- [src/styles.css](src/styles.css) - Additional styling beyond those provided by Bootstrap 
- [src/calculator.js](src/calculator.js) - Web app JavaScript entry code - sets up event handlers and processes user events
- [src/math_functions.js](src/math_functions.js) - Functions for performing mathematical operations
- [src/utilities.js](src/utilities.js) - Utility functions used for input validation

### Converting the Application to Modules

The given calculator application uses the HTML file to link all the source files together.  They are not implemented as JavaScript modules.

***SUBMISSION REQUIREMENT:*** Modify the HTML and JavaScript files to convert the application to use JavaScript modules.
- Change the script tags in the HTML as necessary
- Install Bootstrap as a package ```npm install boostrap``` and modify the HTML so that it no longer uses the CDN.
  - ***NOTE:*** Do not forget to set the Bootstrap JavaScript to be of ```type="modeule"``` on the ```script``` tag.
- Use import statements in the JavaScript to import ***ONLY*** functions needed by each file
- Use export statements in the JavaScript to export ***ONLY*** functions that are used outside each file

***NOTE:*** While it will work to import and export every function in/from every file, this is ***NOT*** good programming practice.  Make sure you script files only export the functions that need to be used externally ***and*** that script files ***only*** import needed functions.

Now that you have converted the application to using JavaScript modules, verify that it works, by loading ```index.html``` in a web browser.

### Add Additional Calculator Functions

Now that you have converted the application to using JavaScript modules, add the following additional features to the web application.  The user interface is up to you.

1. Add multiplication and division to the arithmetic operations
   - ***NOTE:*** Make sure you check for divide by zero for division
2. Add functionality (user input and math calculation) to compute the greatest common divisor [https://mathworld.wolfram.com/GreatestCommonDivisor.html](https://mathworld.wolfram.com/GreatestCommonDivisor.html) of two integers
   - The input values must be integers
   - Both input values must be greater than zero
3. Add a math function of your choosing
   - Document how to use your math function in a separate file 

***NOTE:*** Your modifications should follow the JavaScript module style and use imports and exports as appropriate.  Feel free to add additional files as necessary. 

### Create a Bundled Web Application

With additional modifications made and the code uses JavaScript Modules, Vite.js can be used to create a web application bundle.

***SUBMISSION REQUIREMENT:*** Use Vite.js to create a web application bundle for the calculator application.
- Install Vite.js using ```npm install vite```
- Run the appropriate command to build the calculator web bundle

***NOTE:*** Make sure that ***ALL*** JavaScript files are bundled together.  In other words there should be one single JavaScript file used by the web application.  Make sure that Bootstrap's JavaScript file is included in the bundled JavaScript.

Include (add to your git repository) the bundled web application.

Now that you have bundled the application using Vite.js, verify that it works, by loading ```index.html``` in a web browser.

## Hints and Tips

- Vite.js defaults the asset paths to ```/``` when it creates the bundled ```index.html```.  This works if you are using a self-made web server **OR** are running the page directly (opening the page from the web browser using CTRL+O), but doesn't work correctly when you run the application through WebStorm.  This can be fixed by setting Vite.js Public Base Path [https://vite.dev/guide/build.html#public-base-path](https://vite.dev/guide/build.html#public-base-path) to ```./```.
  ```
  npx vite build --base=./
  ```
- To get the Bootstrap JavaScript included in the Vite.js web bundle it must be included as ```type="modeule"``` on the ```script``` tag.

## Deliverables

When you are ready to submit your assignment prepare your repository:

- Make sure your name, assignment name, and section number are in comments on ALL submitted files.
- Make sure you have completed all activities and answered all questions.
- Make sure you cite your sources for all research.
- Make sure your assignment code is commented thoroughly.
- Include in your submission, a set of suggestions for improvement and/or what you enjoyed about this assignment.
- Make sure all files are committed and pushed to the main branch of your repository.

***NOTE***: Do not forget to 'add', 'commit', and 'push' all new files and changes to your repository before submitting.

### Additional Submission Notes

If/when using resources from material outside what was presented in class (e.g., Google search, Stack Overflow, etc.) document the resource used in your submission.  Include exact URLs for web pages where appropriate.

NOTE: Sources that are not original research and/or unreliable sources are not to be used.  For example:

- Wikipedia is not a reliable source, nor does it present original research: [https://en.wikipedia.org/wiki/Wikipedia:Wikipedia_is_not_a_reliable_source](https://en.wikipedia.org/wiki/Wikipedia:Wikipedia_is_not_a_reliable_source)
- ChatGPT is not a reliable source: [https://thecodebytes.com/is-chatgpt-reliable-heres-why-its-not/](https://thecodebytes.com/is-chatgpt-reliable-heres-why-its-not/)

For more information, please see the [MSOE CS Code of Conduct](https://msoe.s3.amazonaws.com/files/resources/swecsc-computing-code-of-conduct.pdf).

To submit, copy the URL for your repository and submit the link to Canvas.

## Grading Criteria

- (5 Points) Submitted files follow submission guidelines
  - Only the requested files were submitted
  - Files are contain name, assignment, section
  - Sources outside of course material are cited
- (5 Points) Suggestions
  - List of suggestions for improvement and/or what you enjoyed about this assignment
- (10 Points) Code Structure
  - Readable code/file structure
  - Code is well documented
  - Code passes the HTML validator without errors
  - Code passes the CSS validator without errors
  - HTML only contains structure - no logic code or styling
- (20 Points) Web Bundlers Research
- (20 Points) Add Additional Calculator Functions
- (20 Points) Converting the Application to Modules
- (20 Points) Create a Bundled Web Application