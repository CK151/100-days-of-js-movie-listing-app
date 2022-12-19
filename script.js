const apiURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const searchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const imgPath = "https://image.tmdb.org/t/p/w1280";

let moviesDiv = document.querySelector(".movies");
let form = document.querySelector("form");
let input = document.querySelector(".search");

getMovies(apiURL)
async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.results);

    displayMovies(data.results)
}

//display movies

function displayMovies(movies) {
    moviesDiv.innerHTML = "";

    movies.forEach((movie) => {
        const div = document.createElement("div")
        div.classList.add("movie");
        div.innerHTML = `
        <img src="${imgPath + movie.poster_path}" alt="">
        <div class="details">
            <h2 class="title">${movie.title}</h2>
            <p class="rate">Rating: <span class="rating">${movie.vote_average}</span></p>
            <p class="overview">
                ${movie.overviw}
            </p>
        </div>
        `;

        moviesDiv.appendChild(div)
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    moviesDiv.innerHTML = "";

    const inputVal = input.value;

    if (inputVal) {
        getMovies(searchAPI + inputVal);
        input.value = ""
    }
})