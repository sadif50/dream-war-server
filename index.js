const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Using cors for share data with everyone
app.use(cors());

// Require JSON fake data.
const courses = require('./src/data.json');

app.get('/', (req, res) => {
    res.send("Welcome ! Server Running ! !");
});

// Send All course data for /course route
app.get('/courses', (req, res) => {
    res.send(courses);
});

// Send single course data for /course/:id route dynamically
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse);
})

// Send single course data for /checkout/:id route dynamically
app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse);
})

// Listen app on the port
app.listen(port, () => {
    console.log('server runnig on', port);
})
