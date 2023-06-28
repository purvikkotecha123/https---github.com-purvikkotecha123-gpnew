const express = require("express");
const session = require('express-session');
const https = require('https');
const { stringify } = require("querystring");
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
let sess;
app.get('/', (req, res) => {
  sess = req.session;
  sess.order_id;
  res.sendFile(__dirname +  '/index.html');
});
/*
 * Define the version of the Google Pay API referenced when creating your
 * configuration
 */


app.listen(PORT, () => console.log(`Server Started on ${PORT}`));
