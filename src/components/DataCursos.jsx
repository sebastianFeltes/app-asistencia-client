import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDataCursos } from "../services/DataCursos.services";

function DataCursos() {
  const { data, isLoading, error } = useQuery(["getCursos"], getDataCursos);
  !data ? false : console.log(data);

  return (
    <div className="hero min-h-screen bg-slate-50 text-black tabla-data-cursos">
      <div className="hero-content text-center p-0 w-full">
        <div className="overflow-x-auto">
          <div className=" flex justify-between">
            <Link to={"/"}>
              {" "}
              <button className="btn bg-blue-600 text-white hover:bg-blue-300  hover:text-black ">
                Nuevo Curso
              </button>
            </Link>

            <Link to={"/"}>
              {" "}
              <button className="btn bg-blue-600 text-white hover:bg-blue-300  hover:text-black">
                Historial Cursos
              </button>
            </Link>
          </div>

          <table className="table  text-center">
            {/* head  */}
            <thead className=" text-black  font-semibold">
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
                    <tr className="hover:bg-slate-200" key={e}>
                      <td className="hover:italic">{e.nombre.toUpperCase()}</td>
                      <td className="hover:italic">
                        {e.profesor.toUpperCase()}
                      </td>
                      <td>{e.dias}</td>
                      <td>{e.horarios}</td>
                      <td>{e.cantAlumnos}</td>
                      <td>
                        <input type="checkbox" className="toggle" />
                      </td>
                      <td>
                        <button className="btn  bg-blue-600 text-white hover:bg-blue-300  hover:text-black">
                          edit
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>

          <div
            id="modal form-control"
            className="fixed w-full h-full m-0 p-0 top-0 left-0  flex flex-row justify-center bg-gray-400 border border-cyan-400"
          >
            <div className="flex flex-col place-items-center justify-center border w-full border-blue-400">
              
              <span className="label-text  text-black">Nombre Del Curso</span>
              <input
                type="text"
              
                className="input input-bordered w-full  max-w-lg bg-white text-black border border-blue-400"
              />
              <span className="label-text  text-black">Profesor</span>
              <input
                type="text"
               
                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
              />
              <span className="label-text   text-black">Dias</span>
              <input
                type="text"
              
                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
              />
              <span className="label-text   text-black">Horario</span>
              <input
                type="text"
                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
              />
              <span className="label-text   text-black">Cantidad De Alumnos</span>
              <input
              
              
                type="number"
                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
              />
              
              <div className="flex justify-center">

              <button className="btn   max-w-xs bg-[#0184F5] text-white m-2">
                Aceptar
              </button>
              <button className="btn  max-w-xs bg-[#0184F5] text-white m-2">
                Cancelar
              </button>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}
export default DataCursos;
