const ruleta = document.querySelector('#ruleta');
var subjectTwoQuestionsList = [
  {
      question: "De qué principio del conductivismo es la siguiente definición:  Todo evento que fortalece el aprendizaje.",
      options: [
        {
          title: "Refuerzo",
          isCorrect: true
        },
        {
          title: "Respuesta",
          isCorrect: false
        },
        {
          title: "Estímulo",
          isCorrect: false
        }
      ]
  },
  {
      question: "Qué teoría del aprendizaje dice: El aprendizaje resulta cuando la información es almacenada en la memoria de una manera organizada y significativa",
      options: [
        {
          title: "Constructivismo",
          isCorrect: false
        },
        {
          title: "Cognitivismo",
          isCorrect: true
        },
        {
          title: "Conductivismo",
          isCorrect: false
        }
      ]
  },
  {
      question: "¿Qué tipos de constructivismos hay?",
      options: [
        {
          title: "Abstracto y preciso",
          isCorrect: false
        },
        {
          title: "Realista y radical",
          isCorrect: true
        },
        {
          title: "Discursivo y conservador",
          isCorrect: false
        }
      ]
  },
  {
      question: "¿Cuál de los siguientes aspectos no es un aspecto clave del constructivismo?",
      options: [
        {
          title: "No fragmentar o descomponer",
          isCorrect: false
        },
        {
          title: "Actividades reales",
          isCorrect: false
        },
        {
          title: "Adoctrinación",
          isCorrect: true
        }
      ]
  },
  {
      question: "¿Qué es una guía de acciones que hay que seguir?",
      options: [
        {
          title: "Una habilidad",
          isCorrect: false
        },
        {
          title: "Una estrategia",
          isCorrect: true
        },
        {
          title: "Una técnica",
          isCorrect: false
        }
      ]
  },
  {
      question: " ¿Qué es una actividad específica que puede ser utilizada de forma mecánica?",
      options: [
        {
          title: "Una estrategia",
          isCorrect: false
        },
        {
          title: "Una técnica",
          isCorrect: true
        },
        {
          title: "Una habilidad",
          isCorrect: false
        }
      ]
  },
  {
      question: "¿Cuál es la estrategia que es utilizada por el maestro con intención de ayudar a los estudiantes a aprender?",
      options: [
        {
          title: "Estrategia de aprendizaje",
          isCorrect: false
        },
        {
          title: "Estrategia instruccional ",
          isCorrect: true
        },
        {
          title: "Estrategia de escucha",
          isCorrect: false
        }
      ]
  },
  {
      question: "¿Cuáles son las estrategias que los individuos las emplean por sí mismos para aprender?",
      options: [
        {
          title: "Estrategia de aprendizaje",
          isCorrect: true
        },
        {
          title: "Estrategia instruccional",
          isCorrect: false
        },
        {
          title: "Estrategia de escucha",
          isCorrect: false
        }
      ]
  },
  {
      question: "¿Qué es una capacidad que se ejerce sobre un contenido?",
      options: [
        {
          title: "Un objetivo",
          isCorrect: true
        },
        {
          title: "Una competencia",
          isCorrect: false
        },
        {
          title: "Una estrategia",
          isCorrect: false
        }
      ]
  },
  {
      question: "¿Qué es la posibilidad de un conjunto integrado de recursos para resolver un problema?",
      options: [
        {
          title: "Un objetivo",
          isCorrect: false
        },
        {
          title: "Una competencia",
          isCorrect: true
        },
        {
          title: "Una estrategia",
          isCorrect: false
        }
      ]
  },
  {
      question: "¿Cuál no es una característica de una competencia?",
      options: [
        {
          title: "Moviliza un conjunto de recursos",
          isCorrect: false
        },
        {
          title: "No es evaluable ",
          isCorrect: true
        },
        {
          title: "Está ligada a una familia de situaciones",
          isCorrect: false
        }
      ]
  },
  {
      question: " ¿Cuál es el tipo de estrategia en el ámbito académico que implica la repetición activa de los contenidos o centrarse en partes claves de él?",
      options: [
        {
          title: "Ensayo",
          isCorrect: true
        },
        {
          title: "Elaboración",
          isCorrect: false
        },
        {
          title: "Organización",
          isCorrect: false
        }
      ]
  },
  {
      question: "¿Cuál es el tipo de estrategia que hace conexiones entre lo nuevo y lo familiar?",
      options: [
        {
          title: "Ensayo",
          isCorrect: false
        },
        {
          title: "Apoyo Afectivo",
          isCorrect: false
        },
        {
          title: "Elaboración",
          isCorrect: true
        }
      ]
  }
]

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
    mostrarPregunta(1)
}

function mostrarPregunta(categoria){
  Swal.fire({
    title: 'Pregunta 1',
    showDenyButton: true,
    showCancelButton: true,
    cancelButtonText: `Opcion 3`,
    confirmButtonText: `Opcion 1`,
    denyButtonText: `Opcion 2`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    console.log(result);
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
  if(!categoria){
    
  }else{
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      cancelButtonText: `Opcion 3`,
      confirmButtonText: `Opcion 1`,
      denyButtonText: `Opcion 2`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      console.log(result);
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
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