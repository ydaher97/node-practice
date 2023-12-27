const http = require('http');

const options = {
  hostname: 'catfact.ninja',
  path: '/fact',
  method: 'GET',
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const responseData = JSON.parse(data);
    console.log(responseData);
  });
});

req.on('error', (error) => {
  console.error('Error fetching data:', error);
});

req.end();
