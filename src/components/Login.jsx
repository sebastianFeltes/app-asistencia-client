import Logo from "../assets/logocfl.png";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../services/Login.services";
import check from "../assets/round check mark.png";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  async function ingresar(ev) {
    ev.preventDefault();
    let usuario = ev.target.dni.value;
    let pass = ev.target.password.value;
    let res = await postLogin(usuario, pass);
    if (res.status == 200) {
      return navigate("/home-admin");
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
    console.log(dni);
  }
  const [passOk, setPassOk] = useState(false);
  function passChecker(e) {
    e.preventDefault();
    const dni = e.target.value;
    if (dni.length >= 7) {
      setPassOk(true);
    } else {
      setPassOk(false);
    }
    console.log(dni);
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
                <div>
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
                      className="input input-bordered rounded-full bg-white w-64"
                    />{" "}
                    {dniOk ? (
                      <img
                        className={`w-12 inline absolute `}
                        src={check}
                        alt=""
                      />
                    ) : (
                      false
                    )}
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
                      className="input input-bordered rounded-full bg-white w-64"
                    />{" "}
                    {passOk ? (
                      <img
                        className={`w-12 inline absolute `}
                        src={check}
                        alt=""
                      />
                    ) : (
                      false
                    )}
                  </span>
                  <label className="label">
                    <span className="label-text-alt"></span>
                    <span className="label-text-alt">
                      <Link>Recuperar contraseña</Link>
                    </span>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-full bg-[#0184F5]"
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
