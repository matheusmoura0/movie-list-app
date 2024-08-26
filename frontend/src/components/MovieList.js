import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = ({ movies, favorites, onAddFavorite, onRemoveFavorite }) => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onAddFavorite={favorites.some(fav => fav.movie_id === movie.id) ? onRemoveFavorite : onAddFavorite}
                    isFavorite={favorites.some(fav => fav.movie_id === movie.id)}
                />
            ))}
        </div>
    );
};

export default MovieList;
