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
    stmt.run(
      id,
      username.trim(),
      email.trim(),
      password.trim(),
      createdAt
    );
    return {
      id,
      username: username.trim(),
      email: email.trim(),
      password: password.trim(),
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

/**
 * Validates an email address using regex pattern:
 * ^                    - Start of string
 * [a-zA-Z0-9._-]+     - One or more letters, numbers, dots, underscores, or hyphens
 * @                    - Literal @ symbol
 * [a-zA-Z0-9.-]+      - One or more letters, numbers, dots, or hyphens
 * \.                   - Literal dot
 * [a-zA-Z]{2,}        - Two or more letters (top level domain)
 * $                    - End of string
 */
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Function to validate user data
export function validateUser({ username, email, password }) {
  const errors = {};

  if (!username?.trim() || username.trim().length < 3) {
    errors.username = 'Username must be at least 3 characters long';
  }

  if (!email?.trim() || !validateEmail(email.trim())) {
    errors.email = 'Please provide a valid email address';
  }

  if (!password?.trim() || password.trim().length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
