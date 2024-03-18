const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;
const suggestions = [
  { suggestion: 'Innfør fleksible arbeidstimer.' },
  { suggestion: 'Organiser månedlige teambyggingsarrangementer.' },
];

app.use(express.json());
app.use(cors());

app.post('/api/suggestions', (req, res) => {
  const suggestion = req.body;
  suggestions.push(suggestion);
  res.status(201).send({ message: 'Suggestion received' });
});

app.get('/api/suggestions', (req, res) => {
  res.status(200).json(suggestions);
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const hrUsername = 'hr';
  const hrPassword = 'password';
  const userUsername = 'user';
  const userPassword = 'userpassword';

  if (username === hrUsername && password === hrPassword) {
    // HR-bruker autentisert
    res.json({
      message: 'Login successful',
      isAuthenticated: true,
      role: 'hr',
    });
  } else if (username === userUsername && password === userPassword) {
    // Vanlig bruker autentisert
    res.json({
      message: 'Login successful',
      isAuthenticated: true,
      role: 'user',
    });
  } else {
    res.status(401).json({ message: 'Login failed', isAuthenticated: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
