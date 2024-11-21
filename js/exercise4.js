let bienvenida = prompt ("bienvenido a PIEDRA PAPEL O TIJERA")
function juego() {
const modos = ("Piedra", "Papel", "Tijera");

let jugador = prompt("¿Piedra, Papel o Tijera?").trim().toLowerCase();

    if (!("piedra", "papel", "tijera").includes(jugador)) {
        alert("Por favor ingresa Piedra, Papel o Tijera");
        return;
}

jugador = jugador.charAt(0).toUpperCase() + jugador.slice(1);

const PC = modos(Math.floor(Math.random() * modos.length));

console.log("Escogiste ${eleccionUsuario}");
console.log("Yo elegí ${eleccionPC}");

if (jugador === PC) {
        console.log("Empatamos chavo");
    } else if (
        (jugador === "Piedra" && PC === "Tijera") ||
        (jugador === "Papel" && PC === "Piedra") ||
        (jugador === "Tijera" && PC === "Papel")
    ) {
        console.log("Ganaste chavo");
    } else {
        console.log("Perdiste chavo");
 }
}

juego();