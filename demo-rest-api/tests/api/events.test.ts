import axios from 'axios';

const API_URL = 'http://localhost:3000/events';

jest.setTimeout(10 * 60 * 1000);

describe('Events API Tests', () => {
  let createdEventId: string;
  const eventData = {
    title: 'Test Event',
    description: 'A test event',
    address: '123 Test St',
    date: '2025-06-02T12:00:00Z',
  };

  it('should create a new event successfully', async () => {
    const response = await axios.post(`${API_URL}/`, eventData);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(eventData.title);
    expect(response.data.description).toBe(eventData.description);
    expect(response.data.address).toBe(eventData.address);
    expect(response.data.date).toBe(eventData.date);
    createdEventId = response.data.id;
  });

  it('should get the created event by ID', async () => {
    const response = await axios.get(`${API_URL}/${createdEventId}`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(createdEventId);
    expect(response.data.title).toBe(eventData.title);
  });

  it('should get all events (array)', async () => {
    const response = await axios.get(`${API_URL}/`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.some((e: { id: string }) => e.id === createdEventId)).toBe(true);
  });

  it('should edit the event by ID', async () => {
    const updated = { title: 'Updated Event', description: 'Updated desc' };
    const response = await axios.put(`${API_URL}/${createdEventId}`, updated);
    expect(response.status).toBe(200);
    expect(response.data.title).toBe(updated.title);
    expect(response.data.description).toBe(updated.description);
  });

  it('should return 400 with list of errors when updating event with invalid data', async () => {
    await expect(
      axios.put(`${API_URL}/${createdEventId}`, { title: '', date: 'invalid-date' })
    ).rejects.toMatchObject({
      response: {
        status: 400,
        data: {
          errors: expect.any(Array)
        },
      },
    });
  });

  it('should delete the event by ID', async () => {
    const response = await axios.delete(`${API_URL}/${createdEventId}`);
    expect(response.status).toBe(204);
  });

  it('should return 404 for deleted event', async () => {
    await expect(
      axios.get(`${API_URL}/${createdEventId}`)
    ).rejects.toMatchObject({
      response: {
        status: 404,
      },
    });
  });

  it('should return 400 for invalid event data', async () => {
    await expect(
      axios.post(`${API_URL}/`, { title: '', date: 'invalid-date' })
    ).rejects.toMatchObject({
      response: {
        status: 400,
        data: {
          error: expect.any(String)
        },
      },
    });
  });
  it('should return 404 for non-existent event', async () => {
    await expect(
      axios.get(`${API_URL}/non-existent-id`)
    ).rejects.toMatchObject({
      response: {
        status: 404,
      },
    });
  });
  it('should return 400 for invalid event ID format', async () => {
    const invalidEventData = {
      title: '    ',
      description: 'This event has an invalid ID format',
      address: '',
      date: '2025-06-02T12:00:00Z',
    };
    await expect(
      axios.post(`${API_URL}/`, invalidEventData)
    ).rejects.toMatchObject({
      response: {
        status: 400,
        data: {
          error: expect.any(String),
        },
      },
    });
  });
});
