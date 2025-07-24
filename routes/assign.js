const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('../database/setup');

const router = express.Router();

router.post('/assign', (req, res) => {
    const names = req.body.names;
    console.log(names);
    res.json(names);
    
    const now = new Date();
    const localTime = now.toLocaleString('sv-SE', { timeZone: 'America/Chicago' });
    const date = localTime.replace(/[ ]/g, '_').replace(/[:]/g, '-') // Format: yyyy-mm-dd_hh-mm-ss

    // TODO: Add randomization logic for secret santa assignment
    // How to handle odd participants? One person can have two secret santas
    // Make sure no one is assigned to themselves
    
    const jsonString = JSON.stringify(names, null, 2);
    const fileName = `names_${date}.json`;

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
