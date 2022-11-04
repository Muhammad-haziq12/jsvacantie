import ADDMOVIE from '../Pages/addMoviePage';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import ViewMoviePage from '../Pages/viewMoviePags';


const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/add-movie' : ADDMOVIE,
  '/view-movies' : ViewMoviePage
};

export default routes;
