const express = require('express');
const app = express();
const PORT = 3001; 


app.use(express.json());


app.get('/numbers', (req, res) => {
  res.send('Success using GET');
});


app.post('/numbers', (req, res) => {
  res.send('Success using POST');
});


app.delete('/numbers', (req, res) => {
  res.send('Success using DELETE');
});


app.put('/numbers', (req, res) => {
  res.send('Success using PUT');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
