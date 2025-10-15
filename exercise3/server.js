const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./models/Student');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// MongoDB Connection (Cleaned: Removed deprecated options)
mongoose.connect('mongodb://localhost:27017/studentDB')
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Mongo Error", err));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.post('/students', async (req, res) => {
  const { name, email, age } = req.body;
  try {
    await Student.create({ name, email, age });
    res.redirect('/students');
  } catch (err) {
    res.status(500).send("Error saving student");
  }
});

app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.render('students', { students });
});

app.get('/students/edit/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render('edit', { student });
});

app.post('/students/update/:id', async (req, res) => {
  const { name, email, age } = req.body;
  await Student.findByIdAndUpdate(req.params.id, { name, email, age });
  res.redirect('/students');
});

app.get('/students/delete/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect('/students');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
