const ruleta = document.querySelector("#ruleta");
var subjectThreeQuestionsList = [
  {
    question:
      " ¿En qué web los usuarios únicamente son receptores de información?",
    options: [
      {
        title: "Web 3.0",
        isCorrect: false,
      },
      {
        title: "Web Social",
        isCorrect: false,
      },
      {
        title: "Web 1.0",
        isCorrect: true,
      },
    ],
  },
  {
    question:
      "¿Qué web posibilita el enriquecimiento de las experiencias de aprendizaje tanto para los estudiantes como para los docentes?",
    options: [
      {
        title: "Web 1.0",
        isCorrect: false,
      },
      {
        title: "Web Social",
        isCorrect: true,
      },
      {
        title: "Web televisiva",
        isCorrect: false,
      },
    ],
  },
  {
    question: "¿Cuál no es una característica de la web social?",
    options: [
      {
        title: "La plataforma de trabajo es la propia web",
        isCorrect: false,
      },
      {
        title: "Creación de redes de colaboración",
        isCorrect: false,
      },
      {
        title: "El usuario únicamente recibe información",
        isCorrect: true,
      },
    ],
  },
  {
    question: "¿En qué web el usuario tiene un rol protagonista activo?",
    options: [
      {
        title: "Web social",
        isCorrect: true,
      },
      {
        title: "Web 1.0",
        isCorrect: false,
      },
      {
        title: "Web televisiva",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "¿Cuál no es un principio constitutivo de las aplicaciones web social? (Según O’Reilly)",
    options: [
      {
        title: "La Word Wide Web como plataforma",
        isCorrect: false,
      },
      {
        title: "El software limitado a un solo dispositivo",
        isCorrect: true,
      },
      {
        title: "Modelos de programación ligera",
        isCorrect: false,
      },
    ],
  },
  {
    question: "¿Cuál no es una clasificación de aplicación web social?",
    options: [
      {
        title: "Aplicaciones y servicios",
        isCorrect: false,
      },
      {
        title: "Inteligencia artificial",
        isCorrect: true,
      },
      {
        title: "Redes sociales",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "¿En qué tipo de aplicación web social la red se consolida como espacio para formar relaciones, comunidades y otros sistemas sociales?",
    options: [
      {
        title: "Contenidos",
        isCorrect: false,
      },
      {
        title: "Redes sociales",
        isCorrect: true,
      },
      {
        title: "Organización social e inteligente de la información",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "¿En qué tipo de aplicación web social la información es producida por cualquier usuario de internet?",
    options: [
      {
        title: "Contenidos",
        isCorrect: true,
      },
      {
        title: "Redes sociales",
        isCorrect: false,
      },
      {
        title: "Aplicaciones y servicios",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "¿En qué tipo de aplicación web social hay participación, apertura y redes de colaboración?",
    options: [
      {
        title: "Contenidos",
        isCorrect: false,
      },
      {
        title: "Redes sociales",
        isCorrect: false,
      },
      {
        title: "Aplicaciones y servicio",
        isCorrect: true,
      },
    ],
  },
  {
    question: "¿Qué se desarrolla en la educación 2.0?",
    options: [
      {
        title: "Actitudes, capacidades y competencias",
        isCorrect: true,
      },
      {
        title: "Instrucciones, estrategias y aprendizaje",
        isCorrect: false,
      },
      {
        title: "Recursos, instrucciones y lectura",
        isCorrect: false,
      },
    ],
  },
];

var subjectOneQuestionsList = [
  {
    question: "¿Qué significa OACA?",
    options: [
      {
        title: "Objetos de Aprender Cultura y Avicultura",
        isCorrect: false,
      },
      {
        title: "Objetos de Aprendizaje de Contenido Alto",
        isCorrect: false,
      },
      {
        title: "Objetos de Aprendizaje de Contenido Abierto",
        isCorrect: true,
      },
    ],
  },
  {
    question:
      "Según Wiley, ¿Cuáles son las 5R que cumplen los objetos de aprendizaje?",
    options: [
      {
        title: "Retain, Remix, Resolve, Redistribute, Rush",
        isCorrect: false,
      },
      {
        title: "Retain, Reuse, Revise, Remix, Redistribute",
        isCorrect: true,
      },
      {
        title: "Retain, Resolve, Remix, Raice, Redistribute",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "¿Cuál no es una característica de la dimensión pedagógica de los OACA?",
    options: [
      {
        title: "Diversidad de estilos de aprendizaje",
        isCorrect: false,
      },
      {
        title: "Actividades de aprendizaje",
        isCorrect: false,
      },
      {
        title: "Sesgo ideológico",
        isCorrect: true,
      },
    ],
  },
  {
    question:
      "¿Cuál no es una característica de la dimensión tecnológica de los OACA?",
    options: [
      {
        title: "Interoperabilidad",
        isCorrect: false,
      },
      {
        title: "Reutilización",
        isCorrect: false,
      },
      {
        title: "No portable",
        isCorrect: true,
      },
    ],
  },
  {
    question:
      "¿Cuál no es una característica de la dimensión humano computador de los OACA?",
    options: [
      {
        title: "Ayuda a la memorización",
        isCorrect: false,
      },
      {
        title: "Irrecuperable ante fallas",
        isCorrect: true,
      },
      {
        title: "Accesible desde la web",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Según la taxonomía de Wiley, a qué corresponde la siguiente definición: Es un recurso digital independiente, sin combinar con otro objeto.",
    options: [
      {
        title: "Objetos de aprendizaje de contenido abierto fundamental",
        isCorrect: true,
      },
      {
        title: "Objetos de aprendizaje de contenido abierto independiente",
        isCorrect: false,
      },
      {
        title: "Objetos de aprendizaje de contenido cerrado",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Según la taxonomía de Wiley, a qué corresponde la siguiente definición: Consiste en un reducido número de recursos digitales combinados en tiempo de diseño por el creador del objeto, donde los OACA que lo conforman no son accesibles individualmente para su reutilización.",
    options: [
      {
        title:
          "Objetos de aprendizaje de contenidos abiertos combinados cerrados",
        isCorrect: true,
      },
      {
        title:
          "Objetos de aprendizaje de contenidos de presentación generativa",
        isCorrect: false,
      },
      {
        title:
          "Objetos de aprendizaje de contenidos abiertos combinados abiertos",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Según la taxonomía de Wiley, a qué corresponde la siguiente definición: Consiste en un largo número de recursos digitales combinados, cuyos componentes son directamente accedidos para su reutilización.",
    options: [
      {
        title:
          "Objetos de aprendizaje de contenidos abiertos combinados abiertos",
        isCorrect: true,
      },
      {
        title:
          "Objetos de aprendizaje de contenidos abiertos combinados largos",
        isCorrect: false,
      },
      {
        title: "Objetos de aprendizaje de contenidos abiertos digitales",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Según la taxonomía de Wiley, a qué corresponde la siguiente definición: Es la estructura lógica  para combinar, generar o reorganizar los OACA de nivel inferior (fundamentales y combinados cerrados).",
    options: [
      {
        title:
          "Objetos de aprendizaje de contenidos abiertos generativos instruccionales",
        isCorrect: false,
      },
      {
        title:
          "Objetos de aprendizaje de contenidos abiertos combinados abiertos",
        isCorrect: false,
      },
      {
        title:
          "Objetos de aprendizaje de contenidos abiertos de presentación generativa",
        isCorrect: true,
      },
    ],
  },
  {
    question:
      "Según la taxonomía de Wiley, a qué corresponde la siguiente definición: Proporcionan la estructura lógica para combinar las diferentes taxonomías de los objetos de aprendizaje, además de evaluar interacciones del estudiante con estas combinaciones.",
    options: [
      {
        title:
          "Objetos de aprendizaje de contenidos abiertos generativos instruccionales",
        isCorrect: true,
      },
      {
        title:
          "Objetos de aprendizaje de contenidos abiertos combinados abiertos",
        isCorrect: false,
      },
      {
        title:
          "Objetos de aprendizaje de contenidos abiertos de presentación generativa",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Según ASTD & SmartForce, a qué corresponde la siguiente definición: OACA destinados principalmente al apoyo al aprendizaje, donde el aprendiz tiene un rol pasivo.",
    options: [
      {
        title: "Objetos de práctica",
        isCorrect: false,
      },
      {
        title: "Objetos de instrucción",
        isCorrect: true,
      },
      {
        title: "Objetos de colaboración ",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Según ASTD & SmartForce, a qué corresponde la siguiente definición: OACA destinados al autoaprendizaje, con alta interacción del aprendiz.",
    options: [
      {
        title: "Objetos de práctica",
        isCorrect: true,
      },
      {
        title: "Objetos de evaluación",
        isCorrect: false,
      },
      {
        title: "Objetos de colaboración",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Según ASTD & SmartForce, a qué corresponde la siguiente definición: OACA que se desarrollan para la comunicación de ambientes de aprendizaje colaborativo.",
    options: [
      {
        title: "Objetos de evaluación",
        isCorrect: false,
      },
      {
        title: "Objetos de instrucción",
        isCorrect: false,
      },
      {
        title: "Objetos de colaboración",
        isCorrect: true,
      },
    ],
  },
  {
    question:
      "Según ASTD & SmartForce, a qué corresponde la siguiente definición: OACA que tienen como función conocer el nivel de conocimiento adquirido por un aprendiz.",
    options: [
      {
        title: "Objetos de evaluación",
        isCorrect: true,
      },
      {
        title: "Objetos de instrucción",
        isCorrect: false,
      },
      {
        title: "Objetos de colaboración",
        isCorrect: false,
      },
    ],
  },
];

ruleta.addEventListener("click", girar);
function girar() {
  let rand = Math.random() * 7200;
  calcular(rand);
  var sonido = document.querySelector("#audio");
  sonido.setAttribute("src", "sonido/ruleta.mp3");
  mostrarPregunta(1);
}

function mostrarPregunta(categoria) {
  Swal.fire({
    title: "Pregunta 1",
    showDenyButton: true,
    showCancelButton: true,
    cancelButtonText: `Opcion 3`,
    confirmButtonText: `Opcion 1`,
    denyButtonText: `Opcion 2`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    console.log(result);
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
  if (!categoria) {
  } else {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      cancelButtonText: `Opcion 3`,
      confirmButtonText: `Opcion 1`,
      denyButtonText: `Opcion 2`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      console.log(result);
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
}

function premio(premios) {
  console.log(premios);
}

function calcular(rand) {
  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
  ruleta.style.transform = "rotate(" + rand + "deg)";

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
