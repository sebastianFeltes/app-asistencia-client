export default async function postAltaAlumno(data) {
  if (data.nombre.length < 3) {
    //VALIDACION NOMBRE
    alert("nombre invalido");
  }
  if (data.apellido.length < 4) {
    //VALIDACION APELLIDO
    alert("apellido invalido");
  }
  if (!data.tipoDoc) {
    //VALIDACION TIPO DNI
    alert("tipo de DNI invalido");
  }
  if (data.dni.length < 6) {
    //VALIDACION DNI
    alert("documento invalido");
  }
  if (!data.direccion) {
    //VALIDACION DIRECCION
    alert("direccion invalida");
  }
  if (!data.localidad) {
    //VALIDACION LOCALIDAD
    alert("localidad invalida");
  }
  if (!data.email) {
    //VALIDACION EMAIL
    alert("email invalido");
  }
  if (data.tel.length < 10) {
    //VALIDACION TEL
    alert("telefono invalido");
  }
  if (data.tel.length > 10) {
    //VALIDACION TEL
    alert("Muchos numeros");
  }
  if (data.telCar.length < 10) {
    //VALIDACION TEL CAR
    alert("telefono Caracteristica invalido");
  }
  if (data.telCar.length > 10) {
    //VALIDACION TEL CAR
    alert("muchos numeros");
  }
  if (data.telExt.length < 10) {
    //VALIDACION TEL EXTRA
    alert("telefono extra invalido");
  }
  if (data.telExt.length > 10) {
    //VALIDACION TEL EXTRA
    alert("muchos numeros");
  }
  if (!data.numLegajo) {
    //VALIDACION NUM LEGAJO
    alert("numero de legajo invalido");
  }
  if (!data.curso) {
    //VALIDACION CURSO
    alert("curso invalido");
  }

  const url = "http://192.168.33.31:8080/alta-alumno";
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
  const res = await response.json();
  return res;
}
