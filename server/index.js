//Dependancies
const express = require('express');
const request = require('request');
const sanitizer = require('sanitizer');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
require("dotenv").config();

//Express Server
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../', 'views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.listen(process.env.PORT);