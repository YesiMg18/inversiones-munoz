/*Función - Iniciar sesión*/

const users = [{
	name:'Julian',
	mail:'julian1998@email.com',
    pass:'123julian'
},{
    name:'Maria',
	mail:'maria_12@email.com',
    pass:'Mar12003'
},{
    name:'Fernanda',
	mail:'fern_hern25@email.com',
    pass:'Fer-2335!'
}
]

const inputName = document.getElementById ('name');
const inputMail = document.getElementById ('email');
const inputPass = document.getElementById ('password');
const btnLogin = document.getElementById ('login');


function validarUsers(usersDB,mail,pass){
    let encontrado = usersDB.find ((usersDB)=> usersDB.mail == mail);
    console.log (encontrado);
    if(typeof encontrado ==='undefined'){
        return false;
    }else{
        if(encontrado.pass!==pass){
            return false;
        }else{
            return encontrado;
        } 
    }
}

btnLogin.addEventListener('click' ,(e) =>{
    e.preventDefault();
    if(!inputMail.value || !inputPass.value){
        alert('Todos los campos son requeridos');
    }else{
        let data = validarUsers(users, inputMail.value,inputPass.value);
        if(!data){
            alert(`Usuario y/o contraseña incorrectos`);
        }else{
            alert(`Acceso exitoso`);
    }
}});