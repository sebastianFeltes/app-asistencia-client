

export async function getDataDocentes() {
  const response = await fetch("http://192.168.33.31:8080/docentes")
  const docentes = await response.json();
  return docentes;
}
