import { tryAltaDocente } from "../services/AltaDocente.services"
//import { tryAltaDocente } from "../services/AltaDocente.services";
import "./AltaDocente.scss"


export default function AltaDocente() {
  async function post(e) {
    e.preventDefault();
    const tipoDoc = e.target.tipoDoc.value;
    const dni = e.target.dni.value;
    const nombreDoc = e.target.nombreDoc.value;
    const apellidoDoc = e.target.apellidoDoc.value;
    const contra = e.target.contra.value;
    const direc = e.target.direc.value;
    const local = e.target.local.value;
    const tele = e.target.telex.value;
    const rol = e.target.rol.value;
    const telex = e.target.tele.value;
    const correo = e.target.correo.value;

    const data = {
      tipo: tipoDoc,
      dni: dni,
      nombre: nombreDoc,
      apellido: apellidoDoc,
      contrasena: contra,
      direccion: direc,
      localidad: local,
      telefono: tele,
      rol: rol,
      telExt: telex,
      email: correo

    };


    const res = await tryAltaDocente(data);

    return res;




  }

  function limpiarFormulario(e) {
    e.target.reset();
  }

  return (
    <>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content text-center  border-4 border-black rounded-2xl w-full m-4">
          <div className="">
            <h2 className="text-3xl text-black font-bold mb-8">Alta Docente</h2>

            <form onSubmit={e => post(e)} className="grid grid-cols-2 gap-4 ">
              <div id="contenedor1" className="flex flex-col m-2 ">
                <label className="label">
                  <span className="label-text  text-black">Tipo De Doc</span>

                </label>
                <div id="" className="from-control  flex flex-row   ">
                  <select id="tipoDoc" defaultValue={"Tipo de Documento"} className="select bg-white rounded-full text-black border border-black select-ghost w-full max-w-xs">
                    <option  >Tipo de Documento</option>
                    <option>DU</option>
                    <option>LC</option>
                    <option>LE</option>
                  </select>

                </div>



                <label className="label">
                  <span className="label-text text-black">Documento</span>

                  <span className="label-text text-xs  text-black mr-20">(Sin puntos)</span>

                </label>
                <input
                  id="dni"
                  type="text"
                  placeholder="Ingrese su Numero de Documento"
                  className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                />
                <div className="content-center m-2 ml-5 pl-36">
                  <button className="btn btn-sm  rounded-full bg-blue-600 text-white">
                    Buscar
                  </button>
                </div>



                <label className="label">
                  <span className="label-text  text-black">Nombre Docente</span>
                </label>
                <input
                  id="nombreDoc"
                  type="text"
                  placeholder="Ingrese su Nombre "
                  className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                />

                <label className="label">
                  <span className="label-text  text-black">
                    Apellido Docente
                  </span>
                </label>
                <input
                  id="apellidoDoc"
                  type="text"
                  placeholder="Ingrese su Apellido"
                  className="input rounded-full text-black w-full max-w-xs bg-white border-black"
                />
                <label className="label">
                  <span className="label-text text-black">Crea tu contraseña</span>
                  <span className="label-text text-xs  text-black pr-36">(Minimo 8 caracteres)</span>
                </label>
                <input
                  id="contra"
                  type="password"
                  placeholder="Ingrese una Contraseña"
                  className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                />
              </div>

              <div id="contenedor2" className="pl-10 ">
                <div className=" ">
                  <label className="label">
                    <span className="label-text text-black">Localidad</span>
                  </label>
                  <input
                    id="local"
                    type="text"
                    placeholder="Localidad"
                    className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text text-black">Direccion</span>
                  </label>
                  <input
                    id="direc"
                    type="text"
                    placeholder="Direccion"
                    className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text  text-black">Telefono</span>
                    <span className="label-text text-xs  text-black">(Sin guines ni puntos)</span>
                  </label>
                  <input
                    id="tele"
                    type="number" name="numero"
                    placeholder="Numero de Telefono"
                    className="input rounded-full text-black w-full max-w-xs bg-white border-black"
                  />
                  <label className="label">
                    <span className="label-text  text-black">Tel Extra</span>
                    <span className="label-text text-xs  text-black">(Sin guines ni puntos)</span>

                  </label>
                  <input
                    id="telex"
                    type="number"
                    placeholder="Numero Extra"
                    className="input rounded-full text-black w-full max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text  text-black">Rol</span>
                  </label>
                  <select id="rol" defaultValue={"Tipo de Rol"} className="select rounded-full bg-white text-black border border-black select-ghost w-full max-w-xs">
                    <option  >Tipo de Rol</option>
                    <option>Admin</option>
                    <option>Docente</option>

                  </select>


                  <label className="label">
                    <span className="label-text  text-black">Email</span>
                  </label>
                  <input
                    id="correo"
                    type="email"
                    placeholder="Ingrese su Email"
                    className="input rounded-full text-black w-full max-w-xs bg-white border-black"
                  />
                </div>
              </div>
              <div className="content-center m-2 ">
                <button onClick={(e) => limpiarFormulario(e)} type="reset" className="btn bg-blue-600 rounded-full text-white">Cancelar</button>
              </div>
              <div className="content-center m-2">
                <button className="btn bg-blue-600 rounded-full text-white">
                  Aceptar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

