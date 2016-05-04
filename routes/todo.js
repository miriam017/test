var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Todo = require('../model/Todo');

mongoose.connect('mongodb://localhost:27017/database', function(err) {
  if (!err) {
    console.log('api connect');
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'todo' });
    Todo.find(function(err, todos) {
      res.json(todos);
    });
});

router.post('/', function(req, res) {
  Todo.create(req.body, function(err, todo) {
    if (err) {
      console.log(err);
    }
    res.json(todo);
  });
});

module.exports = router;
