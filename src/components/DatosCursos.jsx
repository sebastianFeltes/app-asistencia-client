import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {getDataCursos, getDataDias, postCursoModificado,} from "../services/DatosCursos.services";
import { useContext, useState } from "react";
import { getDataDocentes } from "../services/DatosDocentes.services";
import UserContext from "../context/user.context";
function DataCursos() {
  const userContext = useContext(UserContext);
  const rol = userContext.userData.id_rol;
 
  // eslint-disable-next-line no-unused-vars
  const { data /* isLoading, error */ } = useQuery(
    ["getCursos"],
    getDataCursos
  );
  
 
  const [modal, setModal] = useState("modal");
  const [docentes, setDocentes] = useState(undefined);
  const [dias, setDias] = useState([]);
  async function mostrarModal(e) {
    //funcion que muestra el modal
    e.preventDefault();
    const id = e.target.id;

   
    
    setModal("modal" + id);
    const res = await getDataDocentes();
    const dias = await getDataDias();
     setDias(dias)
    return setDocentes(res);
    

  }
  function agregarDia(e) {
    e;
  }
  // funcion que modifica los datos
  async function modificarDatosCursos(e) {
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

    const res = await postCursoModificado(data);
    if (res.message == "Curso modificado") {
      alert(res.message);
    } else {
      alert("error al modificar");
    }
    return setModal("modal");
  }

  /* function limpiarFormulario(e) {
    e.preventDefault();
    e.target.reset();
  } */
  return (
    <div className="hero min-h-screen bg-slate-50 text-black tabla-data-cursos">
      <div className="hero-content text-center p-0 w-full">
        <div className="overflow-x-auto">
          <h1 className="text-5xl font-bold">Datos Cursos</h1>
          <div className=" flex flex-row justify-between">
            {rol == 1 ? (
              <Link to={"/alta-curso"}>
                {" "}
                <button className="btn bg-blue-600 text-white hover:bg-blue-300  hover:text-black ">
                  Nuevo Curso
                </button>
              </Link>
            ) : (
              false
            )}

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
                        {rol == 1 ? (
                          <button
                            className="btn  bg-blue-600 text-white hover:bg-blue-300  hover:text-black"
                            id={e.id_curso}
                            onClick={(e) => mostrarModal(e)}
                          >
                            Editar
                          </button>
                        ) : (
                          false
                        )}
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
                                    
                                          <input
                                          id="idCurso"
                                          placeholder={e.id_curso}
                                          defaultValue={e.id_curso}
                                          type="number"
                                          className="hidden"
                                        />
                                      {/* DIV IZQUIERDO */}
                                      <div
                                        id="contenedor1"
                                        className=" border-black flex flex-col m-2 "
                                      >
                                        
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
                                          className="select w-full max-w-xs bg-transparent rounded-full border-black"
                                        >
                                          {docentes
                                            ? docentes.map((e) => {
                                                return (
                                                  <option
                                                    value={e.id_docente}
                                                    key={e.id_docente}
                                                  >
                                                    {e.nombre}
                                                  </option>
                                                );
                                              })
                                            : false}
                                        </select>
                                        <label className="label">
                                          <span className="label-text text-black">
                                            NUEVO DIA:
                                          </span>
                                        </label>
                                        <div className="flex m-0">
                                        
                                         <select
                                          id="nvoDocente"
                                          className="select w-full max-w-xs bg-transparent rounded-full border-black"
                                        >
                                          {dias
                                            ? dias.map((e) => {
                                                return (
                                                  <option
                                                    value={e.id_dia}
                                                    key={e.nombre}
                                                  >
                                                    {e.nombre}
                                                  </option>
                                                );
                                              })
                                            : false}
                                        </select> 
                                          {/*  BOTON PARA AGREGAR MAS DE UN DIA */}
                                          <button
                                            onClick={(e) => agregarDia(e)}
                                            type="button"
                                            className="btn ml-2 bg-blue-600 text-black rounded-full w-12 border-none"
                                          >
                                            +
                                          </button>
                                        </div>
                                      </div>

                                      {/* DIV DERECHO */}
                                      <div className=" border-black flex flex-col m-2 ">
                                        <label className="label">
                                          <span className="label-text text-black">
                                            HORARIO INICIO:
                                          </span>
                                        </label>
                                        <label className="label ">
                                          <span></span>
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
                                          type="submit"
                                          className="btn  bg-blue-600 text-white hover:bg-blue-300  hover:text-black"
                                        >
                                          Aceptar
                                        </button>
                                      </div>
                                      <div className="content-center m-2">
                                        <button
                                          type="reset"
                                          className="btn  bg-blue-600 text-white hover:bg-blue-300  hover:text-black"
                                        >
                                          Cancelar
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
