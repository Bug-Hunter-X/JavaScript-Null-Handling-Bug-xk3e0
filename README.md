# JavaScript Null Handling Bug
This repository demonstrates a common, yet subtle, bug in JavaScript related to null handling. The `foo` function intends to add two numbers; however, it doesn't correctly handle cases where one or both parameters are null.  The bug is explained in detail in the `bug.js` file and a solution is provided in `bugSolution.js`.

## Bug
The original code incorrectly assumes null should be handled as a zero in addition.  When one argument is null, it returns 0 instead of throwing an error or handling it appropriately. 

## Solution
The solution provided in `bugSolution.js` clarifies the input handling to ensure it is explicit and provides better error management. 

## How to Run
1. Clone this repository
2. Open `bug.js` and `bugSolution.js` in a JavaScript environment. 
3. Execute the code and compare the outputs.