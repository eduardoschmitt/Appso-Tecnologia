var slidePosicao = 0;
carrousel();

function carrousel() {
  var inicioSlides = document.getElementsByClassName("inicio-slides");


/* Seta display none para todas as imagens */
  for (var i = 0; i < inicioSlides.length; i++) {  
    inicioSlides[i].style.display = "none";
  }

/* Mostra o slide, se passar do número de slides, slide retorna para o 1 */
  slidePosicao++;
  if (slidePosicao > inicioSlides.length) slidePosicao = 1; 
  inicioSlides[slidePosicao-1].style.display = "block";
  setTimeout(carrousel, 10000);
}