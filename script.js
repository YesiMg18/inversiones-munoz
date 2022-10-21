
let ingresar = false;

function registro(){
	
	for (let i=1; i>=0; i++){
		let userName = prompt('Ingresa tu nombre');
		let userEmail = prompt('Ingresa tu email');
		if ( userName != userEmail){
			alert('Bienvenido/a' + userName + 'a tu simulador de inversiones.');
			ingresar = true;
			break;
		}
		else {
			alert('Acceso denegado, es necesario llenar la información.');
		}

	}
return ingresar;
}

if(registro()){
	let saldoInversion = 1000;
	let opcionMenu =prompt ('Elige una opción: \n1 - Agregar invesión. \n2 -Calcula tu inversion. \n3 -Saldo Actual de mi Inversion. \n3 - Presiona X para Finalizar.');

	while(opcionMenu!='X' && opcionMenu!='x'){
		alert('Bienvenido/a')
		switch(opcionMenu){
			case '1':
				let agregarInversion = parseInt(prompt('Ingresa la cantidad que quieres agregar a tu invertir'));
				saldoInversion += agregarInversion;
				alert('Añadiste $' + agregarInversion + 'a tu cuenta de inversiones');
				break;
			case '2':
				let añosInversion = parseInt(prompt('Ingresa la cantidad de años que quieres calcular tu inversión '));
				let agregarInversionCalcular = parseInt(prompt('Ingresa la cantida de quieres inventir cada mes'));
				let resultadoCalcular = (agregarInversionCalcular * añosInversion * 12 * 1.20);
				alert('Tu saldo en' + añosInversion + 'sería de $' + resultadoCalcular);
				break;
			case '3':
				alert('El saldo de tu inversión es $' + saldoInversion);
				break;
			default:
				alert('Opción invalida')
				break;

		}
		opcionMenu = prompt('Elige una opción: \n1 - Agregar invesión. \n2 -Calcula tu inversion. \n3 -Saldo Actual de mi Inversion. \n3 - Presiona X para Finalizar.');
	}
}
alert('Regresa Pronto');
