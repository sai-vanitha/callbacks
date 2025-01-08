// 1.          Basic Callback Execution
//  Write a function called processNumber that accepts a number and a callback function. The processNumber function should double the number and pass the result to the callback function.
function processNumber(number, callback) {
    const doubledNumber = number * 2;
    callback(doubledNumber);
}
processNumber(5, function(result) {
    console.log(result); 
});
console.log(`----------------------------------------`)
// 2.          Callback with Array Iteration
//  Write a function called forEachElement that takes an array and a callback function. The function should iterate over the array and execute the callback function for each element, passing the element as an argument.
function forEachElement(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}
forEachElement([1, 2, 3, 4], function(element) {
    console.log(element); 
});
console.log(`----------------------------------------`)
// 3.          Simple Delayed Callback
//  Write a function sayHello that accepts a name and a callback function. Use setTimeout to wait for 1 second and then call the callback function, passing the message "Hello, [name]!" (replace [name] with the provided name).
function sayHello(name, callback) {
    setTimeout(function() {
        callback(`Hello, ${name}!`);
    }, 1000);
}
sayHello("Alice", function(message) {
    console.log(message);  
});
console.log(`----------------------------------------`)
// 4.          Callback on Condition
//  Write a function checkEven that accepts a number and two callback 
function checkEven(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        evenCallback(number);
    } else {
        oddCallback(number);
    }
}
checkEven(4, 
    function(num) {
        console.log(`${num} is even`);  
    }, 
    function(num) {
        console.log(`${num} is odd`);
    }
);

checkEven(5, 
    function(num) {
        console.log(`${num} is even`);
    }, 
    function(num) {
        console.log(`${num} is odd`); 
    }
);
