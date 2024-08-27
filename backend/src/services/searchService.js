const axios = require('axios');
require('dotenv').config();

const searchMovies = async (query) => {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
            api_key: process.env.TMDB_API_KEY,
            query,
        },
    });
    return response.data.results;
};

module.exports = {
    searchMovies,
};