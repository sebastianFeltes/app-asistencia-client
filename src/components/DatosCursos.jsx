import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  getDataCursos,
  postCursoModificado,
} from "../services/DatosCursos.services";
import { useState } from "react";
import { getDataDocentes } from "../services/DatosDocentes.services";
function DataCursos() {
  // eslint-disable-next-line no-unused-vars
  const { data, isLoading, error } = useQuery(["getCursos"], getDataCursos);
  const [modal, setModal] = useState("modal");
  const [docentes, setDocentes] = useState(undefined);

  async function mostrarModal(e) {
    //funcion que muestra el modal
    e.preventDefault();
    const id = e.target.id;

    console.log(id);
    setModal("modal" + id);
    const res = await getDataDocentes();
    return await setDocentes(res);
  }

  function modificarDatosCursos(e) {
    e.preventDefault();
    !modal ? e.target.reset() : true;
    const nombre = e.target.nvoNombreCurso.value;
    const docente = e.target.nvoDocente.value;
    const nvoHorarioInicio = e.target.nvoHorarioInicio.value;
    const nvoHorarioFinal = e.target.nvoHorarioFinal.value;
    const nvoCheck = e.target.nvoCheck.value;
    const idCurso = e.target.idCurso.value;

    const data = {
      id_curso: parseInt(idCurso),
      nombre: nombre,
      id_docente: parseInt(docente),
      horario_inicio: nvoHorarioInicio,
      horario_final: nvoHorarioFinal,
      activo: Boolean(nvoCheck),
    };
    console.log(data);
    postCursoModificado(data);
  }
  return (
    <div className="hero min-h-screen bg-slate-50 text-black tabla-data-cursos">
      <div className="hero-content text-center p-0 w-full">
        <div className="overflow-x-auto">
          <h1 className="text-5xl font-bold">Datos Cursos</h1>
          <div className=" flex flex-row justify-between">
            <Link to={"/alta-curso"}>
              {" "}
              <button className="btn bg-blue-600 text-white hover:bg-blue-300  hover:text-black ">
                Nuevo Curso
              </button>
            </Link>

            <Link to={"/historial-curso"}>
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
                <th>HORARIO INICIO</th>
                <th>HORARIO FINAL</th>

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
                      <td className="hover:italic">{e.id_docente}</td>
                      <td>DIAS</td>
                      <td>{e.horario_inicio}</td>
                      <td>{e.horario_final}</td>

                      <td></td>
                      <td>
                        <input
                          id="nvoCheck"
                          type="checkbox"
                          className={`toggle toggle-info bg-white text-black border border-blue-400 `}
                          defaultChecked={e.activo ? true : false}
                        />
                      </td>
                      {/* MODAL QUE MODIFICA LOS DATOS DE LOS CURSOS */}
                      <td>
                        <button
                          className="btn  bg-blue-600 text-white hover:bg-blue-300  hover:text-black"
                          id={e.id_curso}
                          onClick={(e) => mostrarModal(e)}
                        >
                          Editar
                        </button>
                        <div
                          id={`modal${e.id_curso}`}
                          className={
                            modal == `modal${e.id_curso}`
                              ? "visible fixed w-full max-h-screen  m-0 p-0 top-0 left-0  flex flex-row justify-center bg-white border"
                              : "hidden"
                          }
                        >
                          <div className="hero min-h-screen bg-white">
                            <div className="hero-content text-center w-full">
                              <div className="border-4 border-black w-full rounded-3xl">
                                <div className=" border-black w-full ">
                                  <h2 className="text-black text-3xl font-bold justify-center">
                                    MODIFICAR CURSO
                                  </h2>

                                  {/* FORMULARIO */}
                                  <form
                                    id={e.id_curso}
                                    onSubmit={(e) => modificarDatosCursos(e)}
                                    onReset={() => setModal("modal")}
                                  >
                                    {/* DIV CONTENEDOR */}
                                    <div className="grid grid-cols-2 gap-4 m-2 ">
                                      {/* DIV IZQUIERDO */}
                                      <div
                                        id="contenedor1"
                                        className=" border-black flex flex-col m-2 "
                                      >
                                        <input
                                          disabled
                                          id="idCurso"
                                          placeholder={e.id_curso}
                                          defaultValue={e.id_curso}
                                          type="text"
                                          className=""
                                        />
                                        <label className="label">
                                          <span className="label-text text-black">
                                            NOMBRE DEL CURSO:
                                          </span>
                                        </label>
                                        <input
                                          id="nvoNombreCurso"
                                          placeholder={e.nombre}
                                          defaultValue={e.nombre}
                                          type="text"
                                          className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black"
                                        />

                                        <label className="label">
                                          <span className="label-text text-black">
                                            NOMBRE DEL DOCENTE:
                                          </span>
                                        </label>
                                        <span className="label-text text-black"></span>
                                        <select
                                          id="nvoDocente"
                                          className="select select-bordered w-full max-w-xs bg-white text-black"
                                        >
                                          {docentes
                                            ? docentes.map((e) => {
                                                return (
                                                  <option value={e.id_docente} key={e.id_docente}>
                                                    {e.nombre}
                                                  </option>
                                                );
                                              })
                                            : false}
                                        </select>
                                      </div>

                                      {/* DIV DERECHO */}
                                      <div className=" border-black flex flex-col m-2 ">
                                        <div className=" flex"></div>

                                        <label className="label">
                                          <span className="label-text text-black">
                                            HORARIO INICIO:
                                          </span>
                                        </label>
                                        <input
                                          id="nvoHorarioInicio"
                                          placeholder={e.horario_inicio}
                                          defaultValue={e.horario_inicio}
                                          type="text"
                                          className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black"
                                        />

                                        <label className="label ">
                                          <span className="label-text text-black">
                                            HORARIO FINAL:
                                          </span>
                                        </label>
                                        <input
                                          id="nvoHorarioFinal"
                                          type="text"
                                          placeholder={e.horario_final}
                                          defaultValue={e.horario_final}
                                          className="rounded-full input input-info w-full max-w-xs  bg-white border-black"
                                        />

                                        {/*   DIV DOCUMENTACION */}
                                        <div className="form-control flex flex-row">
                                          <label className="label">
                                            <span className="label-text text-black">
                                              ACTIVO:
                                            </span>
                                          </label>

                                          <label className="label cursor-pointer">
                                            <span className=" text-black label-text"></span>
                                            <input
                                              id="nvoCheck"
                                              type="checkbox"
                                              className="checkbox border-black m-2 "
                                              defaultChecked={
                                                e.activo == "true"
                                                  ? true
                                                  : false
                                              }
                                            />
                                          </label>
                                        </div>
                                      </div>
                                    </div>

                                    {/*  BOTONES DE "ACEPTAR" Y "CANCELAR" */}
                                    <div className="grid grid-cols-2 gap-4">
                                      <div className="content-center m-2">
                                        <button
                                          type="reset"
                                          className="btn  bg-blue-600 text-white hover:bg-blue-300  hover:text-black"
                                        >
                                          Cancelar
                                        </button>
                                      </div>

                                      <div className="content-center m-2">
                                        <button
                                          type="submit"
                                          className="btn  bg-blue-600 text-white hover:bg-blue-300  hover:text-black"
                                        >
                                          Aceptar
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
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
