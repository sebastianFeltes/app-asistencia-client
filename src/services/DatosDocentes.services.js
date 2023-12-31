import { url } from "./url";
export async function getDataDocentes() {
  const response = await fetch(`${url}/docentes`);
  const docentes = await response.json();
 /* console.log(docentes); */
  return docentes;
}

// Ejemplo implementando el metodo POST:
export async function docenteModificado(data) {
  return post(data, "datos-docentes")
}
export async function altaAlumno(data){
  return post(data, "alumno")
}

export async function post(data, path) {
console.log(data)
  const response = await fetch(`${url}/${path}`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  
  return response.json(); // parses JSON response into native JavaScript objects
}