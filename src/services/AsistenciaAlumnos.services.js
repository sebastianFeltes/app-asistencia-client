import { url } from "./url";

export async function getAsistencia(id_curso) {
	//const url = `http://192.168.33.31:8080/asistencia-alumnos
	const response = await fetch(`${url}/asistencia-alumnos/${id_curso}`);
	const asistAlumn = await response.json();
	return asistAlumn;
}

export async function getCurso(id_curso) {
	const response = await fetch(`${url}/cursos/${id_curso}`);
	const curso = await response.json();
	return curso;
}

export async function postAusenciaJustificada(id_asistencia, cod_asistencia) {
	const data = {
		id_asistencia: id_asistencia,
		cod_asistencia: cod_asistencia,
	};
	const response = await fetch(`${url}/modificar-asistencia`, {
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
