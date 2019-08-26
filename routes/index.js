// CommonJS
// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {

//   //res.render('index', { title: 'Express' });

//   res.json({'message' : "say hello"});
// });

// module.exports = router;


// es6
import express from 'express'
import {index} from '../controllers/index.controller'

const router = express.Router()

/* GET home page. */
router.get('/', index)

export default router