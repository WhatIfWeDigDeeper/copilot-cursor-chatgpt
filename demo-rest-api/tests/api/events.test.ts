import axios from 'axios';

const API_URL = 'http://localhost:3000';
const EVENTS_URL = `${API_URL}/events`;

jest.setTimeout(10 * 60 * 1000);

const testUser = {
  username: 'eventapitestuser',
  email: 'eventapitestuser@example.com',
  password: 'password123'
};

let authToken: string;

beforeAll(async () => {
  // Try to sign up, ignore error if user already exists
  try {
    await axios.post(`${API_URL}/users/signup`, testUser);
  } catch (err: any) {
    // ignore duplicate user error
  }
});

describe('Events API Tests', () => {
  const eventData = {
    title: 'Test Event',
    description: 'A test event',
    address: '123 Test St',
    date: '2025-06-02T12:00:00Z',
  };

  beforeEach(async () => {
    // Login and get token before each test
    const response = await axios.post(`${API_URL}/users/login`, {
      email: testUser.email,
      password: testUser.password
    });
    authToken = response.data.token;
  });

  // Utility to create an event and return its ID
  async function createEvent(data = eventData) {
    const response = await axios.post(`${EVENTS_URL}/`, data, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    return response.data.id;
  }

  it('should fail to create event if not logged in', async () => {
    try {
      await axios.post(`${EVENTS_URL}/`, eventData);
      throw new Error('Request should have failed');
    } catch (error: any) {
      expect(error.response.status).toBe(401);
    }
  });

  it('should create a new event successfully when logged in', async () => {
    const response = await axios.post(`${EVENTS_URL}/`, eventData, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(eventData.title);
    expect(response.data.description).toBe(eventData.description);
    expect(response.data.address).toBe(eventData.address);
    expect(response.data.date).toBe(eventData.date);
  });

  it('should get the created event by ID', async () => {
    const eventId = await createEvent();
    const response = await axios.get(`${EVENTS_URL}/${eventId}`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(eventId);
    expect(response.data.title).toBe(eventData.title);
  });

  it('should get all events (array)', async () => {
    const eventId = await createEvent();
    const response = await axios.get(`${EVENTS_URL}/`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.some((e: { id: string }) => e.id === eventId)).toBe(true);
  });

  it('should fail to edit the event if not logged in', async () => {
    const eventId = await createEvent();
    try {
      await axios.put(`${EVENTS_URL}/${eventId}`, { title: 'Should Fail' });
      throw new Error('Request should have failed');
    } catch (error: any) {
      expect(error.response.status).toBe(401);
    }
  });

  it('should edit the event by ID when logged in', async () => {
    const eventId = await createEvent();
    const updated = { title: 'Updated Event', description: 'Updated desc' };
    const updatedResponse = await axios.put(`${EVENTS_URL}/${eventId}`, updated, {
      headers: { Authorization: `Bearer ${authToken}` }
    });

    expect(updatedResponse.status).toBe(200);
    expect(updatedResponse.data.title).toBe(updated.title);
    expect(updatedResponse.data.description).toBe(updated.description);
  });

  it('should return 400 with list of errors when updating event with invalid data', async () => {
    const eventId = await createEvent();
    try {
      await axios.put(
        `${EVENTS_URL}/${eventId}`,
        { title: '', date: 'invalid-date' },
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      throw new Error('Request should have failed');
    } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect(Array.isArray(error.response.data.errors)).toBe(true);
    }
  });

  it('should fail to delete the event if not logged in', async () => {
    const eventId = await createEvent();
    try {
      await axios.delete(`${EVENTS_URL}/${eventId}`);
      throw new Error('Request should have failed');
    } catch (error: any) {
      expect(error.response.status).toBe(401);
    }
  });

  it('should delete the event by ID when logged in and verify 404 after', async () => {
    const eventId = await createEvent();
    const response = await axios.delete(`${EVENTS_URL}/${eventId}`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    expect(response.status).toBe(204);

    // should return 404 for deleted event
    try {
      await axios.get(`${EVENTS_URL}/${eventId}`);
      throw new Error('Request should have failed');
    } catch (error: any) {
      expect(error.response.status).toBe(404);
    }
  });

  it('should return 400 for invalid event data', async () => {
    try {
      await axios.post(
        `${EVENTS_URL}/`,
        { title: '', date: 'invalid-date' },
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      throw new Error('Request should have failed');
    } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect(typeof error.response.data.error).toBe('string');
    }
  });

  it('should return 404 for non-existent event', async () => {
    try {
      await axios.get(`${EVENTS_URL}/non-existent-id`);
      throw new Error('Request should have failed');
    } catch (error: any) {
      expect(error.response.status).toBe(404);
    }
  });

  it('should return 400 for invalid event ID format', async () => {
    const invalidEventData = {
      title: '    ',
      description: 'This event has an invalid ID format',
      address: '',
      date: '2025-06-02T12:00:00Z',
    };
    try {
      await axios.post(
        `${EVENTS_URL}/`,
        invalidEventData,
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      throw new Error('Request should have failed');
    } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect(typeof error.response.data.error).toBe('string');
    }
  });
});
