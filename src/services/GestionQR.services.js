export async function buscarAlumnoPorID(id) {
	const url = "http://localhost:8080/alumno";
	// Default options are marked with *
	const response = await fetch(`${url}/${id}`);
	const res = await response.json(); // parses JSON response into native JavaScript objects
	console.log(res);
	return await res;
}
