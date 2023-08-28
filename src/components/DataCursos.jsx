import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDataCursos, postCursoModificado } from "../services/DataCursos.services";
import { useState } from "react";

function DataCursos() {
  const { data, isLoading, error } = useQuery(["getCursos"], getDataCursos);
  const [modal, setModal] = useState("modal");

  function mostrarModal(e) {
    e.preventDefault();
    const id = e.target.id;
    console.log(id)
    setModal("modal" + id);
  }

  function modificarDatosCursos(e) {
    e.preventDefault();
    !modal ? e.target.reset() : true;
    const nombre = e.target.nvoNombreCurso.value;
    const apellido = e.target.nvoProfesor.value;
    const dias = e.target.nvoDias.value;
    const horarios = e.target.nvoHorario.value;
    const alumnos = e.target.nvoCantidadAlumnos.value;
    const idCurso = e.target.idCurso.value;

    const data = {
      nombre: nombre,
      apellido:apellido,
      dias:dias,
      horarios:horarios,
      alumnos:alumnos,
      idCurso : idCurso
    }
    postCursoModificado(data)



  }
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
                    <tr className="hover:bg-slate-200" key={e.idCurso}>
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
                        <button
                          className="btn  bg-blue-600 text-white hover:bg-blue-300  hover:text-black"
                          id={e.idCurso}
                          onClick={(e) => mostrarModal(e)}
                        >
                          Editar
                        </button>
                        <div
                          id={`modal${e.idCurso}`}
                          className={modal==`modal${e.idCurso}`?"visible fixed w-full h-full m-0 p-20 top-0 left-0   bg-gray-400 border border-cyan-400":"hidden" }
                        >
                          <form
                            onSubmit={(e) => modificarDatosCursos(e)}
                            className=" flex flex-row justify-center"
                          >
                            <div className="flex flex-col place-items-center justify-center border w-full border-blue-400">
                              <input id="idCurso" value={e.idCurso} disabled></input>
                              <span className="label-text  text-black">
                                Nombre Del Curso
                              </span>
                              <input
                                placeholder={e.nombre}
                                defaultValue={e.nombre}
                                type="text"
                                id="nvoNombreCurso"
                                className="input input-bordered w-full  max-w-lg bg-white text-black border border-blue-400"
                              />
                              <span className="label-text  text-black">
                                Profesor
                              </span>
                              <input
                                defaultValue={e.profesor}
                                type="text"
                                id="nvoProfesor"
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                              />
                              <span className="label-text   text-black">
                                Dias
                              </span>
                              <input
                                defaultValue={e.dias}
                                type="text"
                                id="nvoDias"
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                              />
                              <span className="label-text   text-black">
                                Horario
                              </span>
                              <input
                                defaultValue={e.horarios}
                                type="text"
                                id="nvoHorario"
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                              />
                              <span className="label-text   text-black">
                                Cantidad De Alumnos
                              </span>
                              <input
                                defaultValue={e.cantAlumnos}
                                id="nvoCantidadAlumnos"
                                type="number"
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                              />

                              <div className="flex justify-center">
                                <button  className="btn   max-w-xs bg-[#0184F5] text-white m-2">
                                  Aceptar
                                </button>
                                <button type="reset" onClick={()=>setModal("modal")} className="btn  max-w-xs bg-[#0184F5] text-white m-2">
                                  Cancelar
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default DataCursos;
