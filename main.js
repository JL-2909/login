

function login(){
    let user, password
    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if(user == "prueba" && password == "1234"){
        alert("Iniciciaste Sesion!")
    }else{
        alert("Datos Incorrecto")
    }
}