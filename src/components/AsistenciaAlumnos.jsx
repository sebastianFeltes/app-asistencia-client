
function AsistenciaAlumnos() {
    return (
        <div>

            <div >
                <div className="hero-content ">
                    <div className="max-w-md flex flex-row">
                        <h1 className="text-xl ">NOMBRE DEL CURSO:     </h1>

                        <h2 className="text-xl ">NOMBRE DEL PROFESOR:     </h2>

                    </div>

                </div>

            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Nombre</th>
                            <th>Fecha </th>
                            <th>total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                         
                        
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>2</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th></th>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>



    )
}

export default AsistenciaAlumnos;