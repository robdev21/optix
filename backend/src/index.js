// Load environmental variables into project from .env file
require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

const { logger } = require('./util/logger');

// Serve static files: set root of static file-serve directory
app.use(express.static(path.resolve(__dirname, '../../', './public')));

// Serve index.html page for React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../', './public/index.html'));
});

const port = process.env.PORT;
app.listen(port, () => {
    logger.log('info', '***************************');
    logger.log('info', `${process.env.NODE_ENV.toUpperCase()} server started on port ${port}`);
    logger.log('info', '***************************');
});
