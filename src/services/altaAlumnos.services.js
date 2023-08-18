export default async function postAltaAlumno(
 data
) {

  if(data.nombre.length<3 ){
    alert("nombre invalido") 
  } 
  if(data.apellido)
/*   const data = {
    nombre: nombre,
    apellido: apellido,
    tipoDoc : tipoDoc,
    dni: dni,
    direccion: direccion,
    localidad: localidad,
    email: email,
    tel: tel,
    telCar: telCar,
    telExt: telExt,
    numLegajo: numLegajo,
    documentacionDni: documentacionDni,
    documentacionPlanilla: documentacionPlanilla,
    documentacionAnalitico: documentacionAnalitico,
    curso: curso,

  }; */




  const response = await fetch("http://192.168.33.31:8080/alta-alumno", {
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
  const res = await response.json();
  return res;
}
