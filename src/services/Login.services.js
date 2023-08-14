import { Await } from "react-router-dom";

export async function getAsistencia (){
    const response = await fetch("http://192.168.33.31:8080/asistencia-alumnos");
    const asistAlumn = await response.json();
    return asistAlumn;


}