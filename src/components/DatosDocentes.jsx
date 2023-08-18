import { Link } from "react-router-dom";
import { getDataDocentes } from "../services/DatosDocentes.services";
import { useQuery } from "@tanstack/react-query";
/* import { BtnEditarDocente } from "./EditarDocentes"; */

export function DatosDocentes() {
  const { data /*  isLoading, error */ } = useQuery(
    ["docentes"],
    getDataDocentes
  );

  data ? console.log(data) : false;

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
                <tr key={e}>
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
                    <button className="btn">Editar</button>
                  </td>
                  <div
                    id="modal form-control"
                    className="fixed w-1/2 h-1/2 m-0 p-0 top-1/4 left-1/4 h-3xl flex flex-row justify-center bg-gray-400 border border-cyan-400"
                  >
                    <div className="flex flex-col justify-center border w-full border-blue-400">

                    <span className="label-text text-black">Activo</span>
                      <input
                        type="checkbox"
                        className="toggle toggle-info flex flex-row   bg-white text-black border border-blue-400 "
                        defaultChecked={e.activo?true:false} />{" "}
                      



                      <span className="label-text text-black">Nombre</span>
                      <input
                        type="text"
                        placeholder={e.nombre}
                        className="input input-bordered w-full max-w-xs bg-white text-black border border-blue-400"
                      />
                      <span className="label-text text-black">Apellido</span>
                      <input
                        type="text"
                        placeholder={e.apellido}
                        className="input input-bordered w-full max-w-xs bg-white text-black border border-blue-400"
                      />
                      <span className="label-text text-black">Tipo DNI</span>
                      <input
                        type="text"
                        placeholder={e.tipoDNI}
                        className="input input-bordered w-full max-w-xs bg-white text-black border border-blue-400"
                      />
                      <span className="label-text text-black">DNI</span>
                      <input
                        type="text"
                        placeholder={e.dni}
                        className="input input-bordered w-full max-w-xs bg-white text-black border border-blue-400"
                      />
                      <span className="label-text text-black">
                        Cod area Tel
                      </span>
                      <input
                        type="text"
                        placeholder={e.codAreaTel}
                        className="input input-bordered w-full max-w-xs bg-white text-black border border-blue-400"
                      />

                      <button className="btn btn-small bg-[#0184F5] text-white">Aceptar</button>
                    </div>


                    <div className="flex flex-col justify-center w-full border-blue-400">
                      <span className="label-text text-black">Telefono</span>
                      <input
                        type="text"
                        placeholder={e.telefono}
                        className="input input-bordered w-full max-w-xs bg-white text-black border border-blue-400"
                      />
                      <span className="label-text text-black">Direccion</span>
                      <input
                        type="text"
                        placeholder={e.direccion}
                        className="input input-bordered w-full max-w-xs bg-white text-black border border-blue-400"
                      />
                      <span className="label-text text-black">Email</span>
                      <input
                        type="text"
                        placeholder={e.email}
                        className="input input-bordered w-full max-w-xs bg-white text-black border border-blue-400"
                      />
                      <span className="label-text text-black">Fec Nac</span>
                      <input
                        type="text"
                        placeholder={e.fecNac}
                        className="input input-bordered w-full max-w-xs bg-white text-black border border-blue-400"
                      />
                      <span className="label-text text-black">Legajo</span>
                      <input
                        type="text"
                        placeholder={e.legajo}
                        className="input input-bordered w-full max-w-xs bg-white text-black border border-blue-400"
                      />
                      <span className="label-text text-black">Localidad</span>
                      <input
                        type="text"
                        placeholder={e.localidad}
                        className="input input-bordered w-full max-w-xs bg-white text-black border border-blue-400"
                      />
                      <span className="label-text text-black">Rol</span>
                      <input
                        type="text"
                        placeholder={e.rol}
                        className="input input-bordered w-full max-w-xs bg-white text-black border border-blue-400"
                      />
                      <button className="btn btn-small bg-[#0184F5] text-white">Cancelar</button>


                    </div>
                  </div>
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
