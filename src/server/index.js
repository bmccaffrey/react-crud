require('dotenv').config({ path: '.env.local' });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const epilogue = require('epilogue');
const OktaJwtVerifier = require('@okta/jwt-verifier');

const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('Test'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
