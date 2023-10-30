export async function tryAltaDocente(data) {
  const url = "http://localhost:8080/alta-docente"

  if (`${data.nro_legajo}`.length < 4) { alert("legajo invalido") }
  else if (data.tipo_dni == "Tipo de Documento") { alert("seleccione un tipo de Documento") }
  else if (`${data.nro_dni}`.length < 7) { alert("Dni incompleto") }
  else if (data.nombre.length < 4) { alert("nombre invalido") }
  else if (data.apellido.length < 4) { alert("apellido invalido") }
  else if (!data.fecha_nac) {alert("complete el campo de fecha de nacimiento")}
  else if (data.password.length < 8) { alert("contraseña minimo 8 caracteres") }
  else if (data.localidad.length < 1) { alert("complete el campo en localidad") }
  else if (data.direccion.length < 1) { alert(" complete el campo en direccion") }
  else if (`${data.car_telefono}`.length < 3) { alert("complete el codigo de area en telefono") }
  else if (`${data.telefono}`.length < 7) { alert(" telefono incompleto") }
  else if (`${data.car_tel_extra}`.length < 3) { alert("complete el codigo de area en telefono extra") }
  else if (`${data.telefono_extra}`.length < 7) { alert(" telefono extra incompleto") }
  else if (!data.email) { alert("complete el campo email") }
  else if (data.id_rol == "Tipo de Rol") { alert("seleccione un campo en rol") }
  else {


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
    const res = await response.json(); // parses JSON response into native JavaScript objects

    return res;
  }
}
