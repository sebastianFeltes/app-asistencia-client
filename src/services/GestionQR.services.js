import { url } from "./url";
export async function buscarAlumnoPorID(id) {
	const alumnoUrl = `${url}/alumno`;
	// Default options are marked with *
	const response = await fetch(`${alumnoUrl}/${id}`);
	const res = await response.json(); // parses JSON response into native JavaScript objects
	console.log(res);
	return await res;
}
