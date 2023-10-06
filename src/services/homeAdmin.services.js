export async function getMostrarCursos(){
    const response = await fetch('http://localhost:8080/cursos');
     const mos = await response.json();
 
     return mos;
 }