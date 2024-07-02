

//onsubmit 
function validaFormulario(valorNombre,valorApellido,valorEmail,event){
    event.preventDefault();
    var form = document.getElementById('formulario');

    if (validaTodosLosCampos(valorNombre,valorApellido,valorEmail)) {
      form.submit();
    }

};


function validaTodosLosCampos(valorNombre,valorApellido,valorEmail){

    var bandera = true;

    if(!validaTexto('nombre')){
        document.getElementById(valorNombre).style.visibility = 'visible';
        bandera = false;
    }else{
        document.getElementById(valorNombre).style.visibility = 'hidden';
    }

    if(!validaTexto('apellido')){
        document.getElementById(valorApellido).style.visibility = 'visible';  
        bandera = false;
    }else{
        document.getElementById(valorApellido).style.visibility = 'hidden';
    }

    if(!validaEmail('email')){
        document.getElementById(valorEmail).style.visibility = 'visible';  
        bandera = false;
    }else{
        document.getElementById(valorEmail).style.visibility = 'hidden';
    }

    return bandera;
}

    

function validaTexto(idText){

    var elemento = document.getElementById(idText);
    var valor = elemento.value;

    //carecteres regulares
    var caracteresPermitidos = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (caracteresPermitidos.test(valor) && valor != "") {
        return true;
    } else {
        return false;
    }
}

function validaEmail(idEmail){
    var elemento = document.getElementById(idEmail);
    var valor = elemento.value;

    //carecteres regulares
    var caracteresPermitidos = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (caracteresPermitidos.test(valor != "")){
        return true;
    } else {
        return false;
    }
}



  
