import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logocfl.png";
import { UserContext } from "../context/User.context";

export default function NavBar() {
  const UserData = useContext(UserContext);
  const nombre = UserData.nombreUsuario.toUpperCase().split("", 1);
  const apellido = UserData.apellidoUsuario.toUpperCase().split("", 1);

  return (
    <div className="flex flex-row justify-around navbar  bg-[#093F7C] ">
      <div className="">
        <Link to={"/home-admin"}><img src={Logo} className="w-16 rounded-full" /></Link>
        
      </div>
      <div className="flex-1 gap-2">
        <form className="w-full flex flex-row justify-evenly my-2">
          <button className="btn btn-primary rounded-full bg-[#0184F5] px-24 ">
            <Link to={"/datos-cursos"}>Cursos</Link>
          </button>
          <button className="btn btn-primary rounded-full bg-[#0184F5] px-24 ">
            <Link to={"/datos-alumnos"}>Alumnos</Link>
          </button>
        </form>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <span className=" text-center align-middle text-4xl rounded-full h-16  w-16 p-0 m-0 border border-white">
                {nombre + apellido}
              </span>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
