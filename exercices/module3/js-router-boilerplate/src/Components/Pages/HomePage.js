import Image1 from '../../img/film.jpg';
import Image2 from '../../img/film2.jpg';


const homePage = `
<div class = "text-center">
<h1 class="animate__animated animate__bounce text-center">MY MOVIES</h1>
<p> Here you can find a selection of our favorite movies ; </p>

<div class="pb-3">
    <img class="img-thumbnail w-50" src="${Image1}" alt="Image1" />
  </div>
  <div>

    <img class="img-thumbnail w-50" src="${Image2}" alt="Image2" />
  </div>
</div>`;


const HomePage =() =>{
  const main = document.querySelector('main')
  main.innerHTML = homePage;
}

export default HomePage;
