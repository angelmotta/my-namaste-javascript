function outer() {
    var a = 7;
    function inner() {
        console.log(a);
    }
    inner();
}

outer();

// Example: block scope only with `const` or `let`
// if (Math.random() > 0.5) {
//     const x = 1;
// } else {
//     const x = 2;
// }
// console.log(x); // ReferenceError: x is not defined
