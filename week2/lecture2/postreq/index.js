
//rest api using express , post request
const express=require('express');

const app=express();
const port=3000;
//Get request below
// app.get('/', function(req, res)  {
//   res.send('<b>Hey there<b>');
// });


//Post request below
app.post('/conversations', function(req, res)  {
    console.log(req.headers["authorization"]); 
  res.send({
    message: '2+2=4',
  });
});
app.listen(port, function()  {
  console.log(`Example app listening on port ${port}`);
});