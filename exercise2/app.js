const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

// Setup view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve form page
app.get('/', (req, res) => {
  res.render('form');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const userData = req.body;

  // Save to data.json
  fs.writeFile('data.json', JSON.stringify(userData, null, 2), (err) => {
    if (err) {
      return res.send('Error saving data');
    }
    res.redirect('/display');
  });
});

// Display stored data
app.get('/display', (req, res) => {
  fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) {
      return res.send('No data found');
    }
    const parsedData = JSON.parse(data);
    res.render('display', parsedData);
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${3000}`);
});
