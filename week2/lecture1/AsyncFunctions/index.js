const fs = require('fs');

let a=1;
console.log(a);

const fs = require('fs'); // Import the file system module

// Read 'file.txt' asynchronously as UTF-8 text
fs.readFile('file.txt', 'utf8', (err, data) => {
    
    // Check for errors first
    if (err) {
        console.error('Error reading file:', err); // This logs if something went wrong
        return; // Exit the callback to avoid using "data" if it's undefined
    }

    // If no error, print the file content
    console.log('File read:', data); // This will contain the text from file.txt
});

// fs is an asynchronous operation, so the following code will run immediately after the readFile call.
console.log('After readFile call');
let ans=0;
for(let i=0;i<100;i++){
    ans+=i;
}
console.log('Sum:', ans);