const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();
const dotenv = require('dotenv'); // Import dotenv here

dotenv.config();

const mongoString = "mongodb+srv://adeliafathipour:LDSXERJHylcEwlmp@cluster0.oevbmuu.mongodb.net/;"
mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true }); // Add options
const database = mongoose.connection;

database.on('error', (error) => {
    console.error('Database connection error:', error);
});

database.once('open', () => {
    console.log('Database connected');
});


app.get('/status', (request, response) => {
    const status = {
        "Status": "Running"
    };

    response.json(status); // Use json() to send JSON response
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
