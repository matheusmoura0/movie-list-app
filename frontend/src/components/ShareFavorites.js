import React, { useState } from 'react';
import { createSharedLink } from '../services/api';

const ShareFavorites = ({ favoriteIds }) => {
    const [shareLink, setShareLink] = useState('');

    const handleGenerateLink = async () => {
        try {
            const { uuid } = await createSharedLink(favoriteIds);
            if (uuid) {
                setShareLink(`${window.location.origin}/shared/${uuid}`);
            } else {
                console.error('UUID is undefined');
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
