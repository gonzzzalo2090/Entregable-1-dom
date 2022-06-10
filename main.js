"use strict";

let dni;
let nombre;
let telefono;
let monto;
let cuotas;
let revisarSolicitud;
let montoTarjeta = 60000;
let valorSeguro = 800;

const agregarProductos = () => {
  do {
    class Producto {
      constructor(productosPrestamos, seguro) {
        this.productosPrestamos = productosPrestamos.toUpperCase();
        this.seguro = seguro.toUpperCase();
      }
    }

    const productos = [];

    let productosPrestamos;
    let tarjeta;
    let seguro;

    while (
      productosPrestamos !== "tarjeta de credito" ||
      productosPrestamos !== "prestamo personal"
    ) {
      productosPrestamos = prompt(
        "En que esta interesado? Tarjeta de credito, Prestamo personal",
        "ej: prestamo personal"
      );
      if (
        productosPrestamos == "tarjeta de credito" ||
        productosPrestamos == "prestamo personal"
      ) {
        alert("opcion elegida correctamente");
        break;
      } else {
        alert(
          "La opcion elegida no es posible, inténtelo de nuevo en minuscula"
        );
      }
    }

    if (productosPrestamos == "tarjeta de credito") {
      while (tarjeta !== "visa" || tarjeta !== "mastercard") {
        tarjeta = prompt("Quiere visa o mastercard", "ej: visa");
        if (tarjeta == "visa" || tarjeta == "mastercard") {
          alert("opcion elegida correctamente");
          break;
        } else {
          alert(
            "La opcion elegida no es posible, inténtelo de nuevo en minuscula"
          );
        }
      }
    }

    while (seguro !== "con seguro" || seguro !== "sin seguro") {
      seguro = prompt(
        "Con seguro para el hogar o sin seguro?",
        "ej: con seguro"
      );

      if (seguro == "con seguro" || seguro == "sin seguro") {
        alert("opcion elegida correctamente");
        break;
      } else {
        alert(
          "La opcion elegida no es posible, ingrese con seguro o sin seguro"
        );
      }
    }

    productos.push(new Producto(productosPrestamos, seguro));

    console.log(productos);
    

    /***************************SWITCH ELECCION PRODUCTOS *********************************/
    switch (productosPrestamos) {
      case "tarjeta de credito":
        dni = parseInt(prompt("Indique su dni porfavor"));
        nombre = prompt("Indique su nombre porfavor");
        telefono = parseInt(prompt("Indique su numero de telefono porfavor"));
        alert(
          nombre +
            "Tenes un limite pre aprobado de $ "+montoTarjeta+" en su tarjeta " +
            tarjeta
        );
        break;

      case "prestamo personal":
        dni = parseInt(prompt("Indique su dni porfavor"));
        nombre = prompt("Indique su nombre porfavor");
        telefono = parseInt(prompt("Indique su numero de telefono porfavor"));
        monto = parseInt(prompt(nombre +" tenes disponible de $10.000 hasta $100.000, cuanto dinero necesitas?"));
        tarjeta = "sin tarjeta"
        break;

      default:
        alert("La opcion ingresada no es correcta");
        break;
    }

    if (productosPrestamos == "prestamo personal") {
      while (monto < 10000 || monto > 100000) {
        if (monto >= 10000 && monto <= 100000) {
          alert("El monto solicitado fue aprobado");
          break;
        } else {
          alert(
            "El monto solicitado no es valido vuelva a intentarlo porfavor"
          );
          monto = parseInt(
            prompt(
              nombre +
                " tenes disponible de $10.000 hasta $100.000, cuanto dinero necesitas?",
              "ej: 10000"
            )
          );
        }
      }
      while (cuotas != 3 || cuotas != 6 || cuotas != 12) {
        cuotas = parseInt(
          prompt(
            nombre +
              " esos $" +
              monto +
              " podes devolverlos en 3, 6 o 12 cuotas. En cuantas cuotas queres devolverlo?",
            "ej: 3"
          )
        );

        if (cuotas == 3 || cuotas == 6 || cuotas == 12) {
          alert("Cuota elegida correctamente");
          break;
        } else {
          alert("La cuota elegida no es posible, inténtelo de nuevo");
        }
      }

      let resultado;

      switch (cuotas) {
        case 3:
          resultado = (monto * 10) / 100 + monto / cuotas;
          break;

        case 6:
          resultado = (monto * 20) / 100 + monto / cuotas;
          break;

        case 12:
          resultado = (monto * 30) / 100 + monto / cuotas;
          break;

        default:
          alert("Los datos ingresados no son validos");
          break;
      }

      const ResultadoTotal = () => {
        alert(
          nombre +
            " las cuotas que vas a pagar por el monto de $" +
            monto +
            " son de " +
            cuotas +
            " cuotas de : " +
            "$" +
            resultado
        );
      };
      ResultadoTotal();
    } else {
      alert("procesando datos");
    }



    switch (seguro) {
      case "con seguro":
        alert("el valor de su seguro para el hogar sera de $800");
        break;
      case "sin seguro":
        alert("no se registra ningun pedido de seguro para el hogar");
        break;
    }

    let confirmarSolicitud;

    if (productosPrestamos == "tarjeta de credito") {
      confirmarSolicitud = confirm("¿Confirma la solicitud de su tarjeta?");
      if (confirmarSolicitud) {
        alert(
          "Gracias por solicitarlo, en breve nos estaremos contactando con usted."
        );
      } else {
        alert("Puede volver a contactarnos cuando quiera, saludos!");
      }
    }

    if (monto >= 10000 && monto <= 100000) {
      confirmarSolicitud = confirm("¿Confirma la solicitud de su prestamo?");

      if (confirmarSolicitud) {
        alert(
          "Gracias por solicitarlo, en breve nos estaremos contactando con usted."
        );
      } else {
        alert("Puede volver a contactarnos cuando quiera, saludos!");
      }
    }

    revisarSolicitud = confirm("¿Quiere volver a revisar la solicitud?");
    
    /***************************DOM DE SELECCION DEL USUARIO**************************************/
    
    let contenedor = document.getElementById("divProductos");
    
    
    
        if(productosPrestamos == "tarjeta de credito"){
        contenedor.innerHTML = `
        <h1> "Estos son los productos seleccionados" </h1>
        <p>Productos: <li>${productosPrestamos} <br> <li>${seguro}</p>
        <h3>Tipo de Porductos</h3>
        <p>Monto en tarjeta: $${montoTarjeta} <br>
         Tipo de tarjeta: ${tarjeta}</p>

        <h3>Datos del Solicitante</h3>
        <p>Nombre: ${nombre} <br> Telefono: ${telefono} <br> Dni: ${dni} <br></p>`
    }else {
        contenedor.innerHTML = `<h1> "Estos son los productos seleccionados" </h1>
                            <p>Productos: <li>${productosPrestamos} <br> <li>${seguro}</p>
                            <h3>Datos del prestamo</h3>
                            <p>Monto del prestamo: $${monto} <br>
                            Cantidad de cuotas: ${cuotas} <br></p>
                            <h3>Datos del Solicitante</h3>
                            <p>Nombre: ${nombre} <br> Telefono: ${telefono} <br> Dni: ${dni} <br></p>`;
    }
    

    contenedor.style.background = "gray";
    contenedor.style.color = "white";
    contenedor.style.fontSize = "2rem";


  } while (revisarSolicitud);
};

agregarProductos();