const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('../database/setup');

const router = express.Router();

router.post('/assign', (req, res) => {
    const names = req.body.names;
    console.log(names);
    res.json(names);

    const jsonString = JSON.stringify(names, null, 2);
    const fileName = "names-backup.json";

    const outputPath = path.join(__dirname, '../backups');
    fs.writeFileSync(path.join(outputPath, fileName), jsonString);
    console.log(`Data successfully saved to ${fileName}`);
});

module.exports = router;
