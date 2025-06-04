const fs = require('fs');

let a=1;
console.log(a);

fs.readFile('file.txt', 'utf8', (err, data) => {
    console.log('File read:', data);
});
// fs is an asynchronous operation, so the following code will run immediately after the readFile call.
console.log('After readFile call');
let ans=0;
for(let i=0;i<100;i++){
    ans+=i;
}
console.log('Sum:', ans);