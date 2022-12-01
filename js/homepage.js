

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


/*Función - Simulador de Homepage*/

const agregarIngreso = document.getElementById('ingreso');
const aniosInversion = document.getElementById('anios');
const btnCalcular = document.getElementById('calcular');

btnCalcular.onclick = (e) => {
		e.preventDefault();
		let ingreso = parseInt(agregarIngreso.value);
		let anios = parseInt(aniosInversion.value);
		let resultadoCalcular =(ingreso * 12 * anios * 6.50);
		resultado.innerHTML = `<p>Tu saldo en ${anios} años será de : $ ${resultadoCalcular} pesos.</p>`
}





