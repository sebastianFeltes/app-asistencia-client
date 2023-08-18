export async function tryAltaDocente(
  tipo,
  dni,
  nombre,
  apellido,
  direccion,
  telefono,
  localidad,
  email,
  telExt,
  rol
) {
  const data = {
    tipo:tipo,
    dni:dni,
    nombre:nombre,
    apellido:apellido,
    direccion:direccion,
    telefono:telefono,
    localidad:localidad,
    email:email,
    telExt:telExt,
    rol:rol,
  };
  const response = await fetch("http://192.168.33.31:8080/alta-docente");
  ({
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
