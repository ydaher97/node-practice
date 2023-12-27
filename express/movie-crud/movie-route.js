const express = require('express');
const app = express();
const PORT = 3001;
const fs = require('fs');
const moviesData = './movies.json';

app.use(express.json());


app.get('/movies', (req, res) => {
  try {
    const movies = JSON.parse(fs.readFileSync(moviesData));
    res.json(movies);
  } catch (err) {
    res.status(500).send('Error retrieving movies');
  }
});


app.get('/movies/:id', (req, res) => {
  try {
    const movies = JSON.parse(fs.readFileSync(moviesData));
    const movie = movies.find((movie) => movie.id === req.params.id);
    if (!movie) {
      res.status(404).send('Movie not found');
    } else {
      res.json(movie);
    }
  } catch (err) {
    res.status(500).send('Error retrieving movie');
  }
});

app.post('/movies', (req, res) => {
  try {
     const movies = JSON.parse(fs.readFileSync(moviesData));
    const newMovie = req.body;
     console.log(movies)

     movies.push(newMovie);
    fs.writeFileSync(moviesData, JSON.stringify(movies, null, 2));
    res.status(201).send('Movie added successfully');
  } catch (err) {
    res.status(500).send('Error adding movie');
  }
});


app.put('/movies/:id', (req, res) => {
  try {
    const movies = JSON.parse(fs.readFileSync(moviesData));
    const movieIndex = movies.findIndex((movie) => movie.id === req.params.id);
    if (movieIndex === -1) {
      res.status(404).send('Movie not found');
    } else {
      movies[movieIndex] = req.body;
      fs.writeFileSync(moviesData, JSON.stringify(movies, null, 2));
      res.send('Movie updated successfully');
    }
  } catch (err) {
    res.status(500).send('Error updating movie');
  }
});


app.delete('/movies/:id', (req, res) => {
  try {
    const movies = JSON.parse(fs.readFileSync(moviesData));
    const updatedMovies = movies.filter((movie) => movie.id !== req.params.id);
    if (movies.length === updatedMovies.length) {
      res.status(404).send('Movie not found');
    } else {
      fs.writeFileSync(moviesData, JSON.stringify(updatedMovies, null, 2));
      res.send('Movie deleted successfully');
    }
  } catch (err) {
    res.status(500).send('Error deleting movie');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
