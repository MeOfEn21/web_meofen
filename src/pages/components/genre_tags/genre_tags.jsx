import React from 'react';
import styles from  './genre_tags.module.css';

const genres = [
  ["Action", "K Drama", "Horror", "Kids", "Science Fiction", "War", "Crime", "War & Politics", "Western"],
  ["Comedy", "Biography", "News", "Animation", "TV Movie", "Music", "Talk", "Sci-Fi & Fantasy"],
  ["Action & Adventure", "Family", "Documentary", "Fantasy", "Romance", "History", "Thriller", "Mystery"]
];

export default function GenreTags() {
  return (
    <div >
      {genres.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((genre) => (
            <button key={genre} className={styles.tag}>
              {genre}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}