import { useQuery } from "@tanstack/react-query";
import { getAlumnos } from "../services/DataAlumnos.services";
import { Link } from "react-router-dom";

function DatosAlumnos() {
  const { data, isLoading, error } = useQuery(["getAlumnos"], getAlumnos);
  !data ? false : console.log(data);

  function modificarDataAlumnos(e) {
    e.preventDefaul()
    !modal ? e.target.reset():true;
    
    const legajo = e.target.nvoLegajo.value;
    const nombre = e.target.nvoNombre.value;
    const apellido = e.target.nvoApellido.value;
    const TipoDNI = e.target.nvoTipoDNI.value;
    const DNI = e.target.nvoDNI.value;
    const Email = e.target.nvoEmail.value;
    const CodAreaTel = e.target.nvoCodAreaTel.value;
    const Telefono = e.target.nvoTelefono.value;
    const Direccion = e.target.nvoDireccion.value;
    const Localidad = e.target.nvoLocalidad.value;
    const Telefono = e.target.nvoTelefono.value;
    

    




    

  }

  

  return (
    <div className=" hero max-h-screen bg-transparent">
      <div className="hero-content text-center">
        <div className="max-w-screen">
          <h1 className="text-5xl font-bold">Datos Alumnos</h1>
          <div className="flex justify-between">
            <Link to="/nuevo-alumno">
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
            <table className="table table-zebra">
              {/* head */}
              <thead>
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
                      <tr key={e}>
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
                          <div
                            id="modal form-control"
                            className="fixed w-0.75 h-0.75 m-0 p-0 top-0 left-0  flex flex-row justify-center bg-white border border-cyan-400"
                          >
                            <form 
                            onSubmit={(e)=>modificarDataAlumnos(e)}
                            className="flex flex-row justify-center"
                            >

                            
                            <div className="flex flex-col justify-around border w-full">
                              <span className="label-text  text-black">
                                Legajo
                              </span>
                              <input
                              id="nvoLegajo"
                                type="numero"
                                placeholder={e.legajo}
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                              />
                              <span className="label-text  text-black">
                                Nombre
                              </span>
                              <input
                              id="nvoNombre"

                                type="text"
                                placeholder={e.nombre}
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                              />
                              <span className="label-text  text-black">
                                Apellido
                              </span>
                              <input
                              id="nvoApellido"

                                type="text"
                                placeholder={e.apellido}
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                              />
                              <span className="label-text   text-black">
                                Tipo DNI
                              </span>
                              <input
                              id="nvoTipoDNI"

                                type="text"
                                placeholder={e.tipoDNI}
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                              />
                              <span className="label-text   text-black">
                                DNI
                              </span>
                              <input
                              id="nvoDNI"

                                type="numero"
                                placeholder={e.dni}
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                              />
                              <span className="label-text  text-black">
                                Email
                              </span>
                              <input
                              id="nvoEmail"

                                type="text"
                                placeholder={e.email}
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                              />

                              <span className="label-text   text-black">
                                Cod area Tel
                              </span>
                              <input
                              id="nvoCodAreaTel"

                                type="numero"
                                placeholder={e.codAreaTel}
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                              />

                              <span className="label-text   text-black">
                                Telefono
                              </span>
                              <input
                              id="nvoTelefono"

                                type="numero"
                                placeholder={e.telefono}
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                              />

                              <button className="btn max-w-xs bg-blue-600 text-white">
                                Aceptar
                              </button>
                            </div>

                            <div className="flex flex-col justify-around w-full ">
                              <span className="label-text text-black">
                                Direccion
                              </span>
                              <input
                              id="nvoDireccion"

                                type="text"
                                placeholder={e.direccion}
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                              />
                              <span className="label-text text-black">
                                Localidad
                              </span>
                              <input
                              id="nvoLocalidad"

                                type="text"
                                placeholder={e.localidad}
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                              />

                              <span className="label-text   text-black">
                                Cod area Tel Extra
                              </span>
                              <input
                              id="nvoCodAreaTelExtra"

                                type="numero"
                                placeholder={e.codAreaTelExtra}
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                              />

                              <span className="label-text   text-black">
                                Telefono Extra
                              </span>
                              <input
                              id="nvoTelefonoExtra"

                                type="numero"
                                placeholder={e.telefonoExtra}
                                className="input input-bordered w-full max-w-lg bg-white text-black border border-blue-600"
                              />

                              <button className="btn  max-w-xs bg-blue-600 text-white">
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
