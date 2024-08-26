const BASE_URL = 'http://localhost:5000';

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/movies/search?query=${query}`);
    const data = await response.json();
    return data;
};

export const getFavorites = async () => {
    const response = await fetch(`${BASE_URL}/favorites`);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
};

export const addFavorite = async (movie) => {
    try {
        const requestBody = {
            movie_id: movie.id,
            title: movie.title,
            vote_average: movie.vote_average,
            poster_path: movie.poster_path,
            user_id: null,
        };

        const response = await fetch(`${BASE_URL}/favorites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error('Failed to add favorite');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding favorite:', error);
        throw error;
    }
};



export const removeFavorite = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/favorites/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to remove favorite');
        }
    } catch (error) {
        console.error('Error removing favorite:', error);
        throw error;
    }
};

export const createSharedLink = async (favoritesIds) => {
    const response = await fetch(`${BASE_URL}/shared`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ favorites_ids: favoritesIds }),
    });
    const data = await response.json();
    return data;
};

export const getSharedFavorites = async (id) => {
    const response = await fetch(`${BASE_URL}/shared/${id}`);
    const data = await response.json();
    return data;
};

export const getMovie = async (id) => {
    const response = await fetch(`${BASE_URL}/movies/${id}`);
    const data = await response.json();
    return data;
};
