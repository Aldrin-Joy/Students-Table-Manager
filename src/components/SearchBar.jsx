import React from 'react';
import './SearchBar.css';

/**
 * Search bar for filtering students by name or email.
 * @param {string} value - Current search query
 * @param {function} onChange - Callback when value changes
 */
export default function SearchBar({ value, onChange }) {
    return (
        <div className="search-bar-wrapper">
            <span className="search-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                </svg>
            </span>
            <input
                id="student-search"
                type="text"
                className="search-input"
                placeholder="Search by name or email…"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                aria-label="Search students"
            />
            {value && (
                <button
                    className="search-clear-btn"
                    onClick={() => onChange('')}
                    aria-label="Clear search"
                    title="Clear"
                >
                    ✕
                </button>
            )}
        </div>
    );
}
