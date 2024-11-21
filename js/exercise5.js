let monto = prompt("Convierte tus euros a dólares");

monto = parseFloat(monto);

if (monto) {
        let resultado = monto * 1.10;
        alert(`${monto} euros equivalen a ${resultado} dolares`)
    }
else {
    alert("Introduce un numero valido mayor que 0");
}
