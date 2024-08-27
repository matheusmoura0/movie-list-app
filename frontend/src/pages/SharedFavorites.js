import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSharedFavorites } from '../services/api';
import MovieList from '../components/MovieList';

const SharedFavorites = () => {
    const { uuid } = useParams();
    const [sharedFavorites, setSharedFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSharedFavorites = async () => {
            try {
                const favorites = await getSharedFavorites(uuid);
                setSharedFavorites(favorites);
            } catch (error) {
                console.error('Error fetching shared favorites:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSharedFavorites();
    }, [uuid]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!sharedFavorites.length) {
        return <div>No favorites found in this list.</div>;
    }

    return (
        <div>
            <h2>Shared Favorite Movies</h2>
            <MovieList movies={sharedFavorites} isFavorite={() => true}
            />
        </div>
    );
};

export default SharedFavorites;
