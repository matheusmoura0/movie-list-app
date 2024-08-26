const axios = require('axios');
const searchService = require('../../services/searchService');
const config = require('../../config/config');

jest.mock('axios');

describe('searchService', () => {
    it('should fetch movies based on query', async () => {
        const mockResponse = {
            data: {
                results: [
                    { id: 1, title: 'Movie 1' },
                    { id: 2, title: 'Movie 2' },
                ],
            },
        };

        axios.get.mockResolvedValue(mockResponse);

        const results = await searchService.searchMovies('test');

        expect(axios.get).toHaveBeenCalledWith('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: config.API_KEY,
                query: 'test',
            },
        });

        expect(results).toEqual(mockResponse.data.results);
    });

    it('should throw error when API call fails', async () => {
        axios.get.mockRejectedValue(new Error('API Error'));

        await expect(searchService.searchMovies('test')).rejects.toThrow('API Error');
    });
});
