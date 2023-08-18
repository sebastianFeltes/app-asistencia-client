import { useQuery } from "@tanstack/react-query";
import { getAsistencia } from "../services/AsistenciaAlumnos.services";

function AsistenciaAlumnos() {
    const { data, isLoading, error } = useQuery(["getAsistencia"], getAsistencia)
    return (
        <div className="overflow-x-auto">

            <div className="hero ">
                <div className="hero-content ">
                    <h1>
                        Nombre del curso:
                        <span>
                        {data.curso}
                        </span>
                    </h1>
                    <h2>
                        Nombre del profesor:
                        <span>
                            {data.profesor}
                        </span>
                    </h2>
                    <h2>
                       <span>
                        Dias:
                        {data.dias}
                       </span>
                    </h2>
                    <h2>
                        Horarios:
                        <span>
                            {data.horarios}
                        </span>
                    </h2>
                    <h2>
                        Cantidad de alumnos:
                        <span>
                            {data.cantAlumnos}
                        </span>
                    </h2>

                </div>
            </div>
            <table className="table table-zebra">

                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label></label>

                        </th>
                        <th className=" w-0">Apellidos Alumno</th>
                        <th className=" w-0">Nombres Alumnno</th>
                        {data.fecha.map(e=>(
                            <td>{e}</td>
                        ))}
                        <th>TOTALES</th>

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        data.alumnos.map(e => (
                            <tr>
                                <td>

                                </td>
                                <td>
                                    {e.apellido}
                                </td>
                                <td>
                                    {e.nombre}
                                </td>

                                {
                                    e.registros.map(e=>(
                                        <td className={e=="P"?"text-blue-600": e=="A"?"text-red-600": e=="1/2"? "text-green-600":e=="J"?"text-orange-600":false} >
                                            {e}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }


                </tbody>



            </table>
        </div>



    )
}

export default AsistenciaAlumnos;
/* “1/2” (color verde): media falta

“A“ (color rojo): ausente (es editable pasa de “A” a “J”)

“J“ (naranja): justificada

“P“ (azul): presente. */