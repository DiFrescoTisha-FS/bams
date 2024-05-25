const jwt = require('jsonwebtoken');
const request = require('supertest');
const app = require('express'); // Replace with the actual import of your Express app
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

describe('Authentication Token Expiration Tests', () => {
  jest.useFakeTimers();

  it.only('should handle an expired token', async (done) => {
    const secretKey = process.env.JWT_SECRET_KEY; // Get the secret key from environment variables

    // Generate an expired token (e.g., 1 second expiration for testing)
    const token = jwt.sign({ userId: '123' }, secretKey, {
      expiresIn: '1s',
    });
  
    // Simulate the passage of time (1 second)
    jest.advanceTimersByTime(1000);
  
    // Send a request with the expired token to your server
    const response = await request(app)
      .get('/protected-route')
      .set('Authorization', `Bearer ${token}`);
  
    // Expect a 401 Unauthorized response
    expect(response.status).toBe(401);
    expect(response.body).toEqual({ error: 'Token expired' }); // Adjust this as per your error response
  
    // Call the done() callback to indicate that the test has completed
    done();
  }, 80000); // Set a timeout of 20 seconds
  
  
  it('should handle a valid token', async (done) => {
    const secretKey = process.env.JWT_SECRET_KEY; // Get the secret key from environment variables

    // Generate a valid token (e.g., 1 hour expiration)
    const token = jwt.sign({ userId: '123' }, secretKey, {
      expiresIn: '1h',
    });

    // Send a request with the valid token to your server
    const response = await request(app)
      .get('/protected-route')
      .set('Authorization', `Bearer ${token}`);

    // Expect a 200 OK response
    expect(response.status).toBe(200);
    // Add more expectations for the response body as needed
    done(); // Call done to signal the completion of the test
  }, 10000); // Set a timeout of 10 seconds

  afterAll(() => {
    // Close any resources or connections here
  });
});
