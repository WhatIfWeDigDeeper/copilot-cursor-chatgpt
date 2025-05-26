const user = {
  id: String,
  username: String,
  email: String,
  password: String,
  createdAt: Date
};

// Function to create a new user object
const createUser = ({ username, email, password }) => {
  return {
    id: Math.random().toString(36).substr(2, 9), // Simple ID generation
    username,
    email,
    password, // Note: In a real app, this should be hashed
    createdAt: new Date()
  };
};

// Function to validate user data
const validateUser = ({ username, email, password }) => {
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
};

export {
  createUser,
  validateUser
};
