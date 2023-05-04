let idiomaNavegador = window.navigator.language;

function cambiarIdioma(idioma='es') {
	let mensajes = document.getElementsByClassName('mensajes')
	for (var i = 0; i < mensajes.length; i++) {
		mensajes[i].style.display = 'none'
	}
	let mensajesIdioma = document.getElementsByClassName(idioma)
	for (var i = 0; i < mensajesIdioma.length; i++) {
		mensajesIdioma[i].style.display = 'block'
	}
}

window.addEventListener("load", (event) => {
	if (idiomaNavegador.includes('en'))
		cambiarIdioma('en')
})

let idiomaBtn = document.getElementById('idiomaBtn')
idiomaBtn.addEventListener('click', function() {
	let idioma = document.getElementById('idioma').value
	cambiarIdioma(idioma)
})
