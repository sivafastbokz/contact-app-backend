const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User =('./dataschema');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://sivaharshanfastbokz:uoazQaGUCRMUERcC@cluster0.lcmnw6s.mongodb.net/?retryWrites=true&w=majority')