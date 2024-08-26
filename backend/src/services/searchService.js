const axios = require('axios');
const config = require('../config/config');

const searchMovies = async (query) => {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
            api_key: config.API_KEY,
            query,
        },
    });
    return response.data.results;
};

module.exports = {
    searchMovies,
};