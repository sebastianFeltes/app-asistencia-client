import { Link } from "react-router-dom";
import { getMostrarCursos } from "../services/homeAdmin.services";
import { useQuery } from "@tanstack/react-query";
export default function HomeAdmin() {
  let rol = "DOCENTE";
  
  const { data /*  isLoading, error */ } = useQuery( ["mostrarCursos"], getMostrarCursos
  );
 
  return (
    <div className="hero min-h-screen bg-white ">
      <div className="hero-content  border-2 border-indigo-600 text-center">
        <div className="max-w-md flex flex-col">
          {rol == "DOCENTE" ? (
            <h1 className="text-3xl font-bold text-black ">Inicio Docente</h1>
          ) : (
            <h1 className="text-3xl font-bold  text-black">Inicio Administrador</h1>
          )}

          <Link to={"/datos-alumnos"}>
            <button className="btn bg-blue-600 text-white m-2 w-full hover:bg-blue-300 hover:text-black ">
              Alumnos
            </button>
          </Link>

          <select className="select select-bordered w-full max-w-xs"  >
            {!data ? false :data.map((e) => ( 
              
            
            <option key={e.id_curso}>
            {e.nombre}
            </option>
            
            )) }
          </select>
          <Link to={"/asistencia-alumnos"}>
            <button className="btn bg-blue-600 text-white m-2 w-full hover:bg-blue-300 hover:text-black ">
              Asistencia
            </button>
          </Link>

          <Link to={"/datos-cursos"}>
            <button className="btn bg-blue-600 text-white m-2 w-full hover:bg-blue-300 hover:text-black ">
              Cursos
            </button>
          </Link>
          {rol != "DOCENTE" ? (
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
