import db from '../config/database.js';

const user = {
  id: String,
  username: String,
  email: String,
  password: String,
  createdAt: Date
};

// Function to create a new user object
export function createUser({ username, email, password }) {
  const id = Math.random().toString(36).substr(2, 9);
  const createdAt = new Date().toISOString();

  const stmt = db.prepare(`
    INSERT INTO users (id, username, email, password, createdAt)
    VALUES (?, ?, ?, ?, ?)
  `);

  try {
    stmt.run(id, username, email, password, createdAt);
    return {
      id,
      username,
      email,
      password,
      createdAt
    };
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      throw new Error('Username or email already exists');
    }
    throw error;
  }
}

export function findUserByEmail(email) {
  const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
  return stmt.get(email);
}

export function findUserByUsername(username) {
  const stmt = db.prepare('SELECT * FROM users WHERE username = ?');
  return stmt.get(username);
}

// Function to validate user data
export function validateUser({ username, email, password }) {
  const errors = {};

  if (!username || username.length < 3) {
    errors.username = 'Username must be at least 3 characters long';
  }

  if (!email || !email.includes('@')) {
    errors.email = 'Please provide a valid email address';
  }

  if (!password || password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
