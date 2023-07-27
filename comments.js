// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('./model/comment');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comment');

// API routes
var router = express.Router();

// Middleware to use for all requests
router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
});

// Test route
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// Routes for comments
router.route('/comments')
    .post(function(req, res) {
        var comment = new Comment();
        comment.name = req.body.name;
        comment.body = req