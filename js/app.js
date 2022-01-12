/*Variables*/
var sig = document.getElementById('sig');
var total = document.getElementById('total');
var qaSet = document.querySelectorAll('.qa_set');
var anim1 = document.getElementById('anim1');
var anim2 = document.getElementById('anim2');

var count = 0;

let correctas = [2,3,1,2,1,2];

let opselec = [];

let cantcorrecta = 0;

/*Funcion para boton de subir el scroll*/
function arriba(pantalla){
    window.addEventListener('scroll', () =>{
        var scroll = document.documentElement.scrollTop;
        var btnarriba = document.getElementById('btnarriba');

        if(scroll > pantalla){
            btnarriba.style.right = 20 + "px";
        }else{
            btnarriba.style.right = -100 + "px";
        }
    })
}

arriba(100);

/*Funcion para capturar las respuestas y colocar color a la casilla seleccionada*/
function respuesta(numpre, selec){
    opselec[numpre] = selec.value;

    id ="p" + numpre;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    selec.parentNode.style.backgroundColor = "#85C1E9";
}


sig.addEventListener('click', function(){
    proximo()
})

/*Funcion para colocar 3 preguntas por pagina*/
function proximo(){
    count += 1;
    for(var i = 0; i <qaSet.length; i++){
        qaSet[i].className= 'qa_set';
    }
    qaSet[count].className= 'qa_set active';
    if(count == 1){
        sig.innerHTML = "Finalizar"
    }
    if(count == 2){
        sig.style.display = 'none';
    }
}

/*Funcion para calcular la puntacion del cuestionario*/
function puntuacion(){
    cantcorrecta = 0;
    for(i=0; i < correctas.length; i++){
        if(correctas[i] == opselec[i]){
            cantcorrecta = cantcorrecta + 5;
        }
    }
    total.innerHTML = cantcorrecta;

    if (cantcorrecta <= 20){
        anim1.style.display = 'flex';
        anim2.style.display = 'none';
    }else{
        anim2.style.display = 'flex';
        anim1.style.display = 'none';
    }
}
