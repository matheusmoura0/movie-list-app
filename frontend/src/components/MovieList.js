import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';


const MovieList = ({ movies, onAddFavorite, onRemoveFavorite, isFavorite, isShared }) => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onAddFavorite={onAddFavorite}
                    onRemoveFavorite={onRemoveFavorite}
                    isFavorite={isFavorite}
                    isShared={isShared}
                />
            ))}
        </div>
    );
};

export default MovieList;
