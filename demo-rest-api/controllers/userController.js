import bcrypt from 'bcryptjs';
import { createUser, findUserByEmail, validateUser } from '../models/user.js';

// In-memory storage for users (temporary solution)
const users = [];

export async function signup(req, res) {
  const { username, email, password } = req.body;

  // Validate user input
  const validation = validateUser({ username, email, password });
  if (!validation.isValid) {
    return res.status(400).json({ errors: validation.errors });
  }

  try {
    // Create new user
    const newUser = await createUser({ username, email, password });

    // Return user without password
    res.status(201).json(newUser);
  } catch (error) {
    if (error.message === 'Username or email already exists') {
      return res.status(400).json({
        error: 'User with this email or username already exists'
      });
    }
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;

  try {
    // Find user
    const user = findUserByEmail(email);

    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({
        error: 'Invalid credentials'
      });
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
