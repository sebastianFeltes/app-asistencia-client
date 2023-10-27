const url = "http://localhost:8080";

export async function getAsistencia() {
	//const url = "http://192.168.33.31:8080/asistencia-alumnos"
	const response = await fetch(`${url}/asistencia-alumnos/2`);
	const asistAlumn = await response.json();
	console.log(asistAlumn);
	return asistAlumn;
}

export async function postJustificada(dni) {
	const url = "http://192.168.33.31:8080/justificar-asistencia";
	console.log(dni);
	const data = {
		dni: dni,
	};
	const response = await fetch(url, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		mode: "cors", // no-cors, *cors, same-origin
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
			"Content-Type": "application/json",
			// 'Content-Type': 'application/json',
		},
		redirect: "follow", // manual, *follow, error
		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	});

	const res = await response.json(); // parses JSON response into native JavaScript objects
	return res;
}
