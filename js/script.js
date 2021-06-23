const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
function girar(){
    let rand = Math.random() * 7200;
    calcular(rand);
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    mostrarPregunta(0)
}

function mostrarPregunta(categoria){
  //0 Escoge tema - 1 OACA - 2 Teorias del aprendizaje  - 3 Web Social
  if(!categoria){
    Swal.fire({
      title: 'Elige un tema',
      showDenyButton: true,
      showCancelButton: true,
      cancelButtonText: `OACA`,
      confirmButtonText: `TEORÍAS DEL APRENDIZAJE`,
      denyButtonText: `WEB SOCIAL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDismissed) {
        mostrarPregunta(1);
        console.log("OACA");
      } else if (result.isConfirmed) {
        mostrarPregunta(2);
        console.log("TAPRE");
      } else if (result.isDenied){
        mostrarPregunta(3);
        console.log("WEB");
      }
    })
  }else{
    Swal.fire({
      title: 'Pregunta 1',
      showDenyButton: true,
      showCancelButton: true,
      cancelButtonText: `Opcion 1`,
      confirmButtonText: `Opcion 2`,
      denyButtonText: `Opcion 3`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDismissed) {
        //mostrarPregunta(1);
      } else if (result.isConfirmed) {
        //mostrarPregunta(2);
      } else if (result.isDenied){
        //mostrarPregunta(3);
      }
    })
  }
}


function premio(premios){

  console.log(premios);

}


 function calcular(rand) {
  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";

  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 45:
     premio("2 estrellas");
     break;
     case valor > 45 && valor <= 90:
     premio("5 Piezas");
     break;
     case valor > 90 && valor <= 135:
     premio("2 Corazón"); 
     break; 
     case valor > 135 && valor <= 180:
     premio("2 Nigiri");
     break;
     case valor > 180 && valor <= 225:
     premio("Handroll Mini");
     break; 
     case valor > 225 && valor <= 270:
     premio("NO HAY CORTESIAS ESTA VEZ");
     break;
     case valor > 270 && valor <= 315:
     premio("Una Coca Cola de 2L");
     break;
     case valor > 315 && valor <= 360:
     premio("2 Enjoy"); 
     break;
  }

 }, 5000);

}