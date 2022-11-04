import {ajouter} from '../modules/movies';
import Navigate  from '../Router/Navigate';

const addMovie = `
<div class = "text-center">
<h3> MOVIES </h3>

<form class="px-5">
<div class="mb-3">
  <label for="title">LE TITRE : </label>
  <input
    class="form-control"
    type="text"
    name="title"
    id="title"
    required
  />
  </div>
  <div class="mb-3">
  <label for="duration"> LA DUREE : (minutes)</label>
  <input
    class="form-control"
    type="number"
    name="duration"
    id="duration"
    required
  />
  </div>
  <div class="mb-3">
              <label for="budget"> LE BUDGET : (million)</label>
              <input
                class="form-control"
                type="number"
                name="budget"
                id="budget"
                required
              />
              </div>
              <div class="mb-3">
              <label for="link"> LE LIEN : </label>
              <input 
              class = "form-control"
              type = "url"
              name="link"
              id="link"
              required
              />
              </div>
              <input type ="submit" class = "btn btn-primary" value ="AJOUTER LE FILM" />
              </form>
              </div>`;

const ADDMOVIE = () => {
    const main = document.querySelector('main');
    main.innerHTML = addMovie;

    const form = document.querySelector('form');
    const title = document.querySelector('#title');
    const duration = document.querySelector('#duration');
    const budget = document.querySelector('#budget');
    const link = document.querySelector('#link');

    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const movieacree = {
            title : title.value,
            duration : duration.value,
            budget : budget.value,
            link : link.value,
        };

        ajouter(movieacree);
        Navigate('/view-movies');
    })
}

export default ADDMOVIE;