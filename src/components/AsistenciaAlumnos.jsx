import { useQuery } from "@tanstack/react-query";
import { getAsistencia } from "../services/Login.services";

function AsistenciaAlumnos() {
    const { data, isLoading, error } = useQuery(["getAsistencia"], getAsistencia)
    console.log(data)
    return (
        <div className="overflow-x-auto">

            <div className="hero ">
                <div className="hero-content ">
                    <h1>
                        NOMBRE DEL CURSO : .....
                    </h1>
                    <h2>
                        NOMBRE DEL PROFESOR : .....
                    </h2>
                    <h2>
                        DIAS:.....
                    </h2>
                    <h2>
                        HORARIOS:....
                    </h2>
                    <h2>
                        CANTIDAD DE ALUMNOS:....
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
                        <th className=" w-0">FECHA</th>
                        <th className=" w-0">FECHA</th>
                        <th className=" w-0">FECHA</th>
                        <th className=" w-0">FECHA</th>
                        <th className=" w-0">FECHA</th>
                        <th>TOTALES</th>

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">

                                <div>
                                    <div className="font-bold">Bossi Kees</div>

                                </div>
                            </div>
                        </td><td>
                            <div className="flex items-center space-x-3">

                                <div>
                                    <div className="font-bold"> Juan</div>

                                </div>
                            </div>
                        </td>
                        <td>
                            <p>07/08</p>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <p>08/08</p>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <p>09/08</p>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <p>10/08</p>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <p>11/08</p>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>


                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>
                            <label>
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">

                                <div>
                                    <div className="font-bold">Lucchesi</div>

                                </div>
                            </div>
                        </td><td>
                            <div className="flex items-center space-x-3">

                                <div>
                                    <div className="font-bold"> Ivan Antonio</div>

                                </div>
                            </div>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>


                    </tr>{/* row 3 */}
                    <tr>
                        <th>
                            <label>
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">

                                <div>
                                    <div className="font-bold">Diaz</div>

                                </div>
                            </div>
                        </td><td>
                            <div className="flex items-center space-x-3">

                                <div>
                                    <div className="font-bold"> Luis Maria</div>

                                </div>
                            </div>
                        </td>  
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>

                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>


                    </tr>{/* row 4 */}
                    <tr>
                        <th>
                            <label>
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">

                                <div>
                                    <div className="font-bold">Kuczkho </div>

                                </div>
                            </div>
                        </td><td>
                            <div className="flex items-center space-x-3">

                                <div>
                                    <div className="font-bold"> Natalia Soledad</div>

                                </div>
                            </div>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td><td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>


                    </tr>{/* row 5 */}
                    <tr>
                        <th>
                            <label>
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">

                                <div>
                                    <div className="font-bold">Pichi</div>

                                </div>
                            </div>
                        </td><td>
                            <div className="flex items-center space-x-3">

                                <div>
                                    <div className="font-bold"> Lautaro</div>

                                </div>
                            </div>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>
                        <td>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected></option>
                                <option className=" font-bold  text-red-600">A</option>
                                <option className=" font-bold text-orange-500">J</option>
                            </select>
                        </td>


                    </tr>


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