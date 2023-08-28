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

  function limpiarFormulario (e) {
    e.target.reset();
  }

  return (
    <>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content text-center w-full border border-black">
          <div className="w-full">
            <h2 className="text-3xl text-black font-bold mb-8">Alta Docente</h2>

            <form onSubmit={e => post(e)} className="grid grid-cols-2 gap-4 ">
              <div id="contenedor1" className="flex flex-col m-2 ">
                <label className="label">
                  <span className="label-text  text-black">Tipo De Doc</span>
                </label>
                <div id="" className="from-control  flex flex-row   ">
                  <select id="tipoDoc" defaultValue={"Tipo de Documento"} className="select bg-white text-black border border-black select-ghost w-full max-w-xs">
                    <option  >Tipo de Documento</option>
                    <option>DU</option>
                    <option>LC</option>
                    <option>LE</option>
                  </select>

                </div>

               

                <label className="label">
                  <span className="label-text  text-black">Documento</span>
                </label>
                <input
                  id="dni"
                  type="text"
                  placeholder="N°"
                  className="input input-bordered w-full text-black max-w-xs bg-white border-black"
                  />
                  <div className="content-center m-2 w-30 ">
                <button  className="btn btn-sm bg-sky-400 text-black">
                  Buscar
                </button>
              </div>
                  


                <label className="label">
                  <span className="label-text  text-black">Nombre Docente</span>
                </label>
                <input
                  id="nombreDoc"
                  type="text"
                  placeholder="Nombre"
                  className="input input-bordered w-full text-black max-w-xs bg-white border-black"
                />

                <label className="label">
                  <span className="label-text  text-black">
                    Apellido Docente
                  </span>
                </label>
                <input
                  id="apellidoDoc"
                  type="text"
                  placeholder="Apellido"
                  className="input input-bordered text-black w-full max-w-xs bg-white border-black"
                />
                <label className="label">
                  <span className="label-text text-black">Crea tu contraseña</span>
                  <span className="label-text text-xs  text-black pr-72">(Minimo 8 caracteres)</span>
                </label>
                <input
                  id="contra"
                  type="password"
                  placeholder="**********"
                  className="input input-bordered w-full text-black max-w-xs bg-white border-black"
                />




              </div>

              <div id="contenedor2" className="grid grid-cols-2 gap-4  m-3 ">
                <div className=" ">
                  <label className="label">
                    <span className="label-text text-black">Localidad</span>
                  </label>
                  <input
                    id="local"
                    type="text"
                    placeholder="Localidad"
                    className="input input-bordered w-full text-black max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text text-black">Direccion</span>
                  </label>
                  <input
                    id="direc"
                    type="text"
                    placeholder="Direccion"
                    className="input input-bordered w-full text-black max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text  text-black">Telefono</span>
                    <span className="label-text text-xs  text-black">(Sin guines ni puntos)</span>
                  </label>
                  <input
                    id="tele"
                    type="number" name="numero"
                    placeholder="Telefono"
                    className="input input-bordered text-black w-full max-w-xs bg-white border-black"
                  />
                  <label className="label">
                    <span className="label-text  text-black">Tel Extra</span>
                    <span className="label-text text-xs  text-black">(Sin guines ni puntos)</span>

                  </label>
                  <input
                    id="telex"
                    type="number"
                    placeholder="Extra"
                    className="input input-bordered text-black w-full max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text  text-black">Rol</span>
                    <span className="label-text text-xs  text-black">Seleccione un rol</span>
                  </label>
                  <select id="rol" defaultValue={"Tipo de Rol"} className="select bg-white text-black border border-black select-ghost w-full max-w-xs">
                    <option  >Tipo de Rol</option>
                    <option>Admin</option>
                    <option>Docente</option>

                  </select>


                  <label className="label">
                    <span className="label-text  text-black">Email</span>
                  </label>
                  <input
                    id="correo"
                    type="text"
                    placeholder="Email"
                    className="input input-bordered text-black w-full max-w-xs bg-white border-black"
                  />
                </div>
              </div>
              <div className="content-center m-2">
                <button  onClick={(e) => limpiarFormulario(e)} type="reset" className="btn bg-sky-400 text-black">Cancelar</button>
              </div>
              <div className="content-center m-2">
                <button className="btn bg-sky-400 text-black">
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

