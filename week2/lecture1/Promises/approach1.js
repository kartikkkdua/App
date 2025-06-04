// Approach 1 
//wrapping another asynchronous function in a promise

// Define a custom timeout function that accepts a callback function and a delay
function createOwnTimeout(fn, delay) {
    // Use JavaScript's setTimeout to call the function after the given delay
    setTimeout(fn, delay);
}

// Call the custom timeout function
// Pass an anonymous function that logs "hello" after 2 seconds (2000 milliseconds)
createOwnTimeout(function() {
    console.log("hello");  // This will print "hello" after 2 seconds
}, 2000);



//this approach uses a callback function to handle the asynchronous nature of the timeout.
//you have created a function where other people can send a callback.
//This is good but lacks for callback hell;