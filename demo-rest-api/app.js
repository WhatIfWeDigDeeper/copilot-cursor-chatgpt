import express from 'express';
import eventsRoutes from './routes/events.js';
import userRoutes from './routes/users.js';

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Use routes
app.use('/users', userRoutes);

app.use('/events', eventsRoutes);

// Basic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
