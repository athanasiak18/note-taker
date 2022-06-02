const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

const apiRoutes = require('./Develop/routes/apiRoutes');
const htmlRoutes = require('./Develop/routes/htmlRoutes');