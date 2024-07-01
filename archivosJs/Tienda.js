var mes = document.getElementById('mes');
var anio = document.getElementById('anio');
var nombre = document.getElementById('nombre-input');
var documento = document.getElementById('DNI');
var tarjeta = document.getElementById('numero-input');
var codigoSeguridad = document.getElementById('cvv');

function aparecerCarrito(){

    var carritoEscondido = document.getElementById('carrito-escondido');

    if(carritoEscondido.style.visibility === "hidden"){
        carritoEscondido.style.visibility = "visible";
    }else{
        carritoEscondido.style.visibility = "hidden";   
    }
}

function pagarCompra(){
  var modal = document.getElementById('modal')
  const totalPagar = document.querySelector('.total-pagar');

  if(modal.style.visibility === "hidden" && totalPagar.textContent == '$0'){
    modal.style.visibility = "hidden";
  }else{
    modal.style.visibility = "visible";
  }

}

function Cancelar(){
  var modal = document.getElementById('modal');
  
  modal.style.visibility = "hidden";
  anio.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
  anio.value = ""; 
  mes.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
  mes.value  = "";
  documento.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
  documento.value = "";
  tarjeta.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
  tarjeta.value = "";
  nombre.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
  nombre.value = "";
  codigoSeguridad.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
  codigoSeguridad.value = "";
}



function aparecerMenu(){
  var arrayMenu = document.getElementsByClassName('opciones');

  vueltas = 0;
  for(var i=0;i < arrayMenu.length;i++){
    if(arrayMenu[i].style.visibility === "visible"){
      vueltas++;
    }
  }

  if(vueltas == 3){
    for(var i=0;i < arrayMenu.length;i++){
      arrayMenu[i].style.visibility = "hidden"
    }
  }else{
    for(var i=0;i < arrayMenu.length;i++){
      arrayMenu[i].style.visibility = "visible"
    }
  }
  
}




function pagoRealizado(){

  var modal = document.getElementById('modal');
  
  if(validarTarjeta()){
    modal.style.visibility = "hidden";
    productoFila.innerHTML = ''; 
    valorTotal.innerText = `$0`;
    todoLosProductos = [];
    valorTotalModal.innerText = `$0`; 

    nombre.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
    nombre.value = "";
    anio.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
    anio.value = "";
    mes.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
    mes.value = "";
    documento.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
    documento.value = "";
    tarjeta.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
    tarjeta.value = "";
    codigoSeguridad.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
    codigoSeguridad.value = "";
  }

}




function validarTarjeta(){
 
  var todoSonValidos = 0;

  if(validarNumeroTarjeta()){
    todoSonValidos++
  }
  if(validarNombreApellido()){
    todoSonValidos++
  }
  if(validarDocumento()){
    todoSonValidos++
  }
  if(validarFechas()){
    todoSonValidos++
  }
  if(validarCodigoSeguridad()){
    todoSonValidos++
  }

  if(todoSonValidos == 5){
    return true;
  }else{
    return false;
  }


}

function validarNumeroTarjeta() {
  var numeroValido = /^4\d{12}(\d{3})?$/;
  var valido = true;

  if (!numeroValido.test(tarjeta.value)) {
      tarjeta.style.border = "1px solid red";
      valido = false;
  }else{
    tarjeta.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
  }
  return valido;
}

function validarNombreApellido() {
  var validarNombreApellido = /^[a-zA-Z]+ [a-zA-Z]+$/;

  if (validarNombreApellido.test(nombre.value)){
     nombre.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
      return true; 
  } else {
      nombre.style.border = "1px solid red";
      return false; 
  }
}



function validarDocumento() {
  var validarDocumento = /^\d{8,10}$/;

  if (validarDocumento.test(documento.value)) {
    documento.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
      return true; 
  } else {
      documento.style.border = "1px solid red";
      return false; 
  }
}



function validarFechas() {
  var anioActual = new Date().getFullYear();
  const anoDosCifras = anioActual % 100;
  anoDosCifras.toString().padStart(2, '0');

  var fechaCorrecta = true;
  if (mes.value < 1 || mes.value > 12) {
      mes.style.border = "1px solid red";
      fechaCorrecta = false;
  }else{
      mes.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
  }

  if(anio.value < 19 || anio.value > anoDosCifras) {
      anio.style.border = "1px solid red";
      fechaCorrecta = false;
  }else{
    anio.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";

  }
    return fechaCorrecta; 

}

function validarCodigoSeguridad() {
  const validar = /^\d{3}$/;

  if (validar.test(codigoSeguridad.value)) {
      codigoSeguridad.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
      return true;
  } else {
      codigoSeguridad.style.border = "1px solid red";
      return false;
  }
}


const productoFila = document.querySelector('.row-product');
const modal = document.querySelector('.productos');
const listaDeProductos = document.querySelector('.container-items');

let valorTotal = document.querySelector('.total-pagar');
let valorTotalModal = document.querySelector('.modal-item .total-pagar'); 
let todoLosProductos = [];

