const request = require('supertest');
const app = require('../app'); 

describe('Filmes API', () => {
  it('should get all filmes', async () => {
    const response = await request(app).get('/api/filmes');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should create a new filme', async () => {
    const newFilme = {
      name: 'New Movie',
      description: 'A new movie',
      year: '2023',
      cover: 'url_of_cover'
    };

    const response = await request(app).post('/api/filmes').send(newFilme);
    expect(response.status).toBe(201);
    expect(response.body.response.name).toBe('New Movie');
  });

  // Add more test cases for other endpoints (GET by ID, PATCH, PUT, DELETE)
});
