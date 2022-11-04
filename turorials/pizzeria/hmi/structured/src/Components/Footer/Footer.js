import image1 from '../../img/pizza.jpg';
import image2 from '../../img/js-logo.png';
import Navigate  from '../Router/Navigate';

const Footer = () =>{
    const footer = document.querySelector('footer');
    footer.innerHTML = `<h1 class="animate__animated animate__bounce animate__delay-2s text-center">
    But we also love JS
  </h1>`;


renderSmallImage(footer, image1, 'chessePizza');
renderSmallImage(footer, image2);
attachOnPizzaClick();
};

export default Footer;

function renderSmallImage(wrapper, url, id){
const image = new Image();
image.src = url;
image.height = 50;
if (id) image.id = id;
wrapper.appendChild(image);
}

function attachOnPizzaClick() {
  const pizza = document.querySelector('#chessePizza');
  pizza.addEventListener('click', () =>{
    Navigate('/');

  })
};
