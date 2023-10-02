import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDataCursos, postCursoModificado } from "../services/DataCursos.services";
import { useState } from "react";

function DataCursos() {
  // eslint-disable-next-line no-unused-vars
  const { data, isLoading, error } = useQuery(["getCursos"], getDataCursos);
  const [modal, setModal] = useState("modal");
  
  console.log(data)

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
    const docente = e.target.nvoDocente.value;
    const dias = e.target.nvoDias.value;
    const horarios = e.target.nvoHorario.value;
    const cantAlumnos = e.target.nvoCantidadAlumnos.value;
    const idCurso = e.target.idCurso.value;

    const data = {
      nombre: nombre,
      id_docente:docente,
      dias:dias,
      horario:horarios,
      cantAlumnos:cantAlumnos,
      id_curso : idCurso
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
              <button className="btn bg-blue-600 text-white hover:bg-blue-300  hover:text-black ">
                Historial Cursos
              </button>
            </Link>
          </div>

          <table className="table  text-center">
            {/* head  */}
            <thead className=" text-black  font-semibold">
              <tr>
                <th>NOMBRE DEL CURSO</th>
                <th>DOCENTE</th>
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
                    <tr className="hover:bg-slate-200" key={e.id_curso}>
                      <td className="hover:italic">{e.nombre.toUpperCase()}</td>
                      <td className="hover:italic">
                        {e.id_docente.toUpperCase()}
                      </td>
                      <td>{e.id_dia}</td>
                      <td>{e.horario}</td>
                      <td></td>
                      <td>
                      <input
                              id="nvoCheck"
                              type="checkbox"
                              className={`toggle toggle-info bg-white text-black border border-blue-400 `}
                              defaultChecked={e.activo ? true : false}
                            />
                      </td>
                      <td>
                        <button
                          className="btn  bg-blue-600 text-white hover:bg-blue-300  hover:text-black"
                          id={e.id_Curso}
                          onClick={(e) => mostrarModal(e)}
                        >
                          Editar
                        </button>
                        <div
                          id={`modal${e.id_Curso}`}
                          className={modal==`modal${e.id_Curso}`?"visible fixed w-full h-full m-0 p-20 top-0 left-0   bg-gray-400 border border-cyan-400":"hidden" }
                        >
                          <form
                            onSubmit={(e) => modificarDatosCursos(e)}
                            className=" flex flex-row justify-center"
                          >
                            <div className="flex flex-col place-items-center justify-center border w-full border-blue-400">
                              <input id="idCurso" value={e.id_Curso} disabled></input>
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
                                defaultValue={e.id_docente}
                                type="text"
                                id="nvoDocente"
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                              />
                              <span className="label-text   text-black">
                                Dias
                              </span>
                              <input
                                defaultValue={e.id_dia}
                                type="text"
                                id="nvoDias"
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                              />
                              <span className="label-text   text-black">
                                Horario
                              </span>
                              <input
                                defaultValue={e.horario}
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
                                <button  type="submit" className="btn   max-w-xs bg-[#0184F5] text-white m-2">
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
