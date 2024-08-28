import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

export const searchMovies = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/movies/search`, {
            params: { query },
        });
        return response.data;
    } catch (error) {
        console.error('Error searching movies:', error);
        throw error;
    }
};

export const getFavorites = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/favorites`);
        return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
        console.error('Error fetching favorites:', error);
        throw error;
    }
};

export const addFavorite = async (movie) => {
    try {
        const requestBody = {
            movie_id: movie.id,
            title: movie.title,
            vote_average: movie.vote_average,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            overview: movie.overview,
            user_id: null,
        };

        const response = await axios.post(`${BASE_URL}/api/favorites`, requestBody);

        return response.data;
    } catch (error) {
        console.error('Error adding favorite:', error);
        throw error;
    }
};

export const removeFavorite = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/api/favorites/${id}`);
    } catch (error) {
        console.error('Error removing favorite:', error);
        throw error;
    }
};

export const createSharedLink = async (favoriteIds) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/shared`, { favoriteIds });
        const { sharedLink } = response.data
        return sharedLink;
    } catch (error) {
        console.error('Error creating shared link!:', error);
        throw error;
    }
};

export const getFavoritesBySharedLink = async (uuid) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/shared/${uuid}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching favorites by shared link:', error);
        throw error;
    }
};

export const getSharedFavorites = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/shared/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching shared favorites:', error);
        throw error;
    }
};

export const getMovie = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/movies/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie:', error);
        throw error;
    }
};
