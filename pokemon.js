let ataquesJugador
let ataquesEnemigo

let trienfos = 5, derrotas = 5

let botonSeleccionarMascota = document.getElementById("seleccion-mascota")
let charizard = document.getElementById("charizard")
let squirtle = document.getElementById("squirtle")
let Cubone = document.getElementById("Cubone")
let ocultarContenedor2 = document.getElementById("contenedor-N2")
ocultarContenedor2.style.display = "none"

let ocultarContenedorN1 = document.getElementById("contenedor-N1")

let botonFuego = document.getElementById("boton-fuego")
let botonAgua = document.getElementById("boton-agua")
let botonTierra = document.getElementById("boton-tierra")

let aleatorio

let pAtaques = document.getElementById("ataques-jugador")
let ataquesContrincante = document.getElementById("ataques-contrincante")

let resultadoGanador = document.getElementById("resultado-ganador")
let resultadoAtaques = document.getElementById("resultado-ataques")
resultadoAtaques.style.display = "none";

let triunfo = document.getElementById("triunfos")
let derrota = document.getElementById("derrotas")

function inicio(){
    botonSeleccionarMascota.addEventListener("click", seleccionarMascotaJugador)

    botonFuego.addEventListener("click",botonDeFuego)

    botonAgua.addEventListener("click",botonDeAgua)

    botonTierra.addEventListener("click",botonDeTierra)
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

function botonDeFuego(){seleccionDeBotonContrincante()
    ataquesJugador = "Fuego"
    seleccionDeBotonContrincante()
}

function botonDeAgua(){
    ataquesJugador = "Agua"
    seleccionDeBotonContrincante()
}

function botonDeTierra(){
    ataquesJugador = "Tierra"
    seleccionDeBotonContrincante()
}

function seleccionDeBotonContrincante(){
    aleatorio = numeroAleatorio(3,1)

    if(aleatorio == 1){
        ataquesEnemigo = "Fuego"
    }else if (aleatorio == 2){
        ataquesEnemigo = "Agua"
    }else{
        ataquesEnemigo = "Tierra"
    }
    combate()
}

function combate(){
    resultadoAtaques.style.display = "flex"
    if (ataquesJugador == ataquesEnemigo){
        resultadoGanador.innerHTML = "Empate"

    }else if (ataquesJugador == "Fuego" && ataquesEnemigo == "Tierra"){
        resultadoGanador.innerHTML = "Triunfo"
        trienfos = trienfos-1
        triunfo.innerHTML = trienfos
    }else if (ataquesJugador == "Agua" && ataquesEnemigo == "Fuego"){
        resultadoGanador.innerHTML = "Triunfo"
        trienfos = trienfos-1
        triunfo.innerHTML = trienfos
    }else if (ataquesJugador == "Tierra" && ataquesEnemigo == "Agua"){
        resultadoGanador.innerHTML = "Triunfo"
        trienfos = trienfos-1
        triunfo.innerHTML = trienfos
    }else{
        derrota.innerHTML = derrotas
        derrotas = derrotas-1
    }
}

function ganador(){
    if (trienfos == 0){
        resultadoGanador.innerHTML = "Ganaste!! 😎"
    }else if (derrotas == 0){
        resultadoGanador.innerHTML = "Perdiste!! 😐"
    }
    
}



window.addEventListener("load", inicio)