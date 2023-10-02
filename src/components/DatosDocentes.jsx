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

  function modificarDatosDocentes(e) {
    e.preventDefault();
    console.log("funcion component");
    !modal ? e.target.reset() : true;
    const id_docente = e.target.id_docente
    const check = e.target.nvoCheck.checked;
    const nombre = e.target.nvoNombre.value;
    const apellido = e.target.nvoApellido.value;
    const tipoDni = e.target.nvoTipoDni.value;
    const dni = e.target.nvoDni.value;
    const codAreaTel = e.target.nvoCodArTel.value;
    const telefono = e.target.nvoTelefono.value;
    const direccion = e.target.nvoDireccion.value;
    const email = e.target.nvoEmail.value;
    const fecNac = e.target.nvoFecNac.value;
    const legajo = e.target.nvoLegajo.value;
    const localidad = e.target.nvoLocalidad.value;
    const rol = e.target.nvoRol.value;
    const car_tel_extra = e.target.car_tel_extra;
    const tel_extra = e.target.tel_extra;
    const password = e.target.password;


    const data = {
      id_docente: id_docente,
      activo: check,
      nombre: nombre,
      apellido: apellido,
      tipo_dni: tipoDni,
      nro_dni: dni,
      car_telefono: codAreaTel,
      telefono: telefono,
      direccion: direccion,
      email: email,
      fec_nac: fecNac,
      nro_legajo: legajo,
      localidad: localidad,
      id_rol: rol,
      car_tel_extra: car_tel_extra,
      tel_extra: tel_extra,
      password: password,  
    };

    docenteModificado(data);

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
              <th>NOMBRE </th>
              <th>APELLIDO</th>
              <th>TIPO DNI</th>

              <th>DNI</th>
              <th>COD AREA TEL</th>
              <th>TELEFONO</th>
              <th>DIRECCION</th>
              <th>EMAIL</th>
              <th>FEC NAC</th>
              <th>LEGAJO</th>
              <th>LOCALIDAD</th>
              <th>ROL</th>
              <th>car_tel_extra</th>
              <th>telefono_extra</th>
              <th>password</th>
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
                <tr className=" hover:bg-slate-200 capitalize" key={e.nro_legajo}>
                  <td>
                    {e.activo ? "si" : "no"}{" "}
                    {/*  <input
                      type="checkbox"
                      className="toggle toggle-info"
                      checked={e.activo}
                    />{" "} */}
                  </td>
                  <td>{e.nombre}</td>
                  <td>{e.apellido}</td>
                  <td>{e.tipo_dni}</td>

                  <td>{e.nro_dni}</td>
                  <td>{e.car_telefono}</td>
                  <td>{e.telefono}</td>
                  <td>{e.direccion}</td>
                  <td>{e.email}</td>
                  <td>{e.fecha_nac}</td>
                  <td>{e.nro_legajo}</td>
                  <td>{e.localidad}</td>
                  <td>{e.descripcion}</td>
                  <td>{e.car_tel_extra}</td>
                  <td>{e.tel_extra}</td>
                  <td>{e.password}</td>
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
                          ? `visible fixed w-full h-full m-0 p-4 top-0 left-0   bg-gray-400  `
                          : "hidden"
                      }
                    >
                      <form
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
                          {/* <input
                            id="nvoTipoDni"
                            type="text"
                            placeholder={e.tipoDNI}
                            defaultValue={e.tipoDNI}
                            className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                          /> */}

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
                            <option
                              type="text"

                              
                            >
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
                      </form>
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
