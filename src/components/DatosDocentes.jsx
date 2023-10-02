import { Link } from "react-router-dom";
import {
  docenteModificado,
  getDataDocentes,
} from "../services/DatosDocentes.services";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
/* import { BtnEditarDocente } from "./EditarDocentes"; */

export function DatosDocentes() {
  const { data /*  isLoading, error */ } = useQuery(
    ["docentes"],
    getDataDocentes
  );
  const [modal, setModal] = useState("modal");

  data ? console.log(data) : false;

  function mostrarModal(e) {
    e.preventDefault();
    let id = e.target.id;

    setModal("modal" + id);
  }

  async function modificarDatosDocentes(e) {
    e.preventDefault();
    console.log("funcion component");
    !modal ? e.target.reset() : true;
    const id_docente = e.target.id;
    const check = e.target.nvoCheck.checked;
    const nombre = e.target.nvoNombre.value;
    const apellido = e.target.nvoApellido.value;
    const tipoDni = e.target.nvoTipoDni.value;
    const dni = e.target.nvoDni.value;
    const codAreaTel = e.target.nvoCodArTel.value;
    const telefono = e.target.nvoTelefono.value;
    const direccion = e.target.nvoDireccion.value;
    const email = e.target.nvoEmail.value;
    //const fecNac = e.target.nvoFecNac.value;
    const localidad = e.target.nvoLocalidad.value;
    const rol = e.target.nvoRol.value;
    const car_tel_extra = e.target.car_tel_extra.value;
    const tel_extra = e.target.tel_extra.value;
    //const password = e.target.password;

    const data = {
      id_docente: parseInt(id_docente),
      activo: check,
      nombre: nombre,
      apellido: apellido,
      tipo_dni: tipoDni,
      nro_dni: parseInt(dni),
      car_telefono: parseInt(codAreaTel),
      telefono: parseInt(telefono),
      direccion: direccion,
      email: email,
      // fec_nac: fecNac,

      localidad: localidad,
      id_rol: rol === "ADMIN" ? 1 : 2,
      car_tel_extra: parseInt(car_tel_extra),
      tel_extra: parseInt(tel_extra),
      //password: password,
    };

    const res = await docenteModificado(data);
    console.log(res)
    return res;

    /* console.log(check);
    console.log(nombre);
    console.log(apellido);
    console.log(tipoDNI);
    console.log(dni);
    console.log(codAreaTel);
    console.log(telefono);
    console.log(direccion);
    console.log(email);
    console.log(fecNac);
    console.log(legajo);
    console.log(localidad);
    console.log(rol);*/
  }

  function limpiarFormulario(e) {
    e.preventDefault();
    e.target.reset();
  }
  return (
    <div className="bg-white min-h-screen">
      <form>
        <div className="flex justify-between">
          <Link to={"/alta-docente"}>
            <button className="btn btn-active bg-[#0184F5] text-white">
              alta Docente
            </button>
          </Link>

          <Link to={"/historial-docente"}>
            <button className="btn btn-active bg-[#0184F5] text-white">
              Historial Docente
            </button>
          </Link>
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="table text-center text-black  bg-white ">
          {/* head */}
          <thead>
            <tr className="text-black">
              <th>ACTIVO</th>
              <th>LEGAJO</th>
              <th>NOMBRE </th>
              <th>APELLIDO</th>
              <th>TIPO DNI</th>

              <th>DNI</th>
              <th>COD AREA TEL</th>
              <th>TELEFONO</th>
              <th>DIRECCION</th>
              <th>EMAIL</th>
              <th>FEC NAC</th>

              <th>LOCALIDAD</th>

              <th>ROL</th>

              {/* <th>car_tel_extra</th>
              <th>telefono_extra</th>
              <th>password</th> */}
              {/* <th>DATOS EXTRAS</th> */}
              <th>EDITAR</th>
            </tr>
          </thead>
          <tbody>
            {!data ? (
              <tr>
                <td>Cargando</td>
              </tr>
            ) : (
              data.map((e) => (
                <tr
                  className=" hover:bg-slate-200 capitalize"
                  key={e.nro_legajo}
                >
                  <td>{e.activo==="true" ? "activo" : "inactivo"} </td>
                  <td className="hover:italic">{e.nro_legajo}</td>
                  <td className="hover:italic">{e.nombre}</td>
                  <td className="hover:italic">{e.apellido}</td>
                  <td className="hover:italic">{e.tipo_dni}</td>

                  <td className="hover:italic">{e.nro_dni}</td>
                  <td className="hover:italic">{e.car_telefono}</td>
                  <td className="hover:italic">{e.telefono}</td>
                  <td className="hover:italic">{e.direccion}</td>
                  <td className="hover:italic">{e.email}</td>
                  <td className="hover:italic">{e.fecha_nac}</td>

                  <td className="hover:italic">{e.localidad}</td>
                  <td className="hover:italic">{e.descripcion}</td>

                  <td>
                    <button
                      className="btn bg-[#0184F5] text-white"
                      id={e.nro_legajo}
                      onClick={(e) => mostrarModal(e)}
                    >
                      Editar
                    </button>
                    <div
                      id={`modal${e.legajo}`}
                      className={
                        modal == "modal" + e.nro_legajo
                          ? `visible fixed w-full h-full m-0 top-0 left-0 hero min-h-screen bg-white  overflow-scroll `
                          : "hidden"
                      }
                    >
                      <div className="hero-content text-center  border-4 border-black rounded-2xl w-full">
                        <div className="w-full ">
                          <h2 className="text-3xl text-black font-bold mb-8">
                            Datos Docente
                          </h2>

                          <form
                            onSubmit={(e) => modificarDatosDocentes(e)}
                            onReset={(e) => limpiarFormulario(e)}
                            id={e.id_docente}
                            className="flex flex-row flex-wrap justify-around w-full "
                          >
                            <div
                              id="contenedor1"
                              className="flex flex-col grow-2 w-1/3 m-2 text-center "
                            >
                              <div className="flex flex-row align-middle">
                                <span className="label-text text-black mr-2">
                                  Activo
                                </span>
                                <input
                                  id="nvoCheck"
                                  type="checkbox"
                                  className={`toggle toggle-info bg-white text-black border border-blue-400 `}
                                  defaultChecked={e.activo==="true" ? true : false}
                                />
                              </div>

                              <label className="label">
                                <span className="label-text  text-black">
                                  Tipo De Doc
                                </span>
                              </label>
                              <div
                                id="nvoTipoDni"
                                className="from-control  flex flex-row   "
                              >
                                <select
                                  id="nvoTipoDni"
                                  defaultValue={e.tipo_dni}
                                  className="select bg-white rounded-full text-black border border-black select-ghost w-full max-w-xs"
                                >
                                  <option>Tipo de Documento</option>
                                  <option>DU</option>
                                  <option>LC</option>
                                  <option>LE</option>
                                </select>
                              </div>

                              <label className="label">
                                <span className="label-text text-black">
                                  Documento
                                  <span className="label-text text-xs  text-black ml-44">
                                    (Sin puntos)
                                  </span>
                                </span>
                              </label>
                              <input
                                id="nvoDni"
                                type="text"
                                placeholder={e.nro_dni}
                                defaultValue={e.nro_dni}
                                className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                              />
                              <div className="content-center m-2 ml-36"></div>

                              <label className="label">
                                <span className="label-text  text-black">
                                  Nombre Docente
                                </span>
                              </label>
                              <input
                                id="nvoNombre"
                                type="text"
                                placeholder={e.nombre}
                                defaultValue={e.nombre}
                                className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                              />

                              <label className="label">
                                <span className="label-text  text-black">
                                  Apellido Docente
                                </span>
                              </label>
                              <input
                                id="nvoApellido"
                                type="text"
                                placeholder={e.apellido}
                                defaultValue={e.apellido}
                                className="input rounded-full text-black w-full max-w-xs bg-white border-black"
                              />

                              <label className="label">
                                <span className="label-text text-black ml-12">
                                  Localidad
                                </span>
                              </label>
                              <input
                                id="nvoLocalidad"
                                type="text"
                                placeholder={e.localidad}
                                defaultValue={e.localidad}
                                className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                              />

                              <label className="label">
                                <span className="label-text text-black ml-12">
                                  Direccion
                                </span>
                              </label>
                              <input
                                id="nvoDireccion"
                                type="text"
                                placeholder={e.direccion}
                                defaultValue={e.direccion}
                                className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                              />
                            </div>

                            <div
                              id="contenedor2"
                              className=" flex flex-col grow-2 w-1/3 m-2 text-center"
                            >
                              <div className=" ">
                                <label className="label">
                                  <span className="label-text  text-black ml-12">
                                    Codigo de area{" "}
                                  </span>
                                </label>
                                <input
                                  id="nvoCodArTel"
                                  type="number"
                                  placeholder={e.car_telefono}
                                  defaultValue={e.car_telefono}
                                  className="input rounded-full text-black mr-60 max-w-xs w-20 bg-white border-black"
                                />

                                <label className="label">
                                  <span className="label-text  text-black ml-12">
                                    Telefono
                                    <span className="label-text text-xs  text-black ml-36 ">
                                      (Sin guines ni puntos)
                                    </span>
                                  </span>
                                </label>
                                <input
                                  id="nvoTelefono"
                                  type="number"
                                  name="numero"
                                  placeholder={e.telefono}
                                  defaultValue={e.telefono}
                                  maxLength="9"
                                  className="input rounded-full text-black w-full max-w-xs bg-white border-black"
                                />

                                <label className="label">
                                  <span className="label-text  text-black ml-12">
                                    Codigo de area{" "}
                                  </span>
                                </label>
                                <input
                                  id="car_tel_extra"
                                  type="number"
                                  placeholder={e.car_telefono}
                                  defaultValue={e.car_telefono}
                                  className="input rounded-full text-black w-20 mr-60 max-w-xs bg-white border-black"
                                />

                                <label className="label">
                                  <span className="label-text  text-black ml-12">
                                    Tel Extra
                                    <span className="label-text text-xs  text-black ml-36 ">
                                      (Sin guines ni puntos)
                                    </span>
                                  </span>
                                </label>
                                <input
                                  id="tel_extra"
                                  type="number"
                                  placeholder={e.telefono_extra}
                                  defaultValue={e.telefono_extra}
                                  className="input rounded-full text-black w-full max-w-xs bg-white border-black"
                                />

                                <label className="label">
                                  <span className="label-text  text-black ml-12">
                                    Email
                                  </span>
                                </label>
                                <input
                                  id="nvoEmail"
                                  type="email"
                                  placeholder={e.email}
                                  defaultValue={e.email}
                                  className="input rounded-full text-black w-full max-w-xs bg-white border-black"
                                />

                                <label className="label">
                                  <span className="label-text  text-black ml-12">
                                    Rol
                                  </span>
                                </label>
                                <select
                                  id="nvoRol"
                                  className="select rounded-full bg-white text-black border border-black select-ghost w-full max-w-xs"
                                >
                                  <option>
                                    {e.id_rol == 1 ? "ADMIN" : "DOCENTE"}
                                  </option>
                                  <option>
                                    {e.id_rol == 2 ? "ADMIN" : "DOCENTE"}
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className=" flex flex-row grow-3 w-full justify-evenly  m-2 text-center ">
                              <div className="content-center m-2 ">
                                <button
                                  className="btn bg-blue-600 rounded-full border-none text-white"
                                  type="submit"
                                >
                                  Aceptar
                                </button>
                              </div>
                              <div className="content-center m-2">
                                <button
                                  type="submit"
                                  onClick={mostrarModal}
                                  className="btn bg-blue-600 rounded-full border-none  text-white"
                                >
                                  Cancelar
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/*  <form
                        onSubmit={(e) => modificarDatosDocentes(e)}
                        className=" flex flex-row justify-center"
                      >
                        <div className="flex flex-col items-center justify-around  w-full ">
                          <div className="flex flex-row align-middle">
                            <span className="label-text text-black mr-2">
                              Activo
                            </span>
                            <input
                              id="nvoCheck"
                              type="checkbox"
                              className={`toggle toggle-info bg-white text-black border border-blue-400 `}
                              defaultChecked={e.activo ? true : false}
                            />
                          </div>

                          <span className="label-text  text-black">Nombre</span>
                          <input
                            id="nvoNombre"
                            type="text"
                            placeholder={e.nombre}
                            defaultValue={e.nombre}
                            className="input input-bordered w-full max-w-lg bg-white  text-black border border-blue-400"
                          />
                          <span className="label-text  text-black">
                            Apellido
                          </span>
                          <input
                            id="nvoApellido"
                            type="text"
                            placeholder={e.apellido}
                            defaultValue={e.apellido}
                            className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                          />
                          <span className="label-text   text-black ">
                            Tipo DNI
                          </span>
                        

                          <select
                            id="nvoTipoDni"
                            defaultValue={"Tipo de Documento"}
                            className="select select-bordered w-full max-w-lg bg-white text-black border border-blue-400  "
                          >
                            <option>Tipo de Documento</option>
                            <option>DU</option>
                            <option>LC</option>
                            <option>LE</option>
                          </select>

                          <span className="label-text   text-black">DNI</span>
                          <input
                            id="nvoDni"
                            type="text"
                            placeholder={e.nro_dni}
                            defaultValue={e.nro_dni}
                            className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                          />
                          <span className="label-text   text-black">
                            Cod area Tel
                          </span>
                          <input
                            id="nvoCodArTel"
                            type="text"
                            placeholder={e.car_telefono}
                            defaultValue={e.car_telefono}
                            className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                          />

                          <span className="label-text   text-black">
                            Telefono
                          </span>
                          <input
                            id="nvoTelefono"
                            type="text"
                            placeholder={e.telefono}
                            defaultValue={e.telefono}
                            className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                          />
                          <button
                            type="submit"
                            className="btn   max-w-xs bg-blue-600 text-white m-2"
                          >
                            Aceptar
                          </button>
                        </div>

                        <div className="flex flex-col p-4 justify-around items-center w-full border-blue-400">
                          <span className="label-text text-black">
                            Direccion
                          </span>
                          <input
                            id="nvoDireccion"
                            type="text"
                            placeholder={e.direccion}
                            defaultValue={e.direccion}
                            className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                          />
                          <span className="label-text  text-black">Email</span>
                          <input
                            id="nvoEmail"
                            type="text"
                            placeholder={e.email}
                            defaultValue={e.email}
                            className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                          />
                          <span className="label-text  text-black">
                            Fec Nac
                          </span>
                          <input
                            type="text"
                            id="nvoFecNac"
                            placeholder={e.fecha_nac}
                            defaultValue={e.fecha_nac}
                            className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                          />
                          <span className="label-text  text-black">Legajo</span>
                          <input
                            id="nvoLegajo"
                            type="text"
                            placeholder={e.nro_legajo}
                            defaultValue={e.nro_legajo}
                            className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                          />
                          <span className="label-text text-black">
                            Localidad
                          </span>
                          <input
                            id="nvoLocalidad"
                            type="text"
                            placeholder={e.localidad}
                            defaultValue={e.localidad}
                            className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                          />
                          <span className="label-text  text-black">Rol</span>
                          <select
                            name=""
                            id="nvoRol"
                            className="select select-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                          >
                            <option type="text">
                              {e.descripcion.toUpperCase()}
                            </option>
                            <option
                              value={
                                e.descripcion.toUpperCase() === "ADMIN"
                                  ? "DOCENTE"
                                  : "DOCENTE"
                              }
                            >
                              {e.descripcion.toUpperCase() === "COMMON"
                                ? "ADMIN"
                                : "DOCENTE"}
                            </option>
                          </select>
                          <button
                            className="btn  max-w-xs bg-blue-600 text-white m-2"
                            type="submit"
                            onClick={mostrarModal}
                          >
                            Cancelar
                          </button>
                        </div>
                      </form> */}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
