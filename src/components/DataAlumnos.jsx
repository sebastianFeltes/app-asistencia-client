import { useQuery } from "@tanstack/react-query";
import {
  getAlumnos,
  postAlumnosModificado,
} from "../services/DataAlumnos.services";
import { Link } from "react-router-dom";
import { useState } from "react";

function DatosAlumnos() {
  const { data, isLoading, error } = useQuery(["getAlumnos"], getAlumnos);
  const [modal, setModal] = useState("modal");

  function mostrarModal(e) {
    e.preventDefault();
    const id = e.target.id;
    console.log(id);
    setModal("modal" + id);
  }

  function modificarDataAlumnos(e) {
    e.preventDefault();
    !modal ? e.target.reset() : true;

    const legajo = e.target.nvoLegajo.value;
    const nombre = e.target.nvoNombre.value;
    const apellido = e.target.nvoApellido.value;
    const TipoDNI = e.target.nvoTipoDNI.value;
    const DNI = e.target.nvoDNI.value;
    const email = e.target.nvoEmail.value;
    const CodAreaTel = e.target.nvoCodAreaTel.value;
    const telefono = e.target.nvoTelefono.value;
    const direccion = e.target.nvoDireccion.value;
    const localidad = e.target.nvoLocalidad.value;
    const CodAreaTelExtra = e.target.nvoCodAreaTelExtra.value;
    const TelefonoExtra = e.target.nvoTelefonoExtra.value;

    const data = {
      legajo: legajo,
      nombre: nombre,
      apellido: apellido,
      TipoDNI: TipoDNI,
      DNI: DNI,
      email: email,
      CodAreaTel: CodAreaTel,
      telefono: telefono,
      direccion: direccion,
      localidad: localidad,
      CodAreaTelExtra: CodAreaTelExtra,
      TelefonoExtra: TelefonoExtra,
    };
    postAlumnosModificado(data);
  }

  return (
    <div className="bg-white hero min-h-full text-black">
      <div className="hero-content text-center ">
        <div className="max-w-full">
          <div className="flex flex-row justify-between">
            <h1 className="text-5xl font-bold">Datos Alumnos</h1>
            <Link to="/alta-alumno">
              <button className="btn bg-blue-600 text-white">
                Nuevo Alumno
              </button>
            </Link>
            <Link to="/historial-alumno">
              <button className="btn bg-blue-600 text-white">
                Historial Alumno
              </button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-black">
                <tr>
                  <th></th>
                  <th>Legajo Alumno</th>
                  <th>Nombre Alumno</th>
                  <th>Apellido Alumno</th>
                  <th>Tipo D.N.I. Alumno</th>
                  <th>N° D.N.I. Alumno</th>
                  <th>Dirección Alumno</th>
                  <th>Localidad</th>
                  <th>Codigo de Area Telefono Alumno</th>
                  <th>Telefono Alumno</th>
                  <th>Email Alumno</th>
                  <th>Codigo de Area Telefono Extra</th>
                  <th>Telefono Extra</th>
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {!data
                  ? false
                  : data.map((e) => (
                      <tr key={e.id_alumno}>
                        <td></td>
                        <td>{e.legajo}</td>
                        <td>{e.nombre}</td>
                        <td>{e.apellido}</td>
                        <td>{e.tipoDNI}</td>
                        <td>{e.dni}</td>
                        <td>{e.direccion}</td>
                        <td>{e.localidad}</td>
                        <td>{e.codAreaTel}</td>
                        <td>{e.telefono}</td>
                        <td>{e.email}</td>
                        <td>{e.codAreaTelExtra}</td>
                        <td>{e.telefonoExtra}</td>
                        {/* boton Editar del HISTORIAL ALUMNO */}
                        <td>
                          <button
                            className="btn max-w-xs bg-blue-600 text-white"
                            id={e.legajo}
                            onClick={(e) => mostrarModal(e)}
                          >
                            Editar
                          </button>
                          <div
                            id={`modal${e.legajo}`}
                            className={
                              modal == `modal${e.legajo}`
                                ? "visible fixed w-full h-full m-0 p-0 top-0 left-0  flex flex-row justify-center bg-white border border-cyan-400"
                                : "hidden"
                            }
                          >
                            <form
                              onSubmit={(e) => modificarDataAlumnos(e)}
                              className="flex flex-row justify-around w-full"
                            >
                              <div className="flex flex-col justify-around border w-full">
                                <span className="label-text  text-black">
                                  Legajo
                                </span>
                                <input
                                  id="nvoLegajo"
                                  type="numero"
                                  placeholder={e.legajo}
                                  defaultValue={e.legajo}
                                  className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                                />
                                <span className="label-text  text-black">
                                  Nombre
                                </span>
                                <input
                                  id="nvoNombre"
                                  type="text"
                                  placeholder={e.nombre}
                                  defaultValue={e.nombre}
                                  className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                                />
                                <span className="label-text  text-black">
                                  Apellido
                                </span>
                                <input
                                  id="nvoApellido"
                                  type="text"
                                  placeholder={e.apellido}
                                  defaultValue={e.apellido}
                                  className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                                />
                                <span className="flex flex-row">
                                  <span className="label-text   text-black">
                                    Tipo DNI
                                  </span>
                                  <input
                                    id="nvoTipoDNI"
                                    type="text"
                                    placeholder={e.tipoDNI}
                                    defaultValue={e.tipoDNI}
                                    className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                                  
                                  />
                                  <span className="label-text   text-black">
                                    DNI
                                  </span>
                                  <input
                                    id="nvoDNI"
                                    type="numero"
                                    placeholder={e.dni}
                                    defaultValue={e.dni}
                                    className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                                  />
                                </span>

                                <span className="flex flex-row">
                                  <span className="label-text   text-black">
                                    Cod area Tel
                                  </span>
                                  <input
                                    id="nvoCodAreaTel"
                                    type="numero"
                                    placeholder={e.codAreaTel}
                                    defaultValue={e.codAreaTel}
                                    className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                                  />

                                  <span className="label-text   text-black">
                                    Telefono
                                  </span>
                                  <input
                                    id="nvoTelefono"
                                    type="numero"
                                    placeholder={e.telefono}
                                    defaultValue={e.telefono}
                                    className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                                  />
                                </span>

                                <button
                                  type="submit"
                                  className="btn max-w-xs bg-blue-600 text-white"
                                >
                                  Aceptar
                                </button>
                              </div>

                              <div className="flex flex-col justify-around w-full ">
                                <span className="label-text  text-black">
                                  Email
                                </span>
                                <input
                                  id="nvoEmail"
                                  type="text"
                                  placeholder={e.email}
                                  defaultValue={e.email}
                                  className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                                />{" "}
                                <span className="label-text text-black">
                                  Direccion
                                </span>
                                <input
                                  id="nvoDireccion"
                                  type="text"
                                  placeholder={e.direccion}
                                  defaultValue={e.direccion}
                                  className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                                />
                                <span className="label-text text-black">
                                  Localidad
                                </span>
                                <input
                                  id="nvoLocalidad"
                                  type="text"
                                  placeholder={e.localidad}
                                  defaultValue={e.localidad}
                                  className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                                />
                                <span className="flex flex-row">
                                  <span className="label-text   text-black">
                                    Cod area Tel Extra
                                  </span>
                                  <input
                                    id="nvoCodAreaTelExtra"
                                    type="numero"
                                    placeholder={e.codAreaTelExtra}
                                    defaultValue={e.codAreaTelExtra}
                                    className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                                  />

                                  <span className="label-text   text-black">
                                    Telefono Extra
                                  </span>
                                  <input
                                    id="nvoTelefonoExtra"
                                    type="numero"
                                    placeholder={e.telefonoExtra}
                                    defaultValue={e.telefonoExtra}
                                    className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                                  />
                                </span>
                                <button
                                  type="reset"
                                  onClick={() => setModal("modal")}
                                  className="btn  max-w-xs bg-blue-600 text-white"
                                >
                                  Cancelar
                                </button>
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
    </div>
  );
}

export default DatosAlumnos;
