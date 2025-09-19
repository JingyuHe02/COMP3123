// Lab 03 – NodeJS – Core HTTP server with employeeModule
const http = require('http');
const employeeModule = require('./Employee'); // { getAll, getNamesAsc, getTotalSalary }

const port = process.env.PORT || 8081;

// helper to respond with proper headers
const send = (res, status, data, type='application/json') => {
  const body = type === 'application/json' ? JSON.stringify(data) : data;
  res.statusCode = status;
  res.setHeader('Content-Type', type);
  // allow common CORS during testing (optional)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(body);
};

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    return send(res, 405, { error: 'Method Not Allowed' });
  }

  switch (req.url) {
    case '/':
    case '/index':
      return send(res, 200, '<h1>Welcome to Lab Exercise 03</h1>', 'text/html');

    case '/employee':
      return send(res, 200, employeeModule.getAll());

    case '/employee/names':
      return send(res, 200, employeeModule.getNamesAsc());

    case '/employee/totalsalary':
      return send(res, 200, { total_salary: employeeModule.getTotalSalary() });

    default:
      return send(res, 404, { error: 'Not Found' });
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = server;
