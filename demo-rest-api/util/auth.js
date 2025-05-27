// add functions for generating and verifying JWT tokens.
// the JWT should include the user id and email of the user

import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret';

export function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

export function generateAuthResponse(user) {
  const token = generateToken(user);
  return {
    token,
    user: {
      id: user.id,
      email: user.email
    }
  };
}
