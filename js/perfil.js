const agregarIngreso = document.getElementById('ingreso');
const aniosInversion = document.getElementById('anios');
const ingresoCalculo = document.getElementById('ingresoCalculadora');
const btnCalcular = document.getElementById('calcular');
const btnDepositar = document.getElementById('depositar');
const mostrarSaldo = document.getElementById('saldoActual');
const mostrarFecha = document.getElementById('fecha');

let saldoInversion = 1000;

/* Función -  Agregar Ingreso*/

btnDepositar.onclick = (e) =>{
    e.preventDefault();
    saldoInversion += parseInt(agregarIngreso.value)
    resultadoDeposito.innerHTML = `<p>Ahora tienes $ ${saldoInversion} pesos a tu cuenta de inversiones</p>`
}


/*Función - calcular Inversion*/

btnCalcular.onclick = (e) => {
		e.preventDefault();
		let ingresoCalculadora = parseInt(ingresoCalculo.value);
		let anios = parseInt(aniosInversion.value);
        calcularInversion(anios, ingresoCalculadora)
}

calcularInversion = (anios, ingresoCalculadora) => {
    let resultadoCalcular = (ingresoCalculadora * 12 * anios * 2.50);
    simulador.innerHTML = `<p>Tu inversión en ${anios} años ,será de: $${resultadoCalcular} pesos. </p>`
}

/*Función - saldo*/


mostrarSaldoActual = () => {
    mostrarSaldo.innerHTML =`<p> Tu saldo actual es de:  $ ${saldoInversion} </p>`
    let dt = luxon.DateTime.now();
    let DateTime = dt.toFormat('dd/MM/yyyy hh:mm');
    mostrarFecha.innerHTML = `<p> Fecha actual: ${DateTime} hrs </p>`
}

 
recuperarNombreDelUsuario = () =>{
    let usuarioLS = localStorage.getItem("user");
    if(usuarioLS === undefined){
        window.location = "./iniciar_sesion.html"
    }

    if(usuarioLS === null){
        window.location = "./iniciar_sesion.html"
    }

    usuario = JSON.parse(usuarioLS)
    document.getElementById("name").innerHTML = usuario.name;
}

recuperarNombreDelUsuario();

