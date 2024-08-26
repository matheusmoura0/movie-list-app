import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const searchMovies = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/movies/search`, {
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
        const response = await axios.get(`${BASE_URL}/favorites`);
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

        const response = await axios.post(`${BASE_URL}/favorites`, requestBody);

        return response.data;
    } catch (error) {
        console.error('Error adding favorite:', error);
        throw error;
    }
};

export const removeFavorite = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/favorites/${id}`);
    } catch (error) {
        console.error('Error removing favorite:', error);
        throw error;
    }
};

export const createSharedLink = async (favoriteIds) => {
    try {
        const response = await axios.post(`${BASE_URL}/shared`, { favoriteIds });
        console.log('Response from backend:', response.data); // Log to check the response
        return response.data;
    } catch (error) {
        console.error('Error creating shared link:', error);
        throw error;
    }
};

export const getFavoritesBySharedLink = async (uuid) => {
    try {
        const response = await axios.get(`${BASE_URL}/shared/${uuid}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching favorites by shared link:', error);
        throw error;
    }
};

export const getSharedFavorites = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/shared/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching shared favorites:', error);
        throw error;
    }
};

export const getMovie = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/movies/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie:', error);
        throw error;
    }
};
