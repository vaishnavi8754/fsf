const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const todosFilePath = path.join(__dirname, 'data', 'todos.json');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/api/todos', (req, res) => {
    fs.readFile(todosFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading todos data');
        }
        res.json(JSON.parse(data));
    });
});

app.post('/api/todos', (req, res) => {
    fs.readFile(todosFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading todos data');
        }
        const todos = JSON.parse(data);
        todos.push(req.body);
        fs.writeFile(todosFilePath, JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error saving todos data');
            }
            res.status(201).send(req.body);
        });
    });
});

app.delete('/api/todos/:id', (req, res) => {
    fs.readFile(todosFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading todos data');
        }
        let todos = JSON.parse(data);
        todos = todos.filter(todo => todo.id !== parseInt(req.params.id));
        fs.writeFile(todosFilePath, JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error saving todos data');
            }
            res.status(204).send();
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});