
let ingresar = false;

const options =[
	{
		id: 0,
		icon: 'assets/img/icon-1.svg',
		title: 'Sin comisiones',
		description: 'No pagas ningún tipo de comisión, penalizaciones ni costos por transacciones'
	  },
	  {
		id: 1,
		icon: 'assets/img/icon-2.svg',
		title: 'Sin intermediarios',
		description: 'No pagas ningún tipo de comisión, penalizaciones ni costos por transacciones'
	  },
	  {
		id: 2,
		icon: 'assets/img/icon-3.svg',
		title: 'Disposición',
		description: 'Disponibilidad de tus recursos cuando lo decidas y sin penalizaciones'
	  },
	  {
		id: 3,
		icon: 'assets/img/icon-4.svg',
		title: 'Inversion segura',
		description: 'Abres y operas tu cuenta en solo minutos, desde internet'
	  }
]

function mostrarBeneficios () {
	const elem = document.getElementById('benefitsOption');
	let children ='';
	for (let i = 0; i < options.length; i++) {
		children += `<div>
		<img src="${options[i].icon}" alt="">
		<h4>${options[i].title}</h4>
		<p>${options[i].description}</p>
	</div>`
	};
	elem.innerHTML = children
}

mostrarBeneficios();

function registro(){
	
	while (ingresar == false){
		let userName = prompt('Ingresa tu nombre');
		let userEmail = prompt('Ingresa tu email');
		if ( userName.length >=3 && userEmail.includes("@")){
			alert('Bienvenido/a'+ userName + 'a tu simulador de inversiones.');
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
		switch(opcionMenu){
			case '1':
				let agregarInversion = parseInt(prompt('Ingresa la cantidad que quieres agregar a tu invertir'));
				saldoInversion += agregarInversion;
				alert('Añadiste $' + agregarInversion + 'a tu cuenta de inversiones');
				break;
			case '2':
				let añosInversion = parseInt(prompt('Ingresa la cantidad de años que quieres calcular tu inversión '));
				let agregarInversionCalcular = parseInt(prompt('Ingresa la cantida de quieres inventir cada mes'));
				let resultadoCalcular = (agregarInversionCalcular * 12 * añosInversion  * 1.20);
				alert('Tu saldo en' + añosInversion + 'años , sería de $' + resultadoCalcular);
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



