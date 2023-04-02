const fs = require('fs');

// Define an array of movie objects
const movies = [
  { title: 'The Shawshank Redemption', year: 1994, director: 'Frank Darabont' },
  { title: 'The Godfather', year: 1972, director: 'Francis Ford Coppola' },
  { title: 'The Dark Knight', year: 2008, director: 'Christopher Nolan' },
  { title: '12 Angry Men', year: 1957, director: 'Sidney Lumet' },
  { title: 'Schindler\'s List', year: 1993, director: 'Steven Spielberg' }
];

// Convert the array of movie objects to JSON string
const moviesJson = JSON.stringify(movies);

// Write the JSON string to a file named movies.json
fs.writeFile('movies.json', moviesJson, (err) => {
  if (err) throw err;
  console.log('Movie data saved to movies.json');
});
