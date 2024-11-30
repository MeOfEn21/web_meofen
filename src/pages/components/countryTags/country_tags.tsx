import React from 'react';
import styles from  './country_tags.module.css';
const crountries = [
    ["Argentina", "Brazil", "South Korea", "Hong Kong", "Poland", "Mexico", "Taiwan", "Israel", "Denmark", "United State"],
    ["Canada", "Australia", "Finland", "Hungary", "Italy", "Netherlands", "Thailand", "Spain", "Romania", "Cambodia"],
    ["Austria", "China", "France", "India", "Japan", "New Zealand", "United Kingdom", "Russia", "Sweden", "Germany"],
];

export default function CountryTags() {
  return (
    <div >
      {crountries.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.genre_row}>
          {row.map((genre) => (
            <button key={genre} className={styles.genre_tag}>
              {genre}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}