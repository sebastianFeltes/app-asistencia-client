export async function getHistorialDocente() {
    const response = await fetch("http://localhost:8080/Historial-Docente");
    const docentes = await response.json();
   /* console.log(docentes); */
    return docentes;
  }
 
  // Ejemplo implementando el metodo POST:
  export async function HistorialDocente(data) {
    return post(data, "Historial-Docentes")
  } 
  export async function altaAlumno(data){
    return post(data, "alumno")
  }
  
  export async function post(data, path) {
  console.log(data)
    const response = await fetch(`http://localhost:8080/${path}`, {
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