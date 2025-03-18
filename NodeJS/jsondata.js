const express = require('express');
const app = express();


app.get('/data', (req, res) => {
  const jsonData = { 
    name: 'John',
     age: 31, 
     city: 'New York' 
    };
  res.json(jsonData);
});


app.listen(3000, () => console.log('Server running on http://localhost:3000/data'));