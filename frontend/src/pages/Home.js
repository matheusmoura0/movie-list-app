import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { searchMovies, getFavorites, addFavorite, removeFavorite } from '../services/api';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const favs = await getFavorites();
            setFavorites(favs || []);
        };
        fetchFavorites();
    }, []);

    const handleSearch = async (query) => {
        const results = await searchMovies(query);
        const filteredResults = results.filter(movie =>
            !favorites.some(fav => fav.movie_id === movie.id)
        );

        setMovies(filteredResults);
    };

    const handleAddFavorite = async (movie) => {
        const favorite = await addFavorite(movie);
        setFavorites([...favorites, favorite]);
        setMovies(movies.filter(m => m.id !== movie.id));
    };

    const handleRemoveFavorite = async (id) => {
        await removeFavorite(id);
        setFavorites(favorites.filter(fav => fav.movie_id !== id));
    };

    const isFavorite = (movie) => {
        return favorites.some(fav => fav.movie_id === movie.id);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <MovieList
                movies={movies}
                onAddFavorite={handleAddFavorite}
                onRemoveFavorite={handleRemoveFavorite}
                isFavorite={isFavorite}
                isFavoritePage={false}
            />
        </div>
    );
};

export default Home;
