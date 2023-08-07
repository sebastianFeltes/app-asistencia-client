function DatosAlumnos() {
  return (
    <div className=" hero max-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-screen">
          <h1 className="text-5xl font-bold">Datos Alumnos</h1>
          <div className="flex justify-between">
            <button className="btn">Nuevo Alumno</button>
            <button className="btn">Historial Alumno</button>
          </div>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Legajo Alumno</th>
                  <th>Nombre Alumno</th>
                  <th>Apellido Alumno</th>
                  <th>D.N.I. Alumno</th>
                  <th>Dirección Alumno</th>
                  <th>Telefono Alumno</th>
                  <th>Email Alumno</th>
                  <th>Datos extra</th>
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>11111</td>
                  <td>Alumno</td>
                  <td>Alumno</td>
                  <td>11111111</td>
                  <td>Calle 111 N°111</td>
                  <td>1111111111</td>
                  <td>ejemplo@ejemplo</td>
                  <td>
                    <div className="collapse collapse-arrow bg-base-200">
                      <span>Telefono Extra</span>
                      <span>222 222 2222</span>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Planilla</span>
                          <input
                            type="checkbox"
                            checked="checked"
                            className="checkbox"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">DNI</span>
                          <input
                            type="checkbox"
                            checked="checked"
                            className="checkbox"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Analitico</span>
                          <input
                            type="checkbox"
                            checked="checked"
                            className="checkbox"
                          />
                        </label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button className="btn">Edit</button>
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>11111</td>
                  <td>Alumno</td>
                  <td>Alumno</td>
                  <td>11111111</td>
                  <td>Calle 111 N°111</td>
                  <td>1111111111</td>
                  <td>ejemplo@ejemplo</td>
                  <td></td>
                  <td>
                    <button className="btn">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatosAlumnos;
