import { useQuery } from "@tanstack/react-query";
import { getAlumnos } from "../services/DataAlumnos.services";
import { Link } from "react-router-dom";

function DatosAlumnos() {
  const { data, isLoading, error } = useQuery(["getAlumnos"], getAlumnos);
  !data ? false : console.log(data);

  return (
    <div className=" hero max-h-screen bg-transparent">
      <div className="hero-content text-center">
        <div className="max-w-screen">
          <h1 className="text-5xl font-bold">Datos Alumnos</h1>
          <div className="flex justify-between">
            <Link to="/nuevo-alumno">
            <button className="btn">Nuevo Alumno</button>
            </Link>
            <Link to="/historial-alumno">
            <button className="btn">historial Alumno</button>
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
                  <th>Datos extra</th>
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
                        <td></td>
                        {/* boton Editar del HISTORIAL ALUMNO */}
                        <td>
                          <button className="btn">Editar</button>
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
