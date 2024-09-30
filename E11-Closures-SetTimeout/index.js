// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
// }

// `i` define block-scope
// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
// }

function x() {
    for (var i = 1; i <= 5; i++) {
        function myPrintFunc(i) {
            setTimeout(function () {
                console.log(i); // `i` in lexical env. myPrintFunc
            }, i * 1000);
        }

        myPrintFunc(i); // create a copy of i (pass by value)
    }
}

x();
