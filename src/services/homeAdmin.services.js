import { url } from "./url";
export async function getMostrarCursos(){
    const response = await fetch(`${url}/cursos`);
     const cursos = await response.json();
 
     return cursos;
 }