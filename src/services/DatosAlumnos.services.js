import { url } from "./url";

export async function getAlumnos(page , size) {
  try {
    // Construir la URL con parámetros de paginación
    const response = await fetch(`${url}/datos-alumnos?page=${page}&size=${size}`);
    
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.statusText);
    }
    
    // Convertir la respuesta en JSON
    const alumnos = await response.json();
    // console.log(response);
  //  console.log(alumnos)
    // Devolver los datos
    return alumnos;
  } catch (error) {
    // Manejo de errores
    console.error('Error al obtener alumnos:', error);
    throw error;
  }
}

// Example POST method implementation:
export async function postAlumnosModificado(data) {
  // Default options are marked with *
  const response = await fetch(`${url}/datos-alumnos`, {
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
  const res = await response.json(); // parses JSON response into native JavaScript objects
  // console.log(res);
  return res;
}


export async function deleteAlumno(id) {
  const response = await fetch(`${url}/alumno/${id}`, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data), // body data type must match "Content-Type" header
  }); 
  return response.json()
}
export async function getAlumnosPorFiltro(parametros) {
  // console.log(parametros);
  try {
    const response = await fetch(`${url}/alumno?query=${parametros}`);
    
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.statusText);
    }
    
    const alumnos = await response.json();
    console.log(response);
    return alumnos;
  } catch (error) {
    console.error('Error al obtener alumnos:', error);
    throw error;
  }
}