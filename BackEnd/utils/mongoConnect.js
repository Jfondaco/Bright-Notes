const mongoose = require('mongoose');
const mongodb = require('./node_modules/mongodb');
const mongojs = require('./node_modules/mongojs');

console.log('starting')

// this is our MongoDB database
const dbRoute ='mongodb://jfondacoo:Ihatepasswords13!@ds253567.mlab.com:53567/heroku_wvq5xccb';

// connects our back end code with the database
mongoose.connect(process.env.MONGODB_URI || dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

console.log('ending')