const express = require('express');
const app = express();
const port = 5000;

const courses = require('./src/data.json');

app.get('/', (req, res) => {
    res.send("Welcome ! Server Running ! !");
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('server runnig on', port);
})
