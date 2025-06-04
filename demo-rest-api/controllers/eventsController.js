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
    if (
      isInvalidInput(title, description, address, date)
    ) {
      return res.status(400).json({ error: 'Missing or invalid required fields.' });
    }
    const event = createEvent({
      title: title.trim(),
      description: description.trim(),
      address: address.trim(),
      date,
      userId: req.user.id // Assuming req.user is set by authentication middleware
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event.' });
  }
}

function isInvalidInput(title, description, address, date) {
  return !title || typeof title !== 'string' || title.trim() === '' ||
    !description || typeof description !== 'string' || description.trim() === '' ||
    !address || typeof address !== 'string' || address.trim() === '' ||
    !date || isNaN(Date.parse(date));
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
  const { id } = req.params;
  const updatedFields = req.body;
  const event = getEventById(id);
  if (!event) {
    return res.status(404).json({ error: 'Event not found.' });
  }
  if (!req.user || event.userId !== req.user.id) {
    return res.status(403).json({ error: 'Forbidden: You do not have permission to edit this event.' });
  }
  const updatedEvent = editEvent(id, updatedFields);
  if (!updatedEvent) {
    return res.status(404).json({ error: 'Event not found.' });
  }
  if (updatedEvent.status === 400 && updatedEvent.errors) {
    return res.status(400).json({ errors: updatedEvent.errors });
  }
  res.json(updatedEvent);
}

// Delete an event by ID
export function deleteById(req, res) {
  const { id } = req.params;
  const event = getEventById(id);
  if (!event) {
    return res.status(404).json({ error: 'Event not found.' });
  }
  if (!req.user || event.userId !== req.user.id) {
    return res.status(403).json({ error: 'Forbidden: You do not have permission to edit this event.' });
  }
  try {
    const success = deleteEvent(id);
    if (!success) {
      return res.status(500).json({ error: `Failed to delete event ${id}` });
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
