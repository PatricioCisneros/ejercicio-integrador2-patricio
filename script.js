function mostrarCotizacion(){

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var marca = document.getElementById("marca").value;

    //FINANCIAMIENTO
    var tipoFinanciamiento = document.querySelector("input[name='financiamiento']:checked").value

    //EXTRAS
    var extrasSeleccionados = [];
    document.querySelectorAll("input[type='checkbox']:checked").forEach(function (c) {
        extrasSeleccionados.push(c.value);
    });

    //MOSTRAR EL RESULTADO
    document.getElementById("resultado").innerHTML = 
    "<h3>Cotizacion generada:</h3>" + 
    "<p><strong>Nombre:</strong> " + nombre + "</p>" + 
    "<p><strong>Correo:</strong> " + correo + "</p>" +  
    "<p><strong>Financiamiento:</strong> " + tipoFinanciamiento + "</p>" + 
    "<p><strong>Marca seleccionada:</strong> " + marca + "</p>" +
    "<p><strong>Extras:</strong> " + (extrasSeleccionados.join(', ') || 'Ninguno') + "</p>"; 
}

