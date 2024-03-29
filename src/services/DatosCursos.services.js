import { url } from "./url";
export async function getDataCursos(){
   const response = await fetch(`${url}/cursos`);
    const cursos = await response.json();

    return cursos;
}
export async function getDataDias() {
  const response = await fetch(`${url}/dias`);
  const dias = await response.json();
 
  return dias;
}

export async function postCursoModificado( data) {
    const modificarCursoUrl = `${url}/cursos`

   
    // Default options are marked with *
    const response = await fetch( modificarCursoUrl, {
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
    console.log(res)
    return res;
  }


