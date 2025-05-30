import axios from 'axios';

const API_URL = 'http://localhost:3000';

// Set timeout to 10 minutes for all tests in this file
jest.setTimeout(10 * 60 * 1000);

describe('User API Tests', () => {

  const createUser = ({
    username,
    password
  }: {username: string, password: string}) => {
    return {
      username,
      email: `${username}@example.com`,
      password
    }
  }

  const testUser = createUser({
    username: 'testuser',
    password: 'password123'
  });

  describe('POST /users/signup', () => {
    it('should create a new user successfully', async () => {
      const response = await axios.post(`${API_URL}/users/signup`, testUser);

      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('id');
      expect(response.data.username).toBe(testUser.username);
      expect(response.data.email).toBe(testUser.email);
      expect(response.data).not.toHaveProperty('password');
    });

    it('should reject duplicate email', async () => {
      await expect(
        axios.post(`${API_URL}/users/signup`, testUser)
      ).rejects.toMatchObject({
        response: {
          status: 400,
          data: {
            error: expect.stringContaining('already exists')
          }
        }
      });
    });

    it('should reject invalid email format', async () => {
      await expect(
        axios.post(`${API_URL}/users/signup`, {
          ...testUser,
          email: 'invalid-email'
        })
      ).rejects.toMatchObject({
        response: {
          status: 400,
          data: {
            errors: {
              email: expect.any(String)
            }
          }
        }
      });
    });
  });

  describe('POST /users/login', () => {
    it('should login successfully with correct credentials', async () => {
      const response = await axios.post(`${API_URL}/users/login`, {
        email: testUser.email,
        password: testUser.password
      });

      const user = response.data?.user;
      expect(response.status).toBe(200);
      expect(user).toHaveProperty('id');
      expect(user.email).toBe(testUser.email);
      // Accept JWT format: base64url.header.base64url.payload.base64url.signature
      expect(response.data.token).toMatch(/^[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+$/);
      expect(response.data).not.toHaveProperty('password');
    });

    it('should reject invalid credentials', async () => {
      await expect(
        axios.post(`${API_URL}/users/login`, {
          email: testUser.email,
          password: 'wrongpassword'
        })
      ).rejects.toMatchObject({
        response: {
          status: 401,
          data: {
            error: 'Invalid credentials'
          }
        }
      });
    });

    it('should reject non-existent user', async () => {
      await expect(
        axios.post(`${API_URL}/users/login`, {
          email: 'nonexistent@example.com',
          password: 'password123'
        })
      ).rejects.toMatchObject({
        response: {
          status: 401,
          data: {
            error: 'Invalid credentials'
          }
        }
      });
    });
  });
});
