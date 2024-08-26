import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = ({ movies, onAddFavorite, onRemoveFavorite, isFavoritePage, isFavorite }) => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onAddFavorite={onAddFavorite}
                    onRemoveFavorite={onRemoveFavorite}
                    isFavorite={isFavoritePage ? true : isFavorite(movie)}
                    isFavoritePage={isFavoritePage}
                />
            ))}
        </div>
    );
};

export default MovieList;
