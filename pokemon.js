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

let pAtaques = document.getElementById("ataques")

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

function botonDeFuego(){
    pAtaques.innerHTML = "Ataque de fuego"
    seleccionDeBotonContrincante()
}

function botonDeAgua(){
    pAtaques.innerHTML = "Ataque de Agua"
    seleccionDeBotonContrincante()
}

function botonDeTierra(){
    pAtaques.innerHTML = "Ataque de Tierra"
    seleccionDeBotonContrincante()
}

function seleccionDeBotonContrincante(){
    aleatorio = numeroAleatorio(3,1)

    let ataquesContrincante = document.getElementById("ataques-contrincante")

    if(aleatorio == 1){
        ataquesContrincante.innerHTML = "Fuego"
    }else if (aleatorio == 2){
        ataquesContrincante.innerHTML = "Agua"
    }else{
        ataquesContrincante.innerHTML = "Tierra"
    }
}

function combate(){

}



window.addEventListener("load", inicio)