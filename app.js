//seleccinoamos algunos tags del HTML para cambiar su contenido de forma dinamica
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(typeof(numeroDeUsuario));
    console.log("Click desde el boton Intentar");
    console.log("Numero de usuario: " + numeroDeUsuario);
    console.log("Numero secreto: " + numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario === numeroSecreto);//triple igual returna true si los tokens comparados son del mismo valor y tipo

    console.log("Intentos: " + intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.querySelector("#reiniciar").removeAttribute("disabled");
    }
    else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El numero secreto es menor");
        }
        else{
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
        intentos++;
        limpiarTextField();
    }
    return;
}

function limpiarTextField(){
    let valorTF = document.querySelector("#valorUsuario");
    valorTF.value = "";
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*10)+1;//genera int

    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }
    else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function mensajesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto!");
    asignarTextoElemento("p", "Escribe un numero del 1 al 10");
}

function reiniciarJuego(){
    //limpiarTextField
    limpiarTextField();
    //indicar mensaje de inicio
    mensajesIniciales(); 
    //generar numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //desahbilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", true);
    //inicializar numero de intentos
    intentos = 1; 
}

mensajesIniciales();

//let cuadrado = x => x * x;//arrow function, definicion concisa de funciones cortas