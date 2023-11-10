import { useContext } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMostrarCursos } from "../services/homeAdmin.services";
import UserContext from "../context/user.context";

export default function HomeAdmin() {
  const userContext = useContext(UserContext);

  const rol = userContext.userData.id_rol;

 // userContext.setUserState({ ...userContext, cursoId: 1 });

  const { data /*  isLoading, error */ } = useQuery(
    ["mostrarCursos"],
    getMostrarCursos
  );

  return (
    <div className="hero min-h-screen bg-white ">
      <div className="hero-content  border-2 border-indigo-600 text-center ">
        <div className="max-w-md flex flex-col">
          {rol !== 1 ? (
            <h1 className="text-3xl font-bold text-black ">Inicio Docente</h1>
          ) : (
            <h1 className="text-3xl font-bold  text-black">
              Inicio Administrador
            </h1>
          )}

          <Link to={"/app/datos-alumnos"}>
            <button className="btn bg-blue-600 text-white m-2 w-full hover:bg-blue-300 hover:text-black ">
              Alumnos
            </button>
          </Link>

          <select
            id="id-curso"
            className="select w-full max-w-xs bg-transparent rounded-full border-black"
          >
            {!data
              ? false
              : data.map((e) => (
                  <option value={e.id_curso} key={e.id_curso}>
                    {e.nombre.toUpperCase()}
                  </option>
                ))}
          </select>
          <Link to={"/app/asistencia-alumnos"}>
            <button className="btn bg-blue-600 text-white m-2 w-full hover:bg-blue-300 hover:text-black ">
              Asistencia
            </button>
          </Link>

          <Link to={"/app/datos-cursos"}>
            <button className="btn bg-blue-600 text-white m-2 w-full hover:bg-blue-300 hover:text-black ">
              Cursos
            </button>
          </Link>
          {rol == 1 ? (
            <Link to={"/app/datos-docentes"}>
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
