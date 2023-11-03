import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logocfl.png";
import UserContext from "../context/user.context";

export default function NavBar() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const nombre = userContext.userData.nombre.toUpperCase();
  //const apellido = userContext.apellidoUsuario.toUpperCase().split("", 1);
  function logOut(e) {
    e.preventDefault();
    navigate("/");
    userContext.setUserState(undefined);
    return alert("Se ha cerrado la sesión");
  }
  return (
    <div className={"flex flex-row justify-around navbar  bg-[#093F7C] "}>
      <div className="">
        <Link to={"/app/home-admin"}>
          <img src={Logo} className="w-16 rounded-full" />
        </Link>
      </div>
      <div className="flex-1 gap-2">
        <form className="w-full flex flex-row justify-evenly my-2">
          <Link to={"/app/datos-cursos"}>
            <button className="btn btn-primary rounded-full bg-[#0184F5] px-24 ">
              Cursos
            </button>
          </Link>
          <Link to={"/app/datos-alumnos"}>
            <button className="btn btn-primary rounded-full bg-[#0184F5] px-24 ">
              Alumnos
            </button>
          </Link>
        </form>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="">
            <div className="">
              {nombre}
            </div>
          </label>

          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#093F7C] rounded-box w-52 "
          >
            <li>
              <a className="justify-between">
                Perfil
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <button onClick={(e) => logOut(e)}>Cerrar Sesión</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
