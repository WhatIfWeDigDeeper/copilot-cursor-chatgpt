import {
  createEvent,
  deleteEvent,
  editEvent,
  getAllEvents,
  getEventById
} from '../models/event.js';

// Create a new event
export function create(req, res) {
  try {
    const { title, description, address, date } = req.body;
    if (!title || !description || !address || !date) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }
    const event = createEvent({ title, description, address, date });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event.' });
  }
}

// Get an event by ID
export function getById(req, res) {
  try {
    const { id } = req.params;
    const event = getEventById(id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found.' });
    }
    res.json(event);
  }
  catch (error) {
    res.status(500).json({ error: 'Failed to retrieve event.' });
  }
}

// Edit an event by ID
export function edit(req, res) {
  try {
    const { id } = req.params;
    const updatedFields = req.body;
    const event = editEvent(id, updatedFields);
    if (!event) {
      return res.status(404).json({ error: 'Event not found.' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to edit event.' });
  }
}

// Delete an event by ID
export function deleteById(req, res) {
  try {
    const { id } = req.params;
    const success = deleteEvent(id);
    if (!success) {
      return res.status(404).json({ error: 'Event not found.' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete event.' });
  }
}

// Get all events
export function getAll(req, res) {
  try {
    const events = getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve events.' });
  }
}
