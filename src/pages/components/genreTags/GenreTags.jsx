import React from 'react';
import './GenreTags.css';

const genres = [
  ["Action", "K Drama", "Horror", "Kids", "Science Fiction", "War", "Crime", "War & Politics", "Western"],
  ["Comedy", "Biography", "News", "Animation", "TV Movie", "Music", "Talk", "Sci-Fi & Fantasy"],
  ["Action & Adventure", "Family", "Documentary", "Fantasy", "Romance", "History", "Thriller", "Mystery"],
];

export default function GenreTags() {
  return (
    <div className="genre-tags-container">
      {genres.map((row, rowIndex) => (
        <div key={rowIndex} className="genre-row">
          {row.map((genre) => (
            <button key={genre} className="genre-tag">
              {genre}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}