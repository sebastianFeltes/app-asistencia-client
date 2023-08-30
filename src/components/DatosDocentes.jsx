import { Link } from "react-router-dom";
import { docenteModificado, getDataDocentes } from "../services/DatosDocentes.services";
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
    !modal ? e.target.reset() : true;
    const check = e.target.nvoCheck.checked;
    const nombre = e.target.nvoNombre.value;
    const apellido = e.target.nvoApellido.value;
    const tipoDNI = e.target.nvoTipoDni.value;
    const dni = e.target.nvoDni.value;
    const codAreaTel = e.target.nvoCodArTel.value;
    const telefono = e.target.nvoTelefono.value;
    const direccion = e.target.nvoDireccion.value;
    const email = e.target.nvoEmail.value;
    const fecNac = e.target.nvoFecNac.value;
    const legajo = e.target.nvoLegajo.value;
    const localidad = e.target.nvoLocalidad.value;
    const rol = e.target.nvoRol.value;

    const data = {
      check: check,
      nombre: nombre,
      apellido: apellido,
      tipoDNI: tipoDNI,
      dni: dni,
      codAreaTel: codAreaTel,
      telefono: telefono,
      direccion: direccion,
      email: email,
      fecNac: fecNac,
      legajo: legajo,
      localidad: localidad,
      rol: rol,
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
    <div className="bg-black min-h-screen">
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
        <table className="table text-center text-white bg-transparent">
          {/* head */}
          <thead>
            <tr className="text-white">
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
                <tr key={e.legajo}>
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
                  <td>{e.tipoDNI}</td>

                  <td>{e.dni}</td>
                  <td>{e.codAreaTel}</td>
                  <td>{e.telefono}</td>
                  <td>{e.direccion}</td>
                  <td>{e.email}</td>
                  <td>{e.fecNac}</td>
                  <td>{e.legajo}</td>
                  <td>{e.localidad}</td>
                  <td>{e.rol}</td>
                  <td>
                    <button
                      className="btn"
                      id={e.legajo}
                      onClick={(e) => mostrarModal(e)}
                    >
                      Editar
                    </button>
                    <div
                      id={`modal${e.legajo}`}
                      className={
                        modal == "modal" + e.legajo
                          ? `visible fixed w-full h-full m-0 p-4 top-0 left-0   bg-gray-400 border border-cyan-400 `
                          : "hidden"
                      }
                    >
                      <form
                        onSubmit={(e) => modificarDatosDocentes(e)}
                        className=" flex flex-row justify-center"
                      >
                        <div className="flex flex-col items-center justify-around border w-full border-blue-400">
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
                          <span className="label-text   text-black">
                            Tipo DNI
                          </span>
                          <input
                            id="nvoTipoDni"
                            type="text"
                            placeholder={e.tipoDNI}
                            defaultValue={e.tipoDNI}
                            className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                          />
                          <span className="label-text   text-black">DNI</span>
                          <input
                            id="nvoDni"
                            type="text"
                            placeholder={e.dni}
                            defaultValue={e.dni}
                            className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                          />
                          <span className="label-text   text-black">
                            Cod area Tel
                          </span>
                          <input
                            id="nvoCodArTel"
                            type="text"
                            placeholder={e.codAreaTel}
                            defaultValue={e.codAreaTel}
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
                            placeholder={e.fecNac}
                            defaultValue={e.fecNac}
                            className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400"
                          />
                          <span className="label-text  text-black">Legajo</span>
                          <input
                            id="nvoLegajo"
                            type="text"
                            placeholder={e.legajo}
                            defaultValue={e.legajo}
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

                              /* className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-400" */
                            >
                              {e.rol.toUpperCase()}
                            </option>
                            <option
                              value={
                                e.rol.toUpperCase() === "ADMIN"
                                  ? "DOCENTE"
                                  : "DOCENTE"
                              }
                            >
                              {e.rol.toUpperCase() === "DOCENTE"
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

                  {/* <td>
                    {e.datosExtras}
                    <select className="select select-bordered w-full max-w-xs">
                      <option disabled>
                        <span>Telofono: </span>
                        <span>221-487-4871</span>
                      </option>
                      <option disabled>
                        <span>Documentacion:</span>
                        <span>Completa</span>
                        </option>
                      <option disabled>
                        <span>Telefono Medico:</span>
                        <span>221-345-6259 </span>
                        </option>
                        </select>
                      </td> */}
                  {/* <BtnEditarDocente /> */}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/*    <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Docente 1
        </div>
        <div className="collapse-content">
        <thead>
            <tr>
              <th></th>
              <th>NOMBRE APELLIDO</th>
              <th>DNI</th>
              <th>DIRECCION</th>
              <th>TELEFONO</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tr>
              
              <td>JUAN CARLO</td>
              <td>45.648.486</td>
              <td>12 154 155</td>
              <td>2213636355</td>
              <td>juancarlos95@gmail.com</td>
              </tr>



          
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div> */}
    </div>
  );
}
