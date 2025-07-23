const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('../database/setup');

const router = express.Router();

router.post('/assign', (req, res) => {
    const names = req.body.names;
    console.log(names);
    res.json(names);
    const date = Date.now().toString();

    const jsonString = JSON.stringify(names, null, 2);
    const fileName = `names-${date}.json`;

    const outputPath = path.join(__dirname, '../backups');
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath); // Create the directory if doesn't exist
    }

    try {
        fs.writeFileSync(path.join(outputPath, fileName), jsonString);
        console.log(`Data successfully saved to ${fileName}`);
    } catch (error) {
        console.log('Error writing to file: ', error);
    }
});

module.exports = router;
