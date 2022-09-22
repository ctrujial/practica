let ataquesJugador
let ataquesEnemigo

let trienfosJugador = 0
let derrotasJugador = 0

let botonSeleccionarMascota = document.getElementById("seleccion-mascota");
let charizard = document.getElementById("charizard");
let squirtle = document.getElementById("squirtle");
let Cubone = document.getElementById("Cubone");
let ocultarContenedor2 = document.getElementById("contenedor-N2");
ocultarContenedor2.style.display = "none"

let ocultarContenedorN1 = document.getElementById("contenedor-N1");

let botonFuego = document.getElementById("boton-fuego");
let botonAgua = document.getElementById("boton-agua");
let botonTierra = document.getElementById("boton-tierra");

let aleatorio

let pAtaquesJugador = document.getElementById("ataques-jugador");
let ataquesContrincante = document.getElementById("ataques-contrincante");

let resultadoGanador = document.getElementById("resultado-ganador");

let rTriunfos = document.getElementById("r-triunfos");
let rDerrotas = document.getElementById("r-derrotas");

let contenedorBotones = document.getElementById("botones-combate-id")

let contenedorN3 = document.getElementById("contenedor-N3-id")
contenedorN3.style.display = "none"

let botonReiniciar = document.getElementById("boton-reiniciar")
botonReiniciar.style.display = "none"

function inicio(){
    botonSeleccionarMascota.addEventListener("click", seleccionarMascotaJugador)

    botonFuego.addEventListener("click",botonDeFuego)

    botonAgua.addEventListener("click",botonDeAgua)

    botonTierra.addEventListener("click",botonDeTierra)

    botonReiniciar.addEventListener("click",reiniciar)
}

function seleccionarMascotaJugador(){

    ocultarContenedorN1.style.display = "none"

    let spanNombreMascotaJugador = document.getElementById("nombre-mascota-jugador")
    if (charizard.checked){
        spanNombreMascotaJugador.innerHTML = "Charizard"
        ocultarContenedor2.style.display = "flex"
    }else if (squirtle.checked){
        spanNombreMascotaJugador.innerHTML = "Squirtle"
        ocultarContenedor2.style.display = "flex"
    }else if (Cubone.checked) {
        spanNombreMascotaJugador.innerHTML = "Cubone"
        ocultarContenedor2.style.display = "flex"
    }else{
        alert("Por favor selecciona una mascota")
    }
    seleccionarMascotaContrincante()
    
}

function numeroAleatorio(max, min){
    return Math.floor(Math.random()*(max - min +1)+ min)
}

function seleccionarMascotaContrincante(){
    aleatorio = numeroAleatorio(3,1)
    
    spanNombreMascotaContrincante = document.getElementById("nombre-mascota-contrincante")

    if (aleatorio == 1){
        spanNombreMascotaContrincante.innerHTML = "Charizard"
    }else if (aleatorio == 2){
        spanNombreMascotaContrincante.innerHTML = "Squirtle"
    }else{
        spanNombreMascotaContrincante.innerHTML = "Cubone"
    }
}

function botonDeFuego(){
    ataquesJugador = "Fuego"
    seleccionDeBotonContrincante()
    pAtaquesJugador.innerHTML=ataquesJugador
}

function botonDeAgua(){
    ataquesJugador = "Agua"
    seleccionDeBotonContrincante()
    pAtaquesJugador.innerHTML=ataquesJugador
}

function botonDeTierra(){
    ataquesJugador = "Tierra"
    seleccionDeBotonContrincante()
    pAtaquesJugador.innerHTML=ataquesJugador
}

function seleccionDeBotonContrincante(){
    aleatorio = numeroAleatorio(3,1)

    if(aleatorio == 1){
        ataquesEnemigo = "Fuego"
        ataquesContrincante.innerHTML = ataquesEnemigo
    }else if (aleatorio == 2){
        ataquesEnemigo = "Agua"
        ataquesContrincante.innerHTML = ataquesEnemigo
    }else{
        ataquesEnemigo = "Tierra"
        ataquesContrincante.innerHTML = ataquesEnemigo
    }

    combate()
}

function combate(){
    contenedorN3.style.display = "flex"
    
    if (ataquesJugador == ataquesEnemigo){
        resultadoGanador.innerHTML = "Empate"

    }else if (ataquesJugador == "Fuego" && ataquesEnemigo == "Tierra"){
        resultadoGanador.innerHTML = "Triunfo"
        trienfosJugador++
        rTriunfos.innerHTML = trienfosJugador
        

    }else if (ataquesJugador == "Tierra" && ataquesEnemigo == "Agua"){
        resultadoGanador.innerHTML = "Triunfo"
        trienfosJugador++
        rTriunfos.innerHTML = trienfosJugador

    }else if (ataquesJugador == "Agua" && ataquesEnemigo == "Fuego"){
        resultadoGanador.innerHTML = "Triunfo"
        trienfosJugador++
        rTriunfos.innerHTML = trienfosJugador
    }
    else{
        resultadoGanador.innerHTML = "Derrota"
        derrotasJugador++
        rDerrotas.innerHTML = derrotasJugador
        
    }
    ganador()
}

function ganador(){
    if(trienfosJugador == 5){
        contenedorBotones.style.display = "none"
        resultadoGanador.innerHTML = "Ganaste 😎"
        botonReiniciar.style.display = "flex"
    }
    if(derrotasJugador == 5){
        contenedorBotones.style.display = "none"
        resultadoGanador.innerHTML = "Perdiste 🙄"
        botonReiniciar.style.display = "flex"
    }
}

function reiniciar(){
    window.location.reload()
}



window.addEventListener("load", inicio)