import Database from 'better-sqlite3';

const db = new Database('users.db', { verbose: console.log });

// Create users table if it doesn't exist
const createTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    createdAt TEXT NOT NULL
  )
`);

createTable.run();

export default db;
