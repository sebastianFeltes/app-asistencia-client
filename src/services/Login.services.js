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
