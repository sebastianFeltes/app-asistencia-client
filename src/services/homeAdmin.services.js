export async function getMostrarCursos(){
    const response = await fetch('http://localhost:8080/cursos');
     const cursos = await response.json();
 
     return cursos;
 }