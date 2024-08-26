import React, { useEffect, useState } from 'react';
import { getFavoritesBySharedLink } from '../services/api';
import { useParams } from 'react-router-dom';
import MovieList from '../components/MovieList';

const SharedFavorites = () => {
    const { uuid } = useParams();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const favs = await getFavoritesBySharedLink(uuid);
                setFavorites(favs);
            } catch (error) {
                console.error('Failed to fetch shared favorites', error);
            }
        };
        fetchFavorites();
    }, [uuid]);

    return (
        <div>
            <h2>Shared Favorite Movies</h2>
            <MovieList movies={favorites} />
        </div>
    );
};

export default SharedFavorites;
