import { v4 as uuidv4 } from 'uuid';
import db from '../config/database.js';

// Validation function for event fields
function validateEventFields(fields, required = false) {
  const errors = [];
  if ('title' in fields || required) {
    if (
      typeof fields.title !== 'string' ||
      fields.title.trim().length === 0
    ) {
      errors.push('Invalid title');
    }
  }
  if ('description' in fields || required) {
    if (
      typeof fields.description !== 'undefined' &&
      typeof fields.description !== 'string'
    ) {
      errors.push('Invalid description');
    }
  }
  if ('address' in fields || required) {
    if (
      typeof fields.address !== 'undefined' &&
      typeof fields.address !== 'string'
    ) {
      errors.push('Invalid address');
    }
  }
  if ('date' in fields || required) {
    if (
      typeof fields.date !== 'undefined' &&
      (typeof fields.date !== 'string' || Number.isNaN(Date.parse(fields.date)))
    ) {
      errors.push('Invalid date');
    }
  }
  return errors;
}

// Create a new event
function createEvent({ title, description, address, date, userId }) {
  const id = uuidv4();
  const stmt = db.prepare(
    'INSERT INTO events (id, title, description, address, date, user_id) VALUES (?, ?, ?, ?, ?, ?)'
  );
  stmt.run(id, title, description, address, date, userId);
  return { id, title, description, address, date, userId };
}

// Edit an event by ID
function editEvent(id, updatedFields) {
  // Only allow updating certain fields
  const allowedFields = ['title', 'description', 'address', 'date'];
  const setClauses = [];
  const values = [];

  try {
    const errors = validateEventFields(updatedFields, false);
    if (errors.length > 0) {
      return { status: 400, errors };
    }

    for (const key of allowedFields) {
      if (key in updatedFields) {
        setClauses.push(`${key} = ?`);
        values.push(updatedFields[key]);
      }
    }
    if (setClauses.length === 0) return getEventById(id); // nothing to update
    values.push(id);
    const stmt = db.prepare(
      `UPDATE events SET ${setClauses.join(', ')} WHERE id = ?`
    );
    stmt.run(...values);
    return getEventById(id);
  } catch (err) {
    return { status: 400, errors: [err.message] };
  }
}

// Delete an event by ID
function deleteEvent(id) {
  const stmt = db.prepare('DELETE FROM events WHERE id = ?');
  const info = stmt.run(id);
  return info.changes > 0;
}

// Get all events
function getAllEvents() {
  const stmt = db.prepare('SELECT * FROM events');
  return stmt.all();
}

// Get a single event by ID
function getEventById(id) {
  const stmt = db.prepare('SELECT * FROM events WHERE id = ?');
  return stmt.get(id) || null;
}

function registerUserForEvent(eventId, userId) {
  const stmt = db.prepare(
    'INSERT INTO event_registrations (event_id, user_id) VALUES (?, ?)'
  );
  stmt.run(eventId, userId);
}

function unregisterUserFromEvent(eventId, userId) {
  const stmt = db.prepare(
    'DELETE FROM event_registrations WHERE event_id = ? AND user_id = ?'
  );
  stmt.run(eventId, userId);
}

export {
  createEvent, deleteEvent, editEvent, getAllEvents,
  getEventById
};

