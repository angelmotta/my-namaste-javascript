let a = 10;
function x() {
    var a = 20; // var tiene scope function y no interfiere outside
    console.log(a);
}
x();
console.log(a);

// Ilegal Shadow
// let a = 10;
// {
//     var a = 20;
// }

// Block definition
// {
//     let a = 10;
//     console.log(a);
// }

// Hoisting and Block scope
// {
//     var a = 10; // Global Object - SO Accesible outside Scope
//     let b = 20; // Block scope - Only accesible in this Scope
//     const c = 30; // Block scope - Only accesible in this Scope
// }
// console.log(a); // OK
// console.log(b); // Reference Error

// Shadowing using `var`
// var a = 100;
// {
//     var a = 10; // Shadow and mutate the variable in Global Scope
//     let b = 20; // Block scope - Only accesible in this Scope
//     const c = 30; // Block scope - Only accesible in this Scope
//     console.log(a); // out: 10
// }
// console.log(a); // out: 10 (already mutated)

// Shadowing using `let`
// let b = 100; // Script Scope (No Global Scope)
// {
//     var a = 10; // Global Scope
//     let b = 20; // Shadow in Block scope - Only accesible in this Scope
//     const c = 30; // Block scope - Only accesible in this Scope
//     console.log(b); // out: 20
// }
// console.log(b); // out: 100 (not mutated)
