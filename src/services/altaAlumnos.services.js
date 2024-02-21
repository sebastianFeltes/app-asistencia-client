import { url } from "./url";
export default async function postAltaAlumno(data) {
  const altaAlumnoUrl = `${url}/alta-alumno`;

  //VALIDACIONES DEL LADO DEL CLIENTE

  if (data.tipo_dni == "Tipo de Documento") {
    alert("Seleccione un tipo de Documento");
  } else if (`${data.nro_dni}`.length < 7) {
    alert("DNI incompleto");
  } else if (data.nombre.length <= 3) {
    alert("Nombre invalido");
  } else if (data.apellido.length <= 3) {
    alert("Apellido invalido");
  } else if (!data.fecha_nac) {
    alert("Complete el campo fecha nac");
  } else if (data.localidad.length < 1) {
    alert("Complete el campo en localidad");
  } else if (data.direccion.length < 1) {
    alert("Complete el campo en dirección");
  } else if (`${data.car_telefono}`.length < 2) {
    alert("Complete el codigo de area en teléfono");
  } else if (`${data.telefono}`.length <= 6) {
    alert("Teléfono incompleto")
  } else if (`${data.car_tel_extra}`.length < 2) {
    alert("Complete el codigo de area en teleExt");
  } else if (`${data.telefono_extra}`.length <= 6) {
    alert("TelEtx incompleto");
  } else if (`${data.nro_legajo}`.length < 4) {
    alert("Legajo invalido");
  } else if (!data.email) {
    alert("Complete el campo Email");
  } else {
    //console.log(data);
    const response = await fetch(altaAlumnoUrl, {
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
    //console.log(res);
    return res;
  }
}

export async function postAltaAlumnosModificado(data) {
  if (data.tipo_dni == "Tipo de Documento") {
    alert("Seleccione un tipo de Documento");
  } else if (`${data.nro_dni}`.length < 7) {
    alert("DNI incompleto");
  } else if (data.nombre.length < 4) {
    alert("Nombre invalido");
  } else if (data.apellido.length < 4) {
    alert("Apellido invalido");
  } else if (!data.fecha_nac) {
    alert("Complete el campo fecha nac");
  } else if (data.localidad.length < 1) {
    alert("Complete el campo en localidad");
  } else if (data.direccion.length < 1) {
    alert("Complete el campo en dirección");
  } else if (`${data.car_telefono}`.length < 3) {
    alert("Complete el codigo de area en teléfono");
  } else if (`${data.telefono}`.length < 7) {
    alert("Teléfono incompleto");
  } else if (`${data.car_tel_extra}`.length < 3) {
    alert("Complete el codigo de area en teleExt");
  } else if (`${data.telefono_extra}`.length < 7) {
    alert("TelEtx incompleto");
  } else if (`${data.nro_legajo}`.length < 4) {
    alert("Legajo invalido");
  } else if (!data.email) {
    alert("Complete el campo Email");
  } else {
    const altaAlumnoExistenteUrl = `${url}/alta-alumno/${data.id_alumno}`;

    // Default options are marked with *
    const response = await fetch(altaAlumnoExistenteUrl, {
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
    //console.log(res);
    return res;
  }
}

export async function getAltaAlumno(dni) {
  const getAlumnoUrl = `${url}alta-alumno`;
  const response = await fetch(getAlumnoUrl + "/" + dni);
  const res = await response.json();
  return res;
}
