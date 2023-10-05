const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();
const dotenv = require('dotenv'); // Import dotenv here
const cors = require('cors');
dotenv.config();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

const mongoString = "mongodb+srv://adeliafathipour:LDSXERJHylcEwlmp@cluster0.oevbmuu.mongodb.net/;"
mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true }); // Add options
const database = mongoose.connection;

database.on('error', (error) => {
    console.error('Database connection error:', error);
});

database.once('open', () => {
    console.log('Database connected');
});

app.use(cors(corsOptions));
app.use(express.json())
app.use('/api', routes)

const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
