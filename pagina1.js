function iniciar() {

    var boton = document.getElementById('obtener');

    boton.addEventListener('click', obtener, false);

    
  const txtEmail =document.getElementById( 'txtEmail');
  const txtPassword =document.getElementById('txtPassword');
  const btnLogin =document.getElementById('btnLogin');
  const  btnSignUp=document.getElementById('btnSignUp');
  const  contrasena=document.getElementById('contrasena');
  
  
 
 

// evento del login
btnLogin.addEventListener('click', e => {



    /// obtener email y pass
    const email=txtEmail.value;
    const pass =txtPassword.value;
    const auth=firebase.auth();


    // sing in

    const promise =auth.signInWithEmailAndPassword(email, pass);
    promise.then(e => {
        var user = e.user;
        if (user.emailVerified) {
            window.location.assign("file:///C:/Users/dlorenzo/Desktop/proyecto%20final/html/admin.html");
        }
    });
    promise.catch(e => console.log(e.message));

});

}





//// registrase


// evento del login
btnSignUp.addEventListener('click', e => {



    /// obtener email y pass
    const email=txtEmail.value;
    const pass =txtPassword.value;
    const auth=firebase.auth();


    // sing in

    const promise =auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});




//mapa 

function obtener() { navigator.geolocation.getCurrentPosition(mostrar, gestionarErrores); }



function mostrar(posicion) {

    var ubicacion = document.getElementById('localizacion');

    var datos = '';

    datos += 'Latitud: ' + posicion.coords.latitude + '<br>';

    datos += 'Longitud: ' + posicion.coords.longitude + '<br>';

    datos += 'Exactitud: ' + posicion.coords.accuracy + ' metros.<br>';

    datos += '<span id="datosLocation" style="display: hidden;">' + posicion.coords.latitude + ' ' + posicion.coords.longitude + ' ' + posicion.coords.accuracy + '</span>';

    ubicacion.innerHTML = datos;

}



function gestionarErrores(error) {

    alert('Error: ' + error.code + ' ' + error.message + '\n\nPor favor compruebe que está conectado ' +
        'a internet y habilite la opción permitir compartir ubicación física');

}



window.addEventListener('load', iniciar, false);




// Initialize Firebase
var config = {
    apiKey: "AIzaSyC8ukNQjLnKL2-FmI8U-2hP-X6_x_kMk_0",
    authDomain: "proyecto-final-6a3e8.firebaseapp.com",
    databaseURL: "https://proyecto-final-6a3e8.firebaseio.com",
    projectId: "proyecto-final-6a3e8",
    storageBucket: "proyecto-final-6a3e8.appspot.com",
    messagingSenderId: "1050399722895"
};

firebase.initializeApp(config);

firebase.auth().signInAnonymously().catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});

document.querySelector("#guardar_formulario").addEventListener('click', function (e) {
    var database = firebase.database();
    var tipo_problema = document.querySelector(".problema").value;
    var fecha = document.querySelector(".fecha").value;
    var localizacion = document.querySelector("#datosLocation").innerHTML;
    var comentario = document.querySelector(".Comentario").value;
    var archivo = document.querySelector(".archivo").value;
    var estado = document.querySelector(".estado").value;


    var userId = firebase.auth().currentUser.uid;
    database.ref('formulario/' + userId + "-" + new Date()).set({
        id: userId,
        tipo_problema: tipo_problema,
        fecha: fecha,
        localizacion: localizacion,
        comentario: (comentario.length > 0) ? comentario : null,
        archivo: archivo,
        estado: estado
    });


});



var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}


var recoverButton = document.querySelector("contrasena").addEventListener("click", function() {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
});

// //cambiar contrasena

   

//   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });










