import express from 'express';
import * as events from '../controllers/eventsController.js';

const router = express.Router();

// Create an event
router.post('/', events.create);

// Edit an event by ID
router.put('/:id', events.edit);

// Delete an event by ID
router.delete('/:id', events.deleteById);

export default router;
