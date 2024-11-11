const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/api');

const app = express();
const port = process.env.PORT || 3001;

const connection = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@christian.ghj50.mongodb.net/?retryWrites=true&w=majority&appName=Christian');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit();
    }
}
exports.Recon = connection();
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});