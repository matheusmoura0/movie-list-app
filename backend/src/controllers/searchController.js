const searchService = require('../services/searchService');

const searchMovies = async (req, res) => {
    try {
        const { query } = req.query;

        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        const results = await searchService.searchMovies(query);
        res.status(200).json(results);
    } catch (error) {
        console.error('Error searching movies:', error);
        res.status(500).json({ error: 'Failed to search movies' });
    }
};

module.exports = {
    searchMovies,
};
