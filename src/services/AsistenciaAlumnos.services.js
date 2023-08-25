
export async function getAsistencia (){
    const response = await fetch("http://192.168.33.31:8080/asistencia-alumnos");
    const asistAlumn = await response.json();
 console.log(asistAlumn)
    return asistAlumn;
}