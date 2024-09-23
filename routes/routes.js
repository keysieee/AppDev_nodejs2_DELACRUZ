const express = require('express');
const router = express.Router();
const KeysieController = require('../controller/KeysieController');
router.get('/', (req, res) => {
    res.render('index'); 
});

module.exports = router;
