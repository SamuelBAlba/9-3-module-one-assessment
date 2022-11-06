/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let movieTitles = []
  // loop through movies
  for(let i = 0; i < movies.length; i++){
   // push only titles into movieTitle
    movieTitles.push(movies[i].title)
  }
  return movieTitles
}

// start with an empty array and accumulate
// use for loop
//return array of strings(all the movie titles)

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  let highMeta = 0
  metaArr = []

  // guard clause
  if(movies.length === 0){
    return highMeta
  }
    // loop through movies
  for(let i = 0; i < movies.length; i++){
   // push metascore into metaArr and turn string into number
    metaArr.push(Number(movies[i].metascore))
  }
  // loop through metaArr
  for(let j = 0; j < metaArr.length; j++){
   // searches for highest number in array
    if(metaArr[j] > highMeta){
      highMeta = metaArr[j]
    }
  }
  return highMeta
}

// will start score from 0
// will need to convert from string to number in order to compare
// loop will be used to search through movies
// return will be a number
/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  let averageArr = []
  let ratingSum = 0
  let finalAverage = 0
  // guard clause
  if(movies.length === 0){
    return finalAverage
  }
  // loop through movies
  for(let i = 0; i < movies.length; i++){
  // push rating into arr and convert to numbers
    averageArr.push(Number(movies[i].imdbRating))
  }
  // loop through array and add all of the numbers
  for(let j = 0; j < averageArr.length; j++){
    // add all of the numbers
    ratingSum += averageArr[j]
  }
  // divide that sum by the length of array 
  finalAverage = ratingSum / averageArr.length
  finalAverage.toFixed(2)

  return finalAverage
}

// converts strings to numbers
// finds average of number (average = (sum of all number) divided by (amount of number).length?
// answer needs to be in two decimal form 
// returns a number
/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  let ratingObj = {}
  numOfRatingG = 0
  numOfRatingPg = 0

  if(movies.length === 0){
    return ratingObj
  }

}
// use loop for movies
// keys are rating and value is # of movies with that rating
// return an object
/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  let errorMsg = null 
  let finalReturn
  

  if(movies.length === 0){
    return errorMsg
  }

  for( let i = 0; i < movies.length; i++){
    if(movies[i].imdbID === id){
      return movies[i]
    }

    //return errorMsg
  }
  return errorMsg
   
}
// use loop
// two parameters (movies, id)
// 2 error messages
// return an object
/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let noMovies = []
  let movieGenre

  if(movies.length === 0){
    return noMovies
  }

  
  for(let i = 0; i < movies.length; i++){
   movieGenre = movies[i].genre.split(', ')
  
   if(movieGenre.includes(genre)){
    noMovies.push(movies[i])
   }

  }

  return noMovies

}




// loop movies
// turn genre into a array to use .includes
// 2 parameters (movies, genre)
// return an array of objects
/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let moviesYear = []
  let yearRele

  if(movies.length === 0){
    return moviesYear
  }


return moviesYear


}

//
// return an array 
/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  let errorMsg = null
  let topBoxOffice

  if(movies.length === 0){
    return errorMsg
  }

  for(let i = 0; i < movies.length; i++){
    topBoxOffice = movies[i].boxOffice
    topBoxOffice.slice(0)
    console.log(topBoxOffice)
  }
   
}


//
//return string
// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
