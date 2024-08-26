import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import ShareFavorites from '../components/ShareFavorites';
import { getFavorites, removeFavorite } from '../services/api';
import '../styles/Favorites.css';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const favs = await getFavorites();
            setFavorites(favs || []);
        };
        fetchFavorites();
    }, []);

    const handleRemoveFavorite = async (id) => {
        await removeFavorite(id);
        setFavorites(favorites.filter(fav => fav.id !== id));
    };

    const isFavorite = (movie) => {
        return favorites.some(fav => fav.movie_id === movie.id);
    };

    return (
        <div>
            <h2>My Favorite Movies</h2>
            <MovieList
                movies={favorites}
                favorites={favorites}
                onRemoveFavorite={handleRemoveFavorite}
                isFavorite={isFavorite}
            />
            <ShareFavorites favoriteIds={favorites.map(fav => fav.id)} />
        </div>
    );
};

export default Favorites;
