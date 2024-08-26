import React, { useState } from 'react';
import { createSharedLink } from '../services/api';

const ShareFavorites = ({ favoriteIds }) => {
    const [shareLink, setShareLink] = useState('');

    const handleGenerateLink = async () => {
        try {
            const sharedLink = await createSharedLink(favoriteIds);
            if (sharedLink) {
                setShareLink(`${window.location.origin}${sharedLink}`);
            } else {
                console.error('Shared link is undefined');
            }
        } catch (error) {
            console.error('Failed to generate share link', error);
        }
    };

    return (
        <div>
            <button onClick={handleGenerateLink}>Generate Share Link</button>
            {shareLink && (
                <div>
                    <p>Share this link:</p>
                    <a href={shareLink} target="_blank" rel="noopener noreferrer">
                        {shareLink}
                    </a>
                </div>
            )}
        </div>
    );
};

export default ShareFavorites;
