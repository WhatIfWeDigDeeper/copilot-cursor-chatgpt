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

export function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization header missing or invalid.' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = verifyToken(token);
    req.user = decoded; // Attach user info to request object
    next();
  }
  catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
}

export function isAuthenticated(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ error: 'User not authenticated.' });
  }
  next();
}

export function isAuthorized(req, res, next) {
  if (req.user && req.user.id === req.params.id) {
    return next();
  }
  return res.status(403).json({ error: 'Forbidden: You do not have permission to access this resource.' });
}
export function isAdmin(req, res, next) {
  if (req.user && req.user.role === 'admin') {
    return next();
  }
  return res.status(403).json({ error: 'Forbidden: Admin access required.' });
}
