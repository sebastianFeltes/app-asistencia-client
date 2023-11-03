import Logo from "../assets/logocfl.png";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../services/Login.services";
import { useContext, useState } from "react";
import UserContext from "../context/user.context";

function Login() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  async function ingresar(ev) {
    ev.preventDefault();
    let usuario = ev.target.dni.value;
    let pass = ev.target.password.value;
    let res = await postLogin(usuario, pass);
    if (res.id_docente) {
      console.log(res);
      userContext.setUserState(res);
      return navigate("/app/home-admin");
    }else{
      alert(res.message)
    }
  }

  const [dniOk, setDniOk] = useState(false);
  function dniChecker(e) {
    e.preventDefault();
    const dni = e.target.value;
    if (dni.length >= 7) {
      setDniOk(true);
    } else {
      setDniOk(false);
    }

  }
  const [passOk, setPassOk] = useState(false);
  function passChecker(e) {
    e.preventDefault();
    const pass = e.target.value;
    if (pass.length >= 4) {
      setPassOk(true);
    } else {
      setPassOk(false);
    }

  }

  return (
    <>
      <div className="hero min-h-screen bg-[#093F7C]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm  bg-transparent">
            <form onSubmit={(ev) => ingresar(ev)}>
              <div className="card-body">
                <div className="flex flex-row justify-center">
                  <img src={Logo} className="w-36 rounded-full " />
                </div>
                <div className="flex justify-center text-white">
                  <h1>REGISTRO ASISTENCIA CFL 404</h1>
                </div>
                <div className="form-control">
                  <label className="label"></label>
                  <span className="">
                    <input
                      onChange={(e) => dniChecker(e)}
                      id="dni"
                      type="number"
                      placeholder="Ingrese su DNI"
                      className={`input input-bordered rounded-full bg-white w-64 ${dniOk ? "focus:border-2 focus:border-sky-400" : "focus:border-2 focus:border-red-600"}`}
                    />{" "}

                  </span>
                </div>
                <div className="form-control">
                  <label className="label"></label>
                  <span>
                    <input
                      onChange={(e) => passChecker(e)}
                      id="password"
                      type="password"
                      placeholder="Ingrese su contraseña"
                      className={`input input-bordered rounded-full bg-white w-64 ${passOk ? "focus:border-2 focus:border-sky-400" : "focus:border-2 focus:border-red-600"}`}
                    />{" "}

                  </span>
                  <label className="label">
                    <span className="label-text-alt"></span>
                    <Link to={"/recuperar-contraseña"}>
                      <span className="label-text-alt text-gray-300 decoration underline hover:text-white">
                        Recuperar contraseña
                      </span>
                    </Link>
                  </label>
                </div>
                <div className="flex flex-row justify-center form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-wide btn-primary rounded-full bg-[#0184F5]"
                  >
                    INGRESAR
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
