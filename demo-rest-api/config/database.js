import Database from 'better-sqlite3';

const db = new Database('users.db', { verbose: console.log });

// Create users table if it doesn't exist
const createUsersTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    createdAt TEXT NOT NULL
  )
`);
createUsersTable.run();

// Create events table if it doesn't exist
const createEventsTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS events (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    address TEXT,
    date TEXT NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
  )
`);
createEventsTable.run();

export default db;
