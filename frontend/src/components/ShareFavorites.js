import React, { useState } from 'react';
import { createSharedLink } from '../services/api';
import '../styles/ShareFavorites.css';

const ShareFavorites = ({ favoriteIds }) => {
    const [shareLink, setShareLink] = useState('');
    const [copied, setCopied] = useState(false);

    const handleGenerateLink = async () => {
        try {
            const sharedLink = await createSharedLink(favoriteIds);
            if (sharedLink) {
                setShareLink(`${window.location.origin}${sharedLink}`);
                setCopied(false);
            } else {
                console.error('Shared link is undefined');
            }
        } catch (error) {
            console.error('Failed to generate share link', error);
        }
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareLink);
        setCopied(true);
    };

    return (
        <div className="share-container">
            <button className="generate-link-button" onClick={handleGenerateLink}>
                Generate Share Link
            </button>
            {shareLink && (
                <div className="share-link-container">
                    <input
                        type="text"
                        value={shareLink}
                        readOnly
                        className="share-link-input"
                    />
                    <button className="copy-button" onClick={handleCopyLink}>
                        {copied ? 'Copied!' : 'Copy Link'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ShareFavorites;
