import image1 from '../../img/pizza.jpg';
import image2 from '../../img/js-logo.png';

const Footer = () =>{
    const footer = document.querySelector('footer');
    footer.innerHTML = `<h1 class="animate__animated animate__bounce animate__delay-2s text-center">
    But we also love JS
  </h1>`;


renderSmallImage(footer, image1);
renderSmallImage(footer, image2);
};

export default Footer;

function renderSmallImage(wrapper, url){
const image = new Image();
image.src = url;
image.height = 50;
wrapper.appendChild(image);
}
