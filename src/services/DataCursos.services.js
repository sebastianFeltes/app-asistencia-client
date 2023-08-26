export async function getDataCursos(){
   const response = await fetch('http://192.168.33.31:8080/cursos');
    const cursos = await response.json();
    return cursos;
}

