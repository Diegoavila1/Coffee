


function validarFormulario(valorNombre,valorApellido,valorEmail,event){
    event.preventDefault();
    var form = document.getElementById('formulario');

    if (validarTodo(valorNombre,valorApellido,valorEmail)) {
      form.submit();
    }

};


function validarTodo(valorNombre,valorApellido,valorEmail){

    var bandera = true;

    if(!validarTexto('nombre')){
        document.getElementById(valorNombre).style.visibility = 'visible';
        bandera = false;
    }

    if(!validarTexto('apellido')){
        document.getElementById(valorApellido).style.visibility = 'visible';  
        bandera = false;
    }

    if(!validarEmail('email')){
        document.getElementById(valorEmail).style.visibility = 'visible';  
        bandera = false;
    }

    return bandera;
}

    

function validarTexto(idText){

    var elemento = document.getElementById(idText);
    var valor = elemento.value;
    var caracteresPermitidos = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (caracteresPermitidos.test(valor)) {
        return true;
    } else {
        return false;
    }
}

function validarEmail(idEmail){
    var elemento = document.getElementById(idEmail);
    var valor = elemento.value;
    var caracteresPermitidos = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (caracteresPermitidos.test(valor)){
        return true;
    } else {
        return false;
    }
}

function validarTextarea(idTextarea){

}

  
