import { Link } from "react-router-dom";
import Logo from "../assets/logocfl.png";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-around navbar  bg-[#093F7C] rounded-b-3xl">
      <div className="">
        <img src={Logo} className="w-16 rounded-full" />
      </div>
      <div className="flex-1 gap-2">
        <form className="w-full flex flex-row justify-evenly my-2">
          <button className="btn btn-primary rounded-full bg-[#0184F5] px-24 ">
            <Link to={"/"}>Cursos</Link>
          </button>
          <button className="btn btn-primary rounded-full bg-[#0184F5] px-24 ">
            <Link to={"/"}>Alumnos</Link>
          </button>
        </form>

        <p>BIENVENID@ [NOMBRE DE USUARIO]</p>
        <div className="dropdown dropdown-end"></div>
      </div>
    </div>
  );
}
