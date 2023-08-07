function DataCursos() {
  return (
    <div className="hero min-h-screen bg-slate-50 text-black">
      <div className="hero-content text-center">
        <div className="overflow-x-auto">
          <div className=" flex justify-between">
            <button className="btn btn-active btn-neutral ">Nuevo Curso</button>
            <button className="btn btn-active btn-neutral  ">
              Historial Cursos
            </button>
          </div>
        
          <table className="table  text-center">
            {/* head  */}
            <thead className=" text-black  font-normal">
              <tr>
                <th>NOMBRE DEL CURSO</th>
                <th>PROFESOR</th>
                <th>DIAS</th>
                <th>HORARIOS</th>
                <th>CANTIDAD DE ALUMNOS ACTIVOS</th>
                <th>ACTIVAR/DESACTIVAR CURSO</th>
                <th></th>
              </tr>
            </thead>
            {/* SE AUTO RELLENA CON LOS DATOS DE LOS CURSOS CARGADOS */}
            <tbody>
              {/* row 1 */}
              <tr>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td><input type="checkbox" className="toggle"  /></td>
                <td>
                  <button className="btn btn-active">edit</button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td><input type="checkbox" className="toggle"  /></td>
                <td>
                  <button className="btn btn-active">edit</button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td><input type="checkbox" className="toggle"  /></td>
                <td>
                  <button className="btn btn-active">edit</button>
                </td>
              </tr>
              {/* row 4 */}
              <tr>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td><input type="checkbox" className="toggle"  /></td>
                <td>
                  <button className="btn btn-active">edit</button>
                </td>
              </tr>
              {/* row 5 */}
              <tr>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td><input type="checkbox" className="toggle" /></td>
                <td>
                  <button className="btn btn-active">edit</button>
                </td>
              </tr>
              {/* row 6 */}
              <tr>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td><input type="checkbox" className="toggle" /></td>
                <td>
                  <button className="btn btn-active">edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default DataCursos;
