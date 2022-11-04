import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

import image1 from './img/image1.jpg';
import image2 from './img/images2.jpg';


renderimage1(image1);
renderimage2(image2);

function renderimage1(url){
   
    const image = new Image();
    image.src = url;
    image.height = 400;
    const main = document.querySelector("main");
    main.appendChild(image);
}

function renderimage2(url){
   
    const image = new Image();
   
    image.src = url;
    image.height = 400;
    const main = document.querySelector("main");
    main.appendChild(image);
}