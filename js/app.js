const dataES=
{
  "navbar": {
    "sobre-mi": "Sobre Mi",
    "proyectos" : "Proyectos",
    "contacto": "Contacto"
  },
  "home": {
    "title-home": "Soy Pedro Gervasoni",
    "text-home": "Futuro full stack desarrollador",
    "span-home": "Te invito a conocerme...",
    "boton-resume": "Curriculum",
    "boton-contacto": "Contacto"
  },
  "sobre-mi":{
    "sobreMi": "Sobre Mi",
    "title-sobreMi": "Desarrollador web en proceso",
    "text_sobreMi": "Mi conocimiento es el siguiente, pero estoy constantemente aprendiendo para mejorar cada día."
  },
  "proyectos": {
    "h2-proyectos": "Proyectos",
    "parrafoProyectos": "MIS PROYECTOS"
  },
  "contacto": {
    "title_contacto": "Contacta conmigo",
    "boton-enviar" : "enviar"
  },
  "scroll-up":{
    "UP": "Hacia arriba"
  }
};
const dataEN=
{
  "navbar": {
    "sobre-mi": "About Me",
    "proyectos" : "Projects",
    "contacto": "Contact"
  },
  "home": {
    "title-home": "I am Pedro Gervasoni",
    "text-home": "Future full stack developer",
    "span-home": "I invite you to meet me...",
    "boton-resume": "Resume",
    "boton-contacto": "Contact me"
  },
  "sobre-mi":{
    "sobreMi": "About Me",
    "title-sobreMi": "Web developer in process",
    "text_sobreMi": "My knowledge is as follows, but I am constantly learning to improve myself every day."
  },
  "proyectos": {
    "h2-proyectos": "Projects",
    "parrafoProyectos": "MY PROJECTS"
  },
  "contacto": {
    "title_contacto": "CONTACT WITH ME",
    "boton-enviar" : "Send"
  },
  "scroll-up":{
    "UP": "scroll-up"
  }
}




var check=document.querySelector(".check");
check.addEventListener('click',idioma);

if("language" in localStorage){

    if(JSON.parse(localStorage.getItem("language"))){
        check.checked=true;
        changeLanguageES();
    }
    else{
      console.log("ingles");
      changeLanguageEN();
    }
}


function idioma(){
    localStorage.setItem("language",check.checked);
    if(check.checked){
      console.log("español");
      changeLanguageES();
    }
    else{
      console.log("ingles");
      changeLanguageEN();
    }
}

function changeLanguageES(){
    /* navbar */
    const sobreMi=document.getElementById("nav-sobre-mi");
    sobreMi.innerHTML=dataES.navbar["sobre-mi"];

    const proyectos=document.getElementById("nav-proyectos");
    proyectos.innerHTML=dataES.navbar["proyectos"];

    const contacto=document.getElementById("nav-contacto");
    contacto.innerHTML=dataES.navbar["contacto"];

    /* home */

    const titleHome=document.getElementById("title-home");
    titleHome.innerHTML=dataES.home["title-home"];

    const textHome=document.getElementById("text-home");
    textHome.innerHTML=dataES.home["text-home"];

    const spanHome=document.getElementById("span-home");
    spanHome.innerHTML=dataES.home["span-home"];

    const botonResume=document.getElementById("boton-resume");
    botonResume.innerHTML=dataES.home["boton-resume"];

    const botonContacto=document.getElementById("boton-contacto");
    botonContacto.innerHTML=dataES.home["boton-contacto"];
    

}

function changeLanguageEN(){
  /* navbar */
  const sobreMi=document.getElementById("nav-sobre-mi");
  sobreMi.innerHTML=dataEN.navbar["sobre-mi"];

  const proyectos=document.getElementById("nav-proyectos");
  proyectos.innerHTML=dataEN.navbar["proyectos"];

  const contacto=document.getElementById("nav-contacto");
  contacto.innerHTML=dataEN.navbar["contacto"];

  /* home */

  const titleHome=document.getElementById("title-home");
  titleHome.innerHTML=dataEN.home["title-home"];

  const textHome=document.getElementById("text-home");
  textHome.innerHTML=dataEN.home["text-home"];

  const spanHome=document.getElementById("span-home");
  spanHome.innerHTML=dataEN.home["span-home"];

  const botonResume=document.getElementById("boton-resume");
  botonResume.innerHTML=dataEN.home["boton-resume"];

  const botonContacto=document.getElementById("boton-contacto");
  botonContacto.innerHTML=dataEN.home["boton-contacto"];
  

}
