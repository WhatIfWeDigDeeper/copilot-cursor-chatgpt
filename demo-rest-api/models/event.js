import { v4 as uuidv4 } from 'uuid';
import db from '../config/database.js';

// Create a new event
function createEvent({ title, description, address, date }) {
  const id = uuidv4();
  const stmt = db.prepare(
    'INSERT INTO events (id, title, description, address, date) VALUES (?, ?, ?, ?, ?)'
  );
  stmt.run(id, title, description, address, date);
  return { id, title, description, address, date };
}

// Edit an event by ID
function editEvent(id, updatedFields) {
  // Only allow updating certain fields
  const allowedFields = ['title', 'description', 'address', 'date'];
  const setClauses = [];
  const values = [];
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

export {
  createEvent, deleteEvent, editEvent, getAllEvents,
  getEventById
};

