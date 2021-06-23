const ruleta = document.querySelector('#ruleta');
var subjectThreeQuestionsList = [
  {
    question: " ¿En qué web los usuarios únicamente son receptores de información?",
    options: [
      {
        title: "Web 3.0",
        isCorrect: false
      },
      {
        title: "Web Social",
        isCorrect: false
      },
      {
        title: "Web 1.0",
        isCorrect: true
      }
    ]
  },
  {
    question: "¿Qué web posibilita el enriquecimiento de las experiencias de aprendizaje tanto para los estudiantes como para los docentes?",
    options: [
      {
        title: "Web 1.0",
        isCorrect: false
      },
      {
        title: "Web Social",
        isCorrect: true
      },
      {
        title: "Web televisiva",
        isCorrect: false
      }
    ]
  },
  {
    question: "¿Cuál no es una característica de la web social?",
    options: [
      {
        title: "La plataforma de trabajo es la propia web",
        isCorrect: false
      },
      {
        title: "Creación de redes de colaboración",
        isCorrect: false
      },
      {
        title: "El usuario únicamente recibe información",
        isCorrect: true
      }
    ]
  },
  {
    question: "¿En qué web el usuario tiene un rol protagonista activo?",
    options: [
      {
        title: "Web social",
        isCorrect: true
      },
      {
        title: "Web 1.0",
        isCorrect: false
      },
      {
        title: "Web televisiva",
        isCorrect: false
      }
    ]
  },
  {
    question: "¿Cuál no es un principio constitutivo de las aplicaciones web social? (Según O’Reilly)",
    options: [
      {
        title: "La Word Wide Web como plataforma",
        isCorrect: false
      },
      {
        title: "El software limitado a un solo dispositivo",
        isCorrect: true
      },
      {
        title: "Modelos de programación ligera",
        isCorrect: false
      }
    ]
  },
  {
    question: "¿Cuál no es una clasificación de aplicación web social?",
    options: [
      {
        title: "Aplicaciones y servicios",
        isCorrect: false
      },
      {
        title: "Inteligencia artificial",
        isCorrect: true
      },
      {
        title: "Redes sociales",
        isCorrect: false
      }
    ]
  },
  {
    question: "¿En qué tipo de aplicación web social la red se consolida como espacio para formar relaciones, comunidades y otros sistemas sociales?",
    options: [
      {
        title: "Contenidos",
        isCorrect: false
      },
      {
        title: "Redes sociales",
        isCorrect: true
      },
      {
        title: "Organización social e inteligente de la información",
        isCorrect: false
      }
    ]
  },
  {
    question: "¿En qué tipo de aplicación web social la información es producida por cualquier usuario de internet?",
    options: [
      {
        title: "Contenidos",
        isCorrect: true
      },
      {
        title: "Redes sociales",
        isCorrect: false
      },
      {
        title: "Aplicaciones y servicios",
        isCorrect: false
      }
    ]
  },
  {
    question: "¿En qué tipo de aplicación web social hay participación, apertura y redes de colaboración?",
    options: [
      {
        title: "Contenidos",
        isCorrect: false
      },
      {
        title: "Redes sociales",
        isCorrect: false
      },
      {
        title: "Aplicaciones y servicio",
        isCorrect: true
      }
    ]
  },
  {
    question: "¿Qué se desarrolla en la educación 2.0?",
    options: [
      {
        title: "Actitudes, capacidades y competencias",
        isCorrect: true
      },
      {
        title: "Instrucciones, estrategias y aprendizaje",
        isCorrect: false
      },
      {
        title: "Recursos, instrucciones y lectura",
        isCorrect: false
      }
    ]
  }
  
];

ruleta.addEventListener('click', girar);
function girar(){
    let rand = Math.random() * 7200;
    calcular(rand);
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
}

function mostrarPregunta(categoria){
  //0 Escoge tema - 1 OACA - 2 Teorias del aprendizaje  - 3 Web Social
  console.log(categoria);
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
    let qst = subjectThreeQuestionsList[0]
    Swal.fire({
      title: qst.question,
      showDenyButton: true,
      showCancelButton: true,
      cancelButtonText: qst.options[0].title,
      confirmButtonText: qst.options[1].title,
      denyButtonText: qst.options[2].title,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDismissed) {
        //mostrarPregunta(1);
        if(qst.options[0].isCorrect){
          Swal.fire('Correcta', '', 'success')
        }else{
          Swal.fire('Incorrecta', '', 'error')
        }
      } else if (result.isConfirmed) {
        //mostrarPregunta(2);
        if(qst.options[1].isCorrect){
          Swal.fire('Correcta', '', 'success')
        }else{
          Swal.fire('Incorrecta', '', 'error')
        }
      } else if (result.isDenied){
        //mostrarPregunta(3);
        if(qst.options[2].isCorrect){
          Swal.fire('Correcta', '', 'success')
        }else{
          Swal.fire('Incorrecta', '', 'error')
        }
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
  console.log(valor);
  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 45:
      console.log("Pierdes turno"); 
     break;
     case valor > 45 && valor <= 90:
      
      mostrarPregunta(1);
      
     break;
     case valor > 90 && valor <= 135:
      mostrarPregunta(2);
     break; 
     case valor > 135 && valor <= 180:
      console.log("Gira de nuevo");
     break;
     case valor > 180 && valor <= 225:
      mostrarPregunta(3);
     break; 
     case valor > 225 && valor <= 270:
      mostrarPregunta(1);
     break;
     case valor > 270 && valor <= 315:
      mostrarPregunta(2);
     break;
     case valor > 315 && valor <= 360:
      mostrarPregunta(0);
     break;
  }

 }, 5000);

}