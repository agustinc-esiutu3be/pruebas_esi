const thatproduct = document.getElementById("add");

thatproduct.addEventListener('click', crearProducto);

function crearProducto() {
	const otroProducto = document.getElementById("ingpedido");
	
	const productomas = document.createElement("form");
	const preciomas = document.createElement("input");
	const nombremas= document.createElement("input");
	const cantidadmas= document.createElement("input");
	
	preciomas.setAttribute("type","text");
	cantidadmas.setAttribute("type","number");
	nombremas.setAttribute("type","text");
	
	
	preciomas.setAttribute("name","precio[]");
	cantidadmas.setAttribute("name","cantidad[]");
	nombremas.setAttribute("name","nombre[]");
	
	preciomas.setAttribute("id","$producto[]");
	cantidadmas.setAttribute("id","cantproducto[]");
	nombremas.setAttribute("id","nomproducto[]");
	
	productomas.appendChild(preciomas);
	productomas.appendChild(nombremas);
	productomas.appendChild(cantidadmas);
	
	otroProducto.insertAdjacentHTML("afterend", productomas);
}