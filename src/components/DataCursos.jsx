import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDataCursos } from "../services/DataCursos.services";

function DataCursos() {
  const { data, isLoading, error } = useQuery(["getCursos"], getDataCursos);
  !data ? false : console.log(data);

  return (
    <div className="hero min-h-screen bg-slate-50 text-black">
      <div className="hero-content text-center">
        <div className="overflow-x-auto">
          <div className=" flex justify-between">
            <Link to={"/"}>
              {" "}
              <button className="btn btn-active btn-neutral ">
                Nuevo Curso
              </button>
            </Link>
            <Link to={"/"}>
              {" "}
              <button className="btn btn-active btn-neutral">
                Historial Cursos
              </button>
            </Link>
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
              {!data
                ? false
                : data.map((e) => (
                    <tr key={e}>
                      <td>{e.nombre}</td>
                      <td>{e.profesor}</td>
                      <td>{e.dias}</td>
                      <td>{e.horarios}</td>
                      <td>{e.cantAlumnos}</td>
                      <td>
                        <input type="checkbox" className="toggle" />
                      </td>
                      <td>
                        <button className="btn btn-active">edit</button>
                      </td>
                    </tr>
                  ))}
              {/*               <tr>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>
                  <input type="checkbox" className="toggle" />
                </td>
                <td>
                  <button className="btn btn-active">edit</button>
                </td>
              </tr>

              <tr>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>
                  <input type="checkbox" className="toggle" />
                </td>
                <td>
                  <button className="btn btn-active">edit</button>
                </td>
              </tr>

              <tr>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>
                  <input type="checkbox" className="toggle" />
                </td>
                <td>
                  <button className="btn btn-active">edit</button>
                </td>
              </tr>

              <tr>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>
                  <input type="checkbox" className="toggle" />
                </td>
                <td>
                  <button className="btn btn-active">edit</button>
                </td>
              </tr>

              <tr>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>
                  <input type="checkbox" className="toggle" />
                </td>
                <td>
                  <button className="btn btn-active">edit</button>
                </td>
              </tr>

              <tr>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>ejemplo</td>
                <td>
                  <input type="checkbox" className="toggle" />
                </td>
                <td>
                  <button className="btn btn-active">edit</button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default DataCursos;
