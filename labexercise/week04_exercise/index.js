// COMP3123 exec04 – Express app
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8081; // fixed to 8081 as requested

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.type('text/html').send('<h1>Welcome to COMP3123 Express Exercise</h1><p>Try <a href="/hello">/hello</a> or <a href="/instruction.html">/instruction.html</a></p>');
});

// 1) GET /hello
app.get('/hello', (req, res) => {
  res.type('text/plain').send('Hello Express JS');
});

// 2) GET /user?firstname=&lastname=
app.get('/user', (req, res) => {
  const firstname = req.query.firstname || 'Pritesh';
  const lastname = req.query.lastname || 'Patel';
  res.json({ firstname, lastname });
});

// 3) POST /user/:firstname/:lastname
app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// 4) POST /users with array body
app.post('/users', (req, res) => {
  const body = req.body;
  if (!Array.isArray(body)) return res.status(400).json({ error: 'Body must be an array of {firstname, lastname}' });
  const cleaned = body.map(u => ({ firstname: String(u.firstname || ''), lastname: String(u.lastname || '') }));
  res.json(cleaned);
});

// 404 fallback
app.use((req, res) => res.status(404).json({ error: 'Not Found' }));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
