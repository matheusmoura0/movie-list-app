const request = require('supertest');
const app = require('../../app');
const axios = require('axios');
//const config = require('../../config/config');

jest.mock('axios');

describe('GET /search', () => {
    it('should return search results', async () => {
        const mockResponse = {
            data: {
                results: [
                    { id: 1, title: 'Movie 1' },
                    { id: 2, title: 'Movie 2' },
                ],
            },
        };

        axios.get.mockResolvedValue(mockResponse);

        const response = await request(app).get('/search').query({ query: 'test' });

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockResponse.data.results);
    });

    it('should return 400 if query parameter is missing', async () => {
        const response = await request(app).get('/search');

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Query parameter is required' });
    });

    it('should return 500 if external API call fails', async () => {
        axios.get.mockRejectedValue(new Error('API Error'));

        const response = await request(app).get('/search').query({ query: 'test' });

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: 'Failed to search movies' });
    });
});
