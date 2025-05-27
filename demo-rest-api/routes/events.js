import express from 'express';

const router = express.Router();

// Create an event
router.post('/', (req, res) => {
  const event = req.body;

  res.status(201).json(event);
});

// Edit an event by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedEvent = req.body;

});

// Delete an event by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
});

export default router;
 date, location } = req.body;
