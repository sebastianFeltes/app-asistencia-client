//import { tryAltaDocente } from "../services/AltaDocente.services"
import "./AltaDocente.scss"

function AltaDocente() {
  async function post(e) {
    e.preventDefault();
    const dni = e.target.dni.value;
    const tipoDoc = e.target.tipoDoc.value;
    const nombreDoc = e.target.nombreDoc.value;
    const apellidoDoc = e.target.apellidoDoc.value;
    const direc = e.target.direc.value;
    const local = e.target.local.value;
    const tele = e.target.telex.value;
    const rol = e.target.rol.value;
    const telex = e.target.tele.value;
    const correo = e.target.correo.value;

    const data = {
      dni: dni,
      tipo:tipoDoc,
      nombre: nombreDoc,
      apellido: apellidoDoc,
      direccion: direc,
      localidad: local,
      telefono: tele,
      rol: rol,
      telExt: telex,
      email: correo

    };
    /* const res = await tryAltaDocente(data);
    return res;  */
    console.log(data)


  }
  return (
    <>
      <div className="hero min-h-screen bg-gray-100">
        <div className="hero-content text-center w-full border border-black">
          <div className="w-full">
            <h2 className="text-3xl text-black font-bold mb-8">Alta Docente</h2>

            <form onSubmit={e => post(e)} className="grid grid-cols-2 gap-4 ">
              <div id="contenedor1" className="flex flex-col m-2 ">
                <label className="label">
                  <span className="label-text  text-black">Tipo De Doc</span>
                </label>
                <div id="" className="from-control  flex flex-row m-1  ">
                  <select id="tipoDoc" className="select bg-white text-black border border-black select-ghost w-full max-w-xs">
                     <option defaultValue={"tipo"} >elegi gato</option>
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
                  <span className="label-text text-black">Direccion</span>
                </label>
                <input
                  id="direc"
                  type="text"
                  placeholder="Direccion"
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
                    <span className="label-text  text-black">Telefono</span>
                  </label>
                  <input
                    id="tele"
                    type="number" name="numero"
                    placeholder="Telefono"
                    className="input input-bordered text-black w-full max-w-xs bg-white border-black"
                  />
                  <label className="label">
                    <span className="label-text  text-black">Tel Extra</span>
                  </label>
                  <input
                    id="telex"
                    type="number"
                    placeholder="Extra"
                    className="input input-bordered text-black w-full max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text  text-black">Rol</span>
                  </label>
                  <input
                    id="rol"
                    type="text"
                    placeholder="Rol"
                    className="input input-bordered text-black w-full max-w-xs bg-white border-black"
                  />


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
                <button className="btn bg-blue-900 text-black">Cancelar</button>
              </div>
              <div className="content-center m-2">
                <button type="submit" className="btn bg-blue-900 text-black">
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
export default AltaDocente;
