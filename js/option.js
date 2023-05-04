function setOptions() {
	let product = document.getElementsByClassName('product');
	let logistic = document.getElementsByClassName('logistic');
	let service = document.getElementsByClassName('service');

	for (let i = 0; i < product.length; i++) {
		for (let j = 20; j > 0; j--) {
			product[i].innerHTML += "<option>"+j+"</option>"
		}
	}

	for (let i = 0; i < logistic.length; i++) {
		for (let j = 15; j > 0; j--) {
			logistic[i].innerHTML += "<option>"+j+"</option>"
		}
	}

	for (let i = 0; i < service.length; i++) {
		for (let j = 10; j > 0; j--) {
			service[i].innerHTML += "<option>"+j+"</option>"
		}
	}



}