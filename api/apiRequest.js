const request = require('request');

request('https://catfact.ninja/fact', (error, response, body) => {
  if (error) {
    console.error('Error fetching data:', error);
    return;
  }
  if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
    return;
  }
  const data = JSON.parse(body);
  console.log(data);
});
