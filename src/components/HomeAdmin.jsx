import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMostrarCursos } from "../services/homeAdmin.services";
import UserContext from "../context/user.context";

export default function HomeAdmin() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const rol = userContext.userData.id_rol;

  function mostrarAsistenciaDelCurso(e) {
    e.preventDefault();
    const id_curso = e.target.idCurso.value;
    window.localStorage.setItem("id_curso", id_curso);
    //console.log(id_curso);
    return navigate("/app/asistencia-alumnos");
  }

  const { data /*  isLoading, error */ } = useQuery(
    ["mostrarCursos"],
    getMostrarCursos
  );
  const [cursos, setCursos] = useState();
  //console.log(data);
  useEffect(() => {
    //console.log(data);
    data ? setCursos(data.dataCursos) : false;
  }, [data]);

  return (
    <div className="hero min-h-screen bg-white ">
      <div className="hero-content  border-2 border-indigo-600 text-center ">
        <form
          onSubmit={(e) => mostrarAsistenciaDelCurso(e)}
          className="max-w-md flex flex-col align-middle"
        >
          {rol == 3 ? (
            <h1 className="text-3xl my-1 font-bold text-black ">
              Inicio Docente
            </h1>
          ) : rol == 2 ? (
            <h1 className="text-3xl font-bold my-1  text-black">
              Inicio Administrador
            </h1>
          ) : (
            <h1 className="text-3xl font-bold my-1  text-black">
              Inicio Super-Administrador
            </h1>
          )}
          {rol != 3 ? (
            <Link to={"/app/datos-alumnos"}>
              <button className="btn my-1 bg-blue-600 text-white w-full hover:bg-blue-300 hover:text-black ">
                Alumnos
              </button>
            </Link>
          ) : (
            false
          )}
          <div className=" my-1 border-2 border-blue-300  rounded-sm p-1 hover:border-2 hover:border-blue-600">
            <h2 className="text-black text-md underline decoration-blue-600">
              Asistencia
            </h2>
            <select
              id="idCurso"
              className="select text-black my-1 w-full bg-white rounded-full border-black"
            >
              {!cursos
                ? false
                : cursos.map((e) => (
                    <option value={e.id_curso} key={e.id_curso}>
                      {e.nombre.toUpperCase()}
                    </option>
                  ))}
            </select>
            <button
              type="submit"
              className="btn my-1 bg-blue-600 text-white w-full hover:bg-blue-300 hover:text-black "
            >
              Ver Planilla
            </button>
          </div>
          {/* 					</Link> */}
          {rol != 3 ? (
            <Link to={"/app/datos-cursos"}>
              <button className="btn my-1 bg-blue-600 text-white w-full hover:bg-blue-300 hover:text-black ">
                Cursos
              </button>
            </Link>
          ) : (
            false
          )}
          {rol == 1 ? (
            <Link to={"/app/datos-docentes"}>
              <button className="btn my-1 bg-blue-600 text-white w-full hover:bg-blue-300 hover:text-black ">
                Docentes
              </button>
            </Link>
          ) : (
            false
          )}
          {rol == 1 ? (
            <Link to={"/app/lector-qr"}>
              <button className="btn my-1 bg-blue-600 text-white w-full hover:bg-blue-300 hover:text-black ">
                Lector QR
              </button>
            </Link>
          ) : (
            false
          )}
        </form>
      </div>
    </div>
  );
}
