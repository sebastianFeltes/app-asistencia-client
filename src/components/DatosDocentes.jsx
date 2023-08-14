import { Link } from "react-router-dom";
import { getDataDocentes } from "../services/DatosDocentes.services";
import { useQuery } from "@tanstack/react-query";
import { BtnEditarDocente } from "./EditarDocentes";

export function DatosDocentes() {
  const { data, isLoading, error } = useQuery(["docentes"], getDataDocentes);

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
              <th>Editar</th>
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
                  <td>{e.activo}</td>
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
                  <BtnEditarDocente/>
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
