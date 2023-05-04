let btnPassword = document.getElementById('btnPassword')

btnPassword.addEventListener('click', function(){
	let password = document.getElementById('password').value
	if(password == 'Sagitario64?') {
		document.getElementsByClassName("protegido")[0].style.display = "block"
	}
	else {
		alert('Error')
	}
})