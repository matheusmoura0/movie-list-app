import React, { useState } from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ movie, onAddFavorite, onRemoveFavorite, isFavorite, isFavoritePage }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const showExpandButton = movie.overview && movie.overview.length > 100;

    return (
        <div className="movie-card">
            <div className="movie-card-header">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-poster"
                />
                {isFavoritePage ? (
                    <button
                        className="favorite-button is-favorite"
                        onClick={() => onRemoveFavorite(movie.id)}
                    >
                        ✖
                    </button>
                ) : (
                    <button
                        className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}
                        onClick={() => isFavorite ? onRemoveFavorite(movie.id) : onAddFavorite(movie)}
                    >
                        {isFavorite ? '✖' : '★'}
                    </button>
                )}
            </div>
            <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>Rating: {movie.vote_average}</p>
                <p>Release Date: {movie.release_date}</p>
                {movie.overview && (
                    <p className={`movie-overview ${isExpanded ? 'expanded' : ''}`}>
                        {movie.overview}
                    </p>
                )}
                {showExpandButton && (
                    <button className="expand-button" onClick={handleToggleExpand}>
                        {isExpanded ? 'Leia menos' : 'Leia mais'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default MovieCard;
