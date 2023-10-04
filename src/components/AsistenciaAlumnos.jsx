import { useQuery } from "@tanstack/react-query";
import { getAsistencia, postJustificada } from "../services/AsistenciaAlumnos.services";

function AsistenciaAlumnos() {
   // const { data, isLoading, error } = useQuery(["getAsistencia"], getAsistencia)
    const data = [
/*         {
            fecha:["1/12","3/12","5,12","9/12","11/12","13/12"],
            curso: "Programación",
            profesor:"Feltes Sebastian",
            dias:"Lun, Mie, Vie",
            horarios:"17.00 a 21.00",
            cantAlumnos: 18,
            alumnos:{
                apellido:"Dias"
            }


        } */
    ]
    function justificarFalta(e) {
        e.preventDefault();
        let dni = e.target.id;
        postJustificada(dni)
    }

    return (


        <div className="overflow-x-auto">

            <div className="hero   ">
                <div className="hero-content  p-2 bg">
                    <h1 className="  p-3  font-normal  border-b border-blue-600 rounded-lg ">
                        Nombre del curso:
                        <span>
                            {data ? data.curso : false}
                        </span>
                    </h1>
                    <h2 className=" p-3 font-normal  border-b border-blue-600 rounded-lg">
                        Nombre del profesor:
                        <span>
                            {data ? data.profesor : false}
                        </span>
                    </h2>
                    <h2 className=" border-solid p-3 font-normal  border-b border-blue-600 rounded-lg  ">
                        <span>
                            Dias:
                            {data ? data.dias : false}
                        </span>
                    </h2>
                    <h2 className=" border-solid p-3 font-normal  border-b border-blue-600 rounded-lg ">
                        Horarios:
                        <span>
                            {data ? data.horarios : false}
                        </span>
                    </h2>
                    <h2 className=" p-3 font-normal   border-b border-blue-600 rounded-lg">
                        Cantidad de alumnos:
                        <span>
                            {data ? data.cantAlumnos : false}
                        </span>
                    </h2>

                </div>
            </div>
            <table className="table   ">

                {/* head */}

                <thead className="  ">
                    <tr className="">
                        <th >
                            <label ></label>

                        </th>

                        <th className=" w-0  "><strong>Apellidos Alumno</strong></th>
                        <th className=" w-0   "> <strong>Nombres Alumnno</strong></th>
                        {data ? data.fecha.map(e => (
                            <td>{e}</td>
                        )) : false}
                        <th>TOTALES</th>

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {data ?
                        data.alumnos.map(el => (
                            <tr className="hover:bg-slate-200">
                                <td>

                                </td>
                                <td>
                                    {el.apellido}
                                </td>
                                <td>
                                    {el.nombre}
                                </td>

                                {
                                    el.registros.map(e => (
                                        <td className={e == "P" ? "text-blue-600 font-bold" : e == "A" ? "text-red-600 font-bold" : e == "1/2" ? "text-green-600 font-bold" : e == "J" ? "text-orange-600 font-bold" : false} >
                                            {e != "A" ? e : <select onChange={(e) => justificarFalta(e)} id={el.dni} className="bg-transparent"><option value="A">A</option><option value="J">J</option></select>}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                        : false}


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