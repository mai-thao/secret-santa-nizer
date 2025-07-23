const express = require('express');
const path = require('path');
const db = require('../database/setup');

const router = express.Router();

router.post('/assign', (req, res) => {
    const names = req.body.names;
    console.log(names);
    res.json(names);
});

module.exports = router;
