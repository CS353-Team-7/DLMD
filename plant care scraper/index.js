const express = require('express');

const plant = require('./plant');

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Done'
    });
});

app.get('/search/:title', (req, res) => {
    plant
    .searchPlants(req.params.title)
    .then(plants => {
        res.json('plants');
    })
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}`)
});