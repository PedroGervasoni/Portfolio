const data=
{
  "navbar": {
    "sobre-mi": "Sobre Mi",
    "proyectos" : "Proyectos",
    "contacto": "Contacto"
  },
  "home": {
    "title-home": "Yo soy Pedro Gervasoni",
    "text-home": "Futuro full stack desarrollador",
    "span-home": "Te invito a conocerme...",
    "boton-resume": "Curriculum",
    "boton-contacto": "Contacto"
  },
  "sobre-mi":{
    "sobreMi": "Sobre Mi",
    "title-sobreMi": "Web developer in process",
    "text_sobreMi": "my name is Pedro, i am a constantly growing web developer"
  },
  "proyectos": {
    "h2-proyectos": "Proyectos",
    "parrafoProyectos": "coming soon..."
  },
  "contacto": {
    "title_contacto": "Contacta conmigo",
    "boton-enviar" : "enviar"
  },
  "scroll-up":{
    "UP": "Hacia arriba"
  }
}




var check=document.querySelector(".check");
check.addEventListener('click',idioma);

if("language" in localStorage){

    if(JSON.parse(localStorage.getItem("language"))){
        check.checked=true;
        changeLanguage();
    }
}


function idioma(){
    changeLanguage();
    console.log(check.checked);
    localStorage.setItem("language",check.checked);
}

function changeLanguage(){
    /* navbar */
    const sobreMi=document.getElementById("sobre-mi");
    sobreMi.innerHTML=data.navbar["sobre-mi"];

    const proyectos=document.getElementById("proyectos");
    proyectos.innerHTML=data.navbar["proyectos"];

    const contacto=document.getElementById("contacto");
    contacto.innerHTML=data.navbar["contacto"];

    /* home */

    const titleHome=document.getElementById("title-home");
    titleHome.innerHTML=data.home["title-home"];

    const textHome=document.getElementById("text-home");
    textHome.innerHTML=data.home["text-home"];

    const spanHome=document.getElementById("span-home");
    spanHome.innerHTML=data.home["span-home"];

    const botonResume=document.getElementById("boton-resume");
    botonResume.innerHTML=data.home["boton-resume"];

    const botonContacto=document.getElementById("boton-contacto");
    botonContacto.innerHTML=data.home["boton-contacto"];
    

}
