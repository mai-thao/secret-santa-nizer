const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('../database/setup');

const router = express.Router();

router.post('/assign', (req, res) => {
    const names = req.body.names;
    console.log(names);

    if (names.length < 2) {
        return res.status(400).json({ error: "Needs at least 2 participants!"})
    }
    
    const now = new Date();
    const localTime = now.toLocaleString('sv-SE', { timeZone: 'America/Chicago' });
    const date = localTime.replace(/[ ]/g, '_').replace(/[:]/g, '-') // Format: yyyy-mm-dd_hh-mm-ss

    const assignments = assign(names);
    
    const jsonString = JSON.stringify(assignments, null, 2);
    const fileName = `assignments_${date}.json`;

    const outputPath = path.join(__dirname, '../backups');
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath); // Create the directory if doesn't exist
    }

    try {
        fs.writeFileSync(path.join(outputPath, fileName), jsonString);
        console.log(`Assignments successfully saved to ${fileName}`);
        res.status(201).json(jsonString);
    } catch (error) {
        console.log('Error writing to file: ', error);
    }
});

// A simple and naive "randomization" where it creates a copy of the original names then "scramble" or
// reorder them based on a random number between -0.5 and 0.5. The original names are then paired with
// the ones from the shuffled list to create a "random" pairing!
// Read this informational post about why 0.5: https://www.codemzy.com/blog/shuffle-array-javascript)
// Wishlist: Learn more about Fisher-Yates algorithm
function assign(names) {
    const shuffled = names.slice().sort(() => Math.random() - 0.5);
    const assignments = {};

    names.forEach((name, i) => {
        assignments[name] = shuffled[i];
    });

    // TODO: Add logic to check if they're assigned themselves

    return assignments;
}

module.exports = router;
