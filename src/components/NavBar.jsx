import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo-CFL404-color.png";
import UserContext from "../context/user.context";

export default function NavBar() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const userData = userContext.userData;
  const avatar = `${userData.nombre.split("")[0]}${userData.apellido.split("")[0]}`;
  //const apellido = userContext.apellidoUsuario.toUpperCase().split("", 1);
  function logOut(e) {
    e.preventDefault();
    navigate("/");
    userContext.setUserState(undefined);
    return alert("Se ha cerrado la sesión");
  }
  return (
    <div className={"flex flex-row justify-around navbar  bg-[#132841] "}>
      <div className="">
        <Link to={"/app/home-admin"}>
          <img src={Logo} className="w-24 m-0 p-0 rounded-full hover:bg-[#132852]" />
        </Link>
      </div>
      <div className="flex-1 gap-2">
        <form className="w-full flex flex-row justify-evenly my-2">
          <Link to={"/app/datos-cursos"}>
            <button className="btn btn-primary rounded-full bg-blue-600 hover:bg-[#274c6d] hover:text-white border-none px-24 ">
              Cursos
            </button>
          </Link>
          <Link to={"/app/datos-docentes"}>
            <button className="btn btn-primary rounded-full bg-blue-600 hover:bg-[#274c6d] hover:text-white border-none px-24 ">
              Docentes
            </button>
          </Link>
          <Link to={"/app/datos-alumnos"}>
            <button className="btn btn-primary rounded-full bg-blue-600 hover:bg-[#274c6d] hover:text-white px-24 border-none">
              Alumnos
            </button>
          </Link>
        </form>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="">
            <div className="text-gray-100 w-12 h-12 text-center rounded-full m-0 p-1 text-2xl bg-blue-600 hover:bg-[#274c6d] hover:text-white">
              {avatar}
            </div>
          </label>

          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#093F7C] rounded-box w-52 text-white"
          >
            <li>
              <a className="justify-between">
                Perfil
                <span className="badge">Próximamente</span>
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
