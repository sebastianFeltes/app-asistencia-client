import { url } from "./url";

export async function fetchRegistros() {
  const registrosUrl = `${url}/asistencia-registro`;
  const response = await fetch(`${registrosUrl}/`);
  const res = response.json(); // parses JSON response into native JavaScript objects
  //   console.log(res);
  return res;
}