// Añade el producto desde el evento click con el botón
listaDeProductos.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
      //Obtenemos el nodo del padre
        const producto = e.target.parentElement;

        const infoProducto = {
            cantidad: 1,
            //Obtenemos los hijos del padre
            titulo: producto.querySelector('h2').textContent,
            precio: producto.querySelector('p').textContent
        };

        var i = 0;
        var existe = false;

        //busca los productos que sean iguales 
        while (i < todoLosProductos.length && !existe) {
            if (todoLosProductos[i].titulo === infoProducto.titulo) {
                existe = true;
            } else {
                i++;
            }
        }

        if (existe) {
          //Se incrementa la cantidad del producto existente en 1
            const productos = todoLosProductos.map(objProducto => {
                if (objProducto.titulo === infoProducto.titulo) {
                    objProducto.cantidad++;
                    return objProducto;
                } else {
                    return objProducto;
                }
            });
            //propaga el producto con la cantidad aumentada
            todoLosProductos = [...productos];
        } else {
          //mete al final de la lista el infoProducto
            todoLosProductos = [...todoLosProductos, infoProducto];
        }

        mostrarProductoFila();
    }
});

// Borra la fila de productos del carrito 
productoFila.addEventListener('click', (evento) => {
    if (evento.target.classList.contains('icon-close')) {
        const producto = evento.target.parentElement;
        const titulo = producto.querySelector('p').textContent;

        //crea un aray nuevo con productos que no tengan el mismo titulo
        todoLosProductos = todoLosProductos.filter(producto => producto.titulo !== titulo);
        mostrarProductoFila();
    }
});

// Borra la fila de productos del modal
modal.addEventListener('click', (evento) => {

    if (evento.target.classList.contains('icon-close')) {
        const producto = evento.target.parentElement;
        const titulo = producto.querySelector('p').textContent;

        //crea un aray nuevo con productos que no tengan el mismo titulo
        todoLosProductos = todoLosProductos.filter(producto => producto.titulo !== titulo);
        mostrarProductoFila();

        //para que cierre el modal cuando se elimine todos los productos
        if(todoLosProductos.length == 0) {
          Cancelar();
        }
    }

});

// Pone el elemento dentro del HTML
const mostrarProductoFila = () => {
    // Limpiar el contenido fila
    productoFila.innerHTML = '';
    // Limpiar también el modal
    modal.innerHTML = ''; 

    let total = 0;

    for (let i = 0; i < todoLosProductos.length; i++) {
        const producto = todoLosProductos[i];

        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
        <div class="info-cart-product">
           <span class="cantidad-producto-carrito">${producto.cantidad}</span>
           <p class="titulo-producto-carrito">${producto.titulo}</p>
           <span class="precio-producto-carrito">${producto.precio}</span>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </div>
        `;

        // Añade el producto al div donde esta el carrito
        productoFila.append(containerProduct);

        const cloneProduct = containerProduct.cloneNode(true);
        cloneProduct.classList.remove('cart-product');
        cloneProduct.classList.add('producto');

        // Añade el producto a productoFila del div dentro del modal
        modal.append(cloneProduct);

        total += parseInt(producto.cantidad * producto.precio.slice(1));
    }
    valorTotal.innerText = `$${total}`;
    valorTotalModal.innerText = `$${total}`; 
};



const item_1 = document.getElementById('item-1');
const item_2 = document.getElementById('item-2');
const item_3 = document.getElementById('item-3');

function postres(){
    item_1.innerHTML =`
    <img src="imagenesTienda/alfajores-colores.jpg" alt="">
            <div class="info-product">

              <h2>Macarrones</h2>
              <p class="price">$1000</p>
              <button class="btn-add-cart">Añadir al carrito</button>

            </div>`;

    item_2.innerHTML =`
    <img src="imagenesTienda/chocotorta.jpg" alt="">
            <div class="info-product">
              <h2>Chocotorta</h2>
              <p class="price">$4000</p>
              <button class="btn-add-cart">Añadir al carrito</button>
            </div>`;

        
    item_3.innerHTML = `
          <img src="imagenesTienda/cheesecake.jpg" alt="">
           <div class="info-product">
              <h2>Cheesecake</h2>
              <p class="price">$4000</p>
              <button class="btn-add-cart">Añadir al carrito</button>
            </div>`;
}

function Infusiones(){
    item_1.innerHTML =`
    <img src="imagenesTienda/te.jpg" alt="">
      <div class="info-product">

        <h2>Te</h2>
        <p class="price">$700</p>
        <button class="btn-add-cart">Añadir al carrito</button>

      </div>`;

    item_2.innerHTML =`
    <img src="imagenesTienda/cafeColombiano.jpg" alt="">
      <div class="info-product">

        <h2>Te con leche</h2>
        <p class="price">$800</p>
        <button class="btn-add-cart">Añadir al carrito</button>

      </div>`;

    item_3.innerHTML = `
    <img src="imagenesTienda/tazadete.jpg" alt="">
      <div class="info-product">

        <h2>Te de Autor</h2>
        <p class="price">$850</p>
        <button class="btn-add-cart">Añadir al carrito</button>

      </div>`;

}

function Cafes(){
    item_1.innerHTML =`
    <img src="imagenesTienda/taza_galletitas.jpg" alt="">
      <div class="info-product">

        <h2>OreoShot</h2>
        <p class="price">$3000</p>
        <button class="btn-add-cart">Añadir al carrito</button>

      </div>`;

    item_2.innerHTML =`
    <img src="imagenesTienda/cafeTN.jpg" alt="">
      <div class="info-product">

        <h2>Cafe de Autor</h2>
        <p class="price">$1000</p>
        <button class="btn-add-cart">Añadir al carrito</button>

      </div>`;

        
    item_3.innerHTML = `
    <img src="imagenesTienda/tazaDecafe.jpg" alt="">
      <div class="info-product">

        <h2>Cafe</h2>
        <p class="price">$800</p>
        <button class="btn-add-cart">Añadir al carrito</button>

      </div>`;
}

