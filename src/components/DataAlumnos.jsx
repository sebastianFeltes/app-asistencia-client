import { useQuery } from "@tanstack/react-query";
import {
  getAlumnos,
  postAlumnosModificado,
} from "../services/DataAlumnos.services";
import { Link } from "react-router-dom";
import { useState } from "react";

function DatosAlumnos() {
  //
const { data, /*isLoading, error*/ } = useQuery(["getAlumnos"], getAlumnos);
  const [modal, setModal] = useState("modal");

  function mostrarModal(e) {
    //funcion que muestra el modal
    e.preventDefault();
    const id = e.target.id_alumno;
  
    console.log(id);
    setModal("modal" + id);
  }

  function modificarDataAlumnos(e) {
    //funcion modifica los datos del alumno una vez cambiados
    e.preventDefault();
    !modal ? e.target.reset() : true;
    const activo = e.target.nvoCheck.checked;
    const nombre = e.target.nvoNombre.value;
    const apellido = e.target.nvoApellido.value;
    const tipoDNI = e.target.nvoTipoDni.value;
    const dni = e.target.nvoDni.value;
    const codAreaTel = e.target.nvoCodArTel.value;
    const telefono = e.target.nvoTelefono.value;
    const direccion = e.target.nvoDireccion.value;
    const email = e.target.nvoEmail.value;
    const legajo = e.target.nvoLegajo.value;
    const localidad = e.target.nvoLocalidad.value;
    const fotocAnalitico = e.target.nvoCheck.checked;
    const fotocDni = e.target.nvoCheck.checked;
    const planillaIns = e.target.nvoCheck.checked;
    

    const data = {
      activo: activo,
      nombre: nombre,
      apellido: apellido,
      tipo_dni: tipoDNI,
      nro_dni: dni,
      car_telefono: codAreaTel,
      telefono: telefono,
      direccion: direccion,
      email: email,
      nro_legajo: legajo,
      localidad: localidad,
      fotoc_analitico: fotocAnalitico,
      fotoc_dni: fotocDni,
      planilla_ins: planillaIns
    }
    
    postAlumnosModificado(data);

  }

  return (
    <div className="bg-white hero min-h-full text-black">
      <div className="hero-content text-center ">
        <div className="max-w-full">
          <div className="flex flex-col justify-between">
            <h1 className="text-5xl font-bold">Datos Alumnos</h1>
            <div className="flex justify-between w-full">
              <Link to="/alta-alumno">
                <button className="btn bg-blue-600 text-white">
                  Nuevo Alumno
                </button>
              </Link>
              <Link to="/historial-alumno">
                <button className="btn bg-blue-600 text-white ">
                  Historial Alumnos
                </button>
              </Link>
            </div >
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
                  <th>Cod. Area Tel Alumno</th>
                  <th>Telefono Alumno</th>
                  <th>Email Alumno</th>
                  <th>Cod. Area Tel Extra</th>
                  <th>Telefono Extra</th>
                  <th>Documentación</th>
                  <th>Activo</th>
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {!data
                  ? false
                  : data.map((e) => (
                      <tr key={e.id_alumno}>
                        <td></td>
                        <td>{e.nro_legajo}</td>
                        <td>{e.nombre}</td>
                        <td>{e.apellido}</td>
                        <td>{e.tipo_dni}</td>
                        <td>{e.nro_dni}</td>
                        <td>{e.direccion}</td>
                        <td>{e.localidad}</td>
                        <td>{e.car_telefono}</td>
                        <td>{e.telefono}</td>
                        <td>{e.email}</td>
                        <td>{e.car_tel_extra}</td>
                        <td>{e.telefono_extra}</td>
                        <td></td>
                        <td>{e.activo}</td>

                        {/* boton Editar del HISTORIAL ALUMNO */}
                        <td>
                          <button
                            className="btn max-w-xs bg-blue-600 text-white"
                            id={e.id_alumno}
                            onClick={(e) => mostrarModal(e)}
                          >
                            Editar
                          </button>
                          <div
                            id={`modal${e.id_alumno}`}
                            className={
                              modal == `modal${e.id_alumno}`
                                ? "visible fixed w-full h-full m-0 p-0 top-0 left-0  flex flex-row justify-center bg-white border border-cyan-400"
                                : "hidden"
                            }
                          >
                            <form
                              //formulario modal
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
                                  placeholder={e.nro_legajo}
                                  defaultValue={e.nro_legajo}
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
                                    placeholder={e.tipo_dni}
                                    defaultValue={e.tipo_dni}
                                    className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                                  />
                                  <span className="label-text   text-black">
                                    DNI
                                  </span>
                                  <input
                                    id="nvoDNI"
                                    type="numero"
                                    placeholder={e.nro_dni}
                                    defaultValue={e.nro_dni}
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
                                    placeholder={e.car_telefono}
                                    defaultValue={e.car_telefono}
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
                                    placeholder={e.car_tel_extra}
                                    defaultValue={e.car_tel_extra}
                                    className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                                  />

                                  <span className="label-text   text-black">
                                    Telefono Extra
                                  </span>
                                  <input
                                    id="nvoTelefonoExtra"
                                    type="numero"
                                    placeholder={e.telefono_extra}
                                    defaultValue={e.telefono_extra}
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

