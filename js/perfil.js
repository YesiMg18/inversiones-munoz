const agregarIngreso = document.getElementById('ingreso');
const aniosInversion = document.getElementById('anios');
const btnCalcular = document.getElementById('calcular');
const btnDepositar = document.getElementById('depositar');
const mostrarSaldo = document.getElementById('saldo');
const btnSaldoActual = document.getElementById('saldoActual');

let saldoInversion = 1000;
/* Función -  Agregar Ingreso*/

btnDepositar.onclick = (e) =>{
    e.preventDefault();
    let ingreso = agregarIngreso.value;
    let deposito = saldoInversion + ingreso;
    resultadoDeposito.innerHTML = `<a>Añadiste $ ${deposito} pesos a tu cuenta de inversiones</p>`

}


/*Función - calcular Inversion*/

btnCalcular.onclick = (e) => {
		e.preventDefault();
		let ingreso = agregarIngreso.value;
		let anios = aniosInversion.value;
		let resultadoCalcular =(ingreso * 12 * anios * 1.20);
		simulador.innerHTML = `<p>Tu saldo en ${anios} años ,será de: $${resultadoCalcular} pesos. </p>`
}

/*Función - saldo*/


btnSaldoActual.onclick = () => {
    let mostrarSaldo = saldoInversion;
    mostrarSaldo.innerHTML = `<p>Tu sueldo actual es de: ${saldoInversion}</p>`
}
