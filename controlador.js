let boton=document.getElementById("boton");


let foto1=document.getElementById("foto1");
let audio1=document.getElementById("audio1");
let titulo1=document.getElementById("titulo1");

let foto2=document.getElementById("foto2");
let audio2=document.getElementById("audio2");
let titulo2=document.getElementById("titulo2");

let foto3=document.getElementById("foto3");
let audio3=document.getElementById("audio3");
let titulo3=document.getElementById("titulo3");


boton.addEventListener("click",perroguardian);

function perroguardian(){
   titulo1.textContent="hoy es mañama"
   foto1.src="img/c4.jpg"
   audio1.src="audio/Camila  Todo Cambio Official Video.mp3"

   titulo2.textContent="mañana es hoy"
   foto2.src="img/c3.jpg"
   audio2.src="audio/Camila  Mientes Video.mp3"

   titulo3.textContent="hoy es ahora"
   foto3.src="img/c2.jpg"
   audio3.src="audio/Coleccionista De Canciones .mp3"




}


