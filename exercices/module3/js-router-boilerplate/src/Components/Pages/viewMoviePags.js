import { afficher } from "../modules/movies";


const ViewMoviePage = () =>{
    const main = document.querySelector("main");
    main.innerHTML = '<div id="movieWrapper"></div>';
    const movies = afficher();
    const movieWrapper = document.querySelector('#movieWrapper');
    const movieAsHtmlTable = getHtmlMovieTableAsString(movies);

    movieWrapper.innerHTML = movieAsHtmlTable;
}

function getHtmlMovieTableAsString(movies) {
    if (movies?.length === undefined || movies.length ===0){
        return '<p> NO MOVIES YET </p>'
    }

    let htmlMovieTable = `<div class="table-responsive p-5">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Duration (min)</th>
      <th scope="col">Budget (million)</th>    
    </tr>
  </thead>
  <tbody>`;

  movies.forEach((element) => {
    htmlMovieTable += `
    <tr>
      <td><a href="${element.link}" target="_blank""> ${element.title}</a></td>
      <td>${element.duration}</td>
      <td>${element.budget}</td>
    </tr>
    `;
  });

  return htmlMovieTable;
};

export default ViewMoviePage;
