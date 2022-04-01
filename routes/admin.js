const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();

// admin/add-product => get
router.get('/add-product', (req, res, next) =>{
    res.send('<form action="/add/add-product" method="POST><input type="text" name="title"><button type="submit"></form>');

});

// /admin/add-product => Post
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}); 
module.exports = router;