// We are using better-sqlite3 because it is a simple serverless db that stores and persists all data into a .db file
const Database = require('better-sqlite3');
const db = new Database('secret-santa.db');

db.prepare(`
  CREATE TABLE IF NOT EXISTS assignments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    giver TEXT NOT NULL,
    receiver TEXT NOT NULL
  )
`).run();

module.exports = db; // Exports this db instance for reuse
