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

    localStorage.setItem("user" ,JSON.stringify(encontrado))
    
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
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          });
    }else{
        let data = validarUsers(users, inputMail.value,inputPass.value);
        if(!data){
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              });
        }else{
            window.location = "./dashboard.html"
            
    }
}});
