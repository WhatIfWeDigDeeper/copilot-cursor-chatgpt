import express from 'express';
import * as events from '../controllers/eventsController.js';
import { authenticate } from '../util/auth.js';

const router = express.Router();

// Create an event
router.post('/', authenticate, events.create);

// Edit an event by ID
router.put('/:id', authenticate, events.edit);

// Delete an event by ID
router.delete('/:id', authenticate, events.deleteById);

// Get an event by ID
router.get('/:id', events.getById);

// Get all events
router.get('/', events.getAll);

// Export the router

export default router;
