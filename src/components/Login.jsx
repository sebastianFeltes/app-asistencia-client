import Logo from "../assets/logocfl.png";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../services/Login.services";

function Login() {
  const navigate = useNavigate();

  async function ingresar(ev) {
    ev.preventDefault();
    let usuario = ev.target.dni.value;
    let pass = ev.target.password.value;
    let res = await postLogin(usuario, pass);
    console.log(res);
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
                  <input
                    id="dni"
                    type="number"
                    placeholder="Ingrese su DNI"
                    className="input input-bordered rounded-full bg-white"
                  />
                </div>
                <div className="form-control">
                  <label className="label"></label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Ingrese su contraseña"
                    className="input input-bordered rounded-full bg-white"
                  />
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
