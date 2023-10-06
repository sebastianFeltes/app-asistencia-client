import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User.context";

export default function HomeAdmin() {
  const user = useContext(UserContext)

  const rol = user.rolUsuario;
  console.log(rol)

  return (
    <div className="hero min-h-screen bg-white ">
      <div className="hero-content  border-2 border-indigo-600 text-center">
        <div className="max-w-md flex flex-col">
          {rol === 1 ? (
            <h1 className="text-3xl font-bold ">Inicio Docente</h1>
          ) : (
            <h1 className="text-3xl font-bold ">Inicio Administrador</h1>
          )}

          <Link to={"/datos-alumnos"}>
            <button className="btn bg-blue-600 text-white m-2 w-full hover:bg-blue-300 hover:text-black ">
              Alumnos
            </button>
          </Link>

          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Seleccione un Curso
            </option>
            <option>Docente</option>
            <option>Greedo</option>
          </select>
          <Link to={"/asistencia-alumnos"}>
            <button className="btn bg-blue-600 text-white m-2 w-full hover:bg-blue-300 hover:text-black ">
              Asistencia
            </button>
          </Link>

          <Link to={"/data-cursos"}>
            <button className="btn bg-blue-600 text-white m-2 w-full hover:bg-blue-300 hover:text-black ">
              Cursos
            </button>
          </Link>
          {rol ===2 ? (
            <Link to={"/docentes"}>
              <button className="btn bg-blue-600 text-white m-2 w-full hover:bg-blue-300 hover:text-black ">
                Docentes
              </button>
            </Link>
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  );
}
