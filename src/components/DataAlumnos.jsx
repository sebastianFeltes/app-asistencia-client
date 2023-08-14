import { useQuery } from "@tanstack/react-query";
import { getAlumnos } from "../services/DataAlumnos.services";

function DatosAlumnos() {
  const { data, isLoading, error } = useQuery(["getAlumnos"], getAlumnos);
  !data ? false : console.log(data);

  return (
    <div className=" hero max-h-screen bg-transparent">
      <div className="hero-content text-center">
        <div className="max-w-screen">
          <h1 className="text-5xl font-bold">Datos Alumnos</h1>
          <div className="flex justify-between">
            <button className="btn">Nuevo Alumno</button>
            <button className="btn">Historial Alumno</button>
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
                        <td></td>
                      </tr>
                    ))}
                {/* {/* row 1 */}
                {/* <tr>
                  <th>1</th>
                  <td>11111</td>
                  <td>Alumno</td>
                  <td>Alumno</td>
                  <td>11111111</td>
                  <td>Calle 111 N°111</td>
                  <td>1111111111</td>
                  <td>ejemplo@ejemplo</td>
                  <td>
                    <select className="select select-bordered w-full max-w-xs">
                      <option disabled selected>
                        
                      </option>
                      <option>Telefono Extra: 22222222222</option>
                      <option>Documentación Completa</option>
                    </select>
                  </td>
                  <td>
                    <button className="btn">Edit</button>
                  </td>
                </tr> */}
                {/* row 2 */}
                {/*                 <tr>
                  <th>2</th>
                  <td>11111</td>
                  <td>Alumno</td>
                  <td>Alumno</td>
                  <td>11111111</td>
                  <td>Calle 111 N°111</td>
                  <td>1111111111</td>
                  <td>ejemplo@ejemplo</td>
                  <td>
                  <select className="select select-bordered w-full max-w-xs">
                      <option disabled selected>
                        
                      </option>
                      <option>Telefono Extra: 22222222222</option>
                      <option>Documentación Completa</option>
                    </select>
                  </td>
                  <td>
                    <button className="btn">Edit</button>
                  </td>
                </tr> }
 */}{" "}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatosAlumnos;
