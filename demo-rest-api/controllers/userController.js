import { createUser, validateUser } from '../models/user.js';

// In-memory storage for users (temporary solution)
const users = [];

const signup = (req, res) => {
  const { username, email, password } = req.body;

  // Validate user input
  const validation = validateUser({ username, email, password });
  if (!validation.isValid) {
    return res.status(400).json({ errors: validation.errors });
  }

  // Check if user already exists
  const userExists = users.some(
    user => user.email === email || user.username === username
  );

  if (userExists) {
    return res.status(400).json({
      error: 'User with this email or username already exists'
    });
  }

  // Create new user
  const newUser = createUser({ username, email, password });
  users.push(newUser);

  // Return user without password
  const { password: _, ...userWithoutPassword } = newUser;
  res.status(201).json(userWithoutPassword);
};

const login = (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = users.find(u => u.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({
      error: 'Invalid credentials'
    });
  }

  // Return user without password
  const { password: _, ...userWithoutPassword } = user;
  res.status(200).json(userWithoutPassword);
};

export {
  login, signup
};

