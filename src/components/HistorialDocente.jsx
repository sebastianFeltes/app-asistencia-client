import { Link } from "react-router-dom";
import {
 HistorialDocente,
  getHistorialDocente,
} from "../services/HistorialDocente.services";
import { useQuery } from "@tanstack/react-query";
import { useState, useContext } from "react";
import UserContext from "../context/user.context";
/* import { BtnEditarDocente } from "./EditarDocentes"; */

export function HistorialDocentes() {
  const userContext = useContext(UserContext);
  const usuario = userContext.userData;
  const { data /*  isLoading, error */ } = useQuery(
    ["docentes"],
    getHistorialDocente
  );
  const [modal, setModal] = useState("modal");

  data ? console.log(data) : false;

  function mostrarModal(e) {
    e.preventDefault();
    let id = e.target.id;
    console.log(id);

    setModal("modal" + id);
  }

  async function modificarDatosDocentes(e) {
    e.preventDefault();

    !modal ? e.target.reset() : true;
    const id_docente = e.target.id;
    const check = e.target.nvoCheck.checked ? 1 : 0;
    const nombre = e.target.nvoNombre.value;
    const apellido = e.target.nvoApellido.value;
    const tipoDni = e.target.nvoTipoDni.value;
    const dni = e.target.nvoDni.value;
    const codAreaTel = e.target.nvoCodArTel.value;
    const telefono = e.target.nvoTelefono.value;
    const direccion = e.target.nvoDireccion.value;
    const email = e.target.nvoEmail.value;
    const fecha_nac = e.target.nvofecha_nac.value;
    const localidad = e.target.nvoLocalidad.value;
    const rol = e.target.nvoRol.value;
    const car_tel_extra = e.target.car_tel_extra.value;
    const tel_extra = e.target.tel_extra.value;
    //const password = e.target.password;

    const docenteData = {
      id_docente: parseInt(id_docente),
      activo: check? 1:0,
      nombre: nombre.toUpperCase(),
      apellido: apellido.toUpperCase(),
      tipo_dni: tipoDni.toUpperCase(),
      nro_dni: parseInt(dni),
      car_telefono: parseInt(codAreaTel),
      telefono: parseInt(telefono),
      direccion: direccion.toUpperCase(),
      email: email.toUpperCase(),
      fecha_nac: fecha_nac,

      localidad: localidad,
      id_rol: rol === "ADMIN" ? 1 : 2,
      car_tel_extra: parseInt(car_tel_extra),
      tel_extra: parseInt(tel_extra),
      //password: password,
    };
console.log(docenteData)
    const res = await HistorialDocente(docenteData);
    console.log(res)
   alert(res.message);
    setModal("modal");
    return res;
  }

  function limpiarFormulario(e) {
    e.preventDefault();
    e.target.reset();
  }
  return usuario && usuario.id_rol == 1 ? (
    <div className="bg-white min-h-screen  ">
      <form>
        <div className="flex justify-between ">
          <Link to={"/app/alta-docente"}>
            <button className="btn btn-active m-2 bg-[#0184F5] text-white">
              alta Docente
            </button>
          </Link>
          <h1 className="text-4xl m-2  text-slate-700">
            Historial de Docentes
          </h1>

          <Link to={"/app/datos-docentes"}>
            <button className="btn btn-active m-2 bg-[#0184F5] text-white">
              Datos Docente
            </button>
          </Link>
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="table  text-center text-black bg-slate-200">
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

          {/*     <th>EDITAR</th> */}
            </tr>
          </thead>
          <tbody>
            {!data ? (
              <tr>
                <td>Cargando</td>
              </tr>
            ) : (
              data.filter(e=>e.activo=="0").map((e) => (
                <tr
                  className=" hover:bg-slate-500 capitalize"
                  key={e.nro_legajo}
                >
                  <td>{e.activo === "1" ? "activo" : "inactivo"} </td>
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
                    {/* <button
                      className="btn bg-[#0184F5] text-white"
                      id={e.nro_legajo}
                      onClick={(e) => mostrarModal(e)}
                    >
                      Editar
                    </button> */}
                    <div
                      id={`modal${e.nro_legajo}`}
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
                              <div className="border border-violet-400">
                                <label className="label">
                                  <span className="label-text  text-black">
                                    Tipo De Doc
                                  </span>
                                </label>
                                <select
                                  id="nvoTipoDni"
                                  defaultValue={e.tipo_dni}
                                  className="select bg-white rounded-full text-black border border-black select-ghost w-full "
                                >
                                  <option>Tipo de Documento</option>
                                  <option>DU</option>
                                  <option>LC</option>
                                  <option>LE</option>
                                </select>
                              </div>
                              <div className="border border-violet-400">
                                <label className="label">
                                  <span className="label-text text-black">
                                    Documento
                                    <span className="label-text text-xs  text-black  ">
                                      (Sin puntos)
                                    </span>
                                  </span>
                                </label>
                                <input
                                  id="nvoDni"
                                  type="text"
                                  placeholder={e.nro_dni}
                                  defaultValue={e.nro_dni}
                                  className="input rounded-full w-full text-black bg-white border-black"
                                />
                              </div>
                              <div className="border border-violet-400">
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
                                  className="input rounded-full w-full text-black  bg-white border-black"
                                />
                              </div>
                              <div className="border border-violet-400">
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
                                  className="input rounded-full text-black w-full  bg-white border-black"
                                />
                              </div>
                              <div className="border border-violet-400">
                                <label className="label">
                                  <span className="label-text text-black">
                                    Localidad
                                  </span>
                                </label>
                                <input
                                  id="nvoLocalidad"
                                  type="text"
                                  placeholder={e.localidad}
                                  defaultValue={e.localidad}
                                  className="input rounded-full w-full text-black bg-white border-black"
                                />
                              </div>
                              <div className="border border-violet-400">
                                <label className="label">
                                  <span className="label-text text-black">
                                    Direccion
                                  </span>
                                </label>
                                <input
                                  id="nvoDireccion"
                                  type="text"
                                  placeholder={e.direccion}
                                  defaultValue={e.direccion}
                                  className="input rounded-full w-full text-black bg-white border-black"
                                />
                              </div>
                            </div>

                            <div
                              id="contenedor2"
                              className=" flex flex-col grow-2 w-1/3 m-2 text-center border border-orange-400"
                            >
                              <div>
                                <div className="flex flex-row">
                                  <div className="flex flex-col w-1/4 border border-blue-600">
                                    <label className="label">
                                      <span className="label-text  text-black">
                                        Cod. de area{" "}
                                      </span>
                                    </label>

                                    <input
                                      id="nvoCodArTel"
                                      type="number"
                                      placeholder={e.car_telefono}
                                      defaultValue={e.car_telefono}
                                      className="input rounded-full text-black  bg-white border-black"
                                    />
                                  </div>
                                  <div className="flex flex-col w-3/4 border border-blue-600">
                                    <label className="label">
                                      <span className="label-text  text-black">
                                        Telefono
                                        <span className="label-text text-xs  text-black">
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
                                      className="input rounded-full text-black bg-white border-black"
                                    />
                                  </div>
                                </div>

                                <div className="flex flex-row">
                                  <div className="flex flex-col w-1/4 border border-blue-600">
                                    <label className="label">
                                      <span className="label-text  text-black ">
                                        Cod. de area{" "}
                                      </span>
                                    </label>
                                    <input
                                      id="car_tel_extra"
                                      type="number"
                                      placeholder={e.car_telefono}
                                      defaultValue={e.car_telefono}
                                      className="input rounded-full text-black bg-white border-black"
                                    />
                                  </div>
                                  <div className="flex flex-col w-3/4 border border-blue-600">
                                    <label className="label">
                                      <span className="label-text  text-black">
                                        Tel Extra
                                        <span className="label-text text-xs  text-black ">
                                          (Sin guines ni puntos)
                                        </span>
                                      </span>
                                    </label>
                                    <input
                                      id="tel_extra"
                                      type="number"
                                      placeholder={e.telefono_extra}
                                      defaultValue={e.telefono_extra}
                                      className="input rounded-full text-black w-full bg-white border-black"
                                    />
                                  </div>
                                </div>
                                <label className="label">
                                  <span className="label-text  text-black">
                                    Email
                                  </span>
                                </label>
                                <input
                                  id="nvoEmail"
                                  type="email"
                                  placeholder={e.email}
                                  defaultValue={e.email}
                                  className="input rounded-full text-black w-full  bg-white border-black"
                                />

                                <label className="label">
                                  <span className="label-text  text-black ">
                                    Rol
                                  </span>
                                </label>
                                <select
                                  id="nvoRol"
                                  className="select rounded-full bg-white text-black border border-black select-ghost w-full "
                                >
                                  <option>
                                    {e.id_rol == 1 ? "ADMIN" : "DOCENTE"}
                                  </option>
                                  <option>
                                    {e.id_rol == 2 ? "ADMIN" : "DOCENTE"}
                                  </option>
                                </select>
                                <label className="label">
                                  <span className="label-text  text-black  ">
                                    Fecha de nacimiento
                                  </span>
                                </label>
                                <input
                                  id="nvofecha_nac"
                                  type="text"
                                  placeholder={e.fecha_nac}
                                  defaultValue={e.fecha_nac}
                                  className="input rounded-full text-black w-full bg-white border-black"
                                />
                                <div className="flex flex-row align-middle w-full">
                                  <span className="label-text text-black ">
                                    Activo
                                  </span>
                                  <input
                                    id="nvoCheck"
                                    type="checkbox"
                                    className={`toggle toggle-info bg-white text-black border border-blue-400 `}
                                    defaultChecked={
                                      e.activo === "1" ? true : false
                                    }
                                  />
                                </div>
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
                                  type="reset"
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
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    false
  );
}
