// setTimeout(function(){
//     console.log("hello");  

//     setTimeout(function(){
//         console.log("inside the second one.");
//         setTimeout(function(){
//             console.log("inside the third one.");
//         }, 4000);
//     }, 2000);
// },3000);


// This code demonstrates a nested callback structure, often referred to as "callback hell".
// Each setTimeout is nested within the previous one, leading to deeply nested code.
// This can make the code harder to read and maintain, especially as the number of nested callbacks increases.
// In practice, this approach can lead to difficulties in error handling and code readability.
// Modern JavaScript practices often use Promises or async/await to avoid such deeply nested structures.
// To improve this code, consider using Promises or async/await to flatten the structure and enhance readability.
// Example of using Promises to avoid callback hell
function myOwnSetTimeout(duration){
    let p=new Promise(function(resolve){
        setTimeout(resolve,1000);
    });
    return p;
}
myOwnSetTimeout(1000)
.then(function(){
    console.log("hello");
    return myOwnSetTimeout(2000);
})
.then(function(){
    console.log("inside the second one.");
    return myOwnSetTimeout(3000);
})
.then(function(){
    console.log("inside the third one.");
});