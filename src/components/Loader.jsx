import React from 'react';
import './Loader.css';

/**
 * Full-screen semi-transparent overlay with a spinning loader.
 */
export default function Loader() {
    return (
        <div className="loader-overlay" role="status" aria-label="Loading">
            <div className="loader-spinner"></div>
            <p className="loader-text">Processing...</p>
        </div>
    );
}
