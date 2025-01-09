function foo(a, b) {
  if (a === null || b === null) {
    console.error("Error: One or both parameters are null"); 
    return null; // or throw an error: throw new Error("Parameters cannot be null");
  }
  return a + b; 
}
console.log(foo(null, 1)); //Output: Error: One or both parameters are null
console.log(foo(1, null)); //Output: Error: One or both parameters are null
console.log(foo(null, null));//Output: Error: One or both parameters are null
console.log(foo(1, 2)); //Output: 3