export async function getAlumnos() {
  const response = await fetch("http://192.168.33.31:8080/alumnos");
  const alumnos = await response.json();
  return alumnos;
}
