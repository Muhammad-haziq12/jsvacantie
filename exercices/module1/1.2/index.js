const body = document.querySelector("body")

body.addEventListener("click", compter);

let countnumer = 0;
function compter(){
  const cmpt = document.querySelector("#compteur");
  const message = document.querySelector("#message");
  countnumer += 1;
  cmpt.innerText = countnumer

  if(countnumer >= 5 && countnumer <=9){
    message.innerText = "Bravo, bel échauffement"
  }
  if (countnumer >= 10){
    message.innerText = "Vous êtes passé maître en l'art du clic !"
  }


}

