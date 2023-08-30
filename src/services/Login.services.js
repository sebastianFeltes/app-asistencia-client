export async function getAlumnos() {
  const response = await fetch("http://192.168.33.31:8080/login");
  const alumnos = await response.json();
  return alumnos;
}

export async function postNuevoUsuario() {
  const data = {
    dni: 35954987,
    nombre: "Sebastian"
  }
  const url = "http://192.168.33.31/login";
  let response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
    mode: "cors",
  });
  let result = await response.json();
  return result;
}
export async function postLogin(dni, pass) {
  const url = "http://192.168.33.31:8080/login";
  if (dni.length < 7) {
    return alert("DNI Inválido")
  }
  if (pass.length <4){
    return alert("Pass inválida")
  }
  let data = {
    dni: dni,
    password: pass,
  };

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
  let res = await response;

  return res;
}
