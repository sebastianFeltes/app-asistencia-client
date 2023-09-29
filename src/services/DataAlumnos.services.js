export async function getAlumnos(){
   const response = await fetch ("http://localhost:8080/data-alumnos");
   const alumnos =await response.json();
   return alumnos;
}


// Example POST method implementation:
export async function postAlumnosModificado( data) {

   const url="http://localhost:8080/modificar-alumno"
   
   // Default options are marked with *
   const response = await fetch(url, {
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
   const res=response.json(); // parses JSON response into native JavaScript objects
   console.log(res)
   return res;
 }
 
 