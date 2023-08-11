const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load env
dotenv.config({ path: './config.env' });
// 10:08 timestamp
const app = express();

app.listen(5050, () => {
  console.log('App listening on port 5000!');
});

