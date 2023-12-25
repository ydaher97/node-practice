const axios = require('axios');

axios.get('https://catfact.ninja/fact')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  });
