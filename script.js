// API URL: http://www.omdbapi.com/?apikey=694971ca& 

function getMovie() {
    // Get the movie name entered by the user
    const movieSearch = document.getElementById('movie-search-box').value;

        MovieData(movieSearch);// Call MovieData with the movie name
    
}

async function MovieData(moviesearchbox) {

    const response = await fetch(`http://www.omdbapi.com/?apikey=694971ca&t=${moviesearchbox}`);
    const data = await response.json();

     //console.log('Movie data', data);
   
    const titleElement = document.getElementById("Title");
    titleElement.innerHTML = data.Title;

    const yearElement = document.getElementById("Year");
    yearElement.innerHTML = data.Year;

    const runtimeElement = document.getElementById("Runtime");
    runtimeElement.innerHTML = data.Runtime;

    const genreElement = document.getElementById("Genre");
    genreElement.innerHTML = data.Genre;

    const actorsElement = document.getElementById("Actors");
    actorsElement.innerHTML = data.Actors;

    const imdbRatingElement = document.getElementById("imdbRating");
    imdbRatingElement.innerHTML = data.imdbRating;
    
    const posterurl = data.Poster;
    const imageContainer = document.getElementById("Poster");

    
    imageContainer.innerHTML = `<img src="${posterurl}" alt="Movie Poster">`; 

    
}






