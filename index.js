const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Welcome ! Server Running ! !");
});



app.listen(port, () => {
    console.log('server runnig on', port);
})
