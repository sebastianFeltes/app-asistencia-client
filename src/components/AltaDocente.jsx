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
    const contra2 = e.target.contra2.value;
    const direc = e.target.direc.value;
    const local = e.target.local.value;
    const codi1 = e.target.codi1.value
    const tele = e.target.tele.value;
    const codi2 = e.target.codi2.value;
    const telex = e.target.telex.value;
    const rol = e.target.rol.value;
    const correo = e.target.correo.value;

    const data = {
      tipo_dni: tipoDoc,
      nro_dni: parseInt(dni),
      nombre: nombreDoc,
      apellido: apellidoDoc,
      password: contra,
      direccion: direc,
      localidad: local,
      car_telefono: parseInt(codi1),
      telefono: parseInt(tele),
      car_tel_extra: parseInt(codi2),
      telefono_extra: parseInt(telex),
      id_rol: rol == "ADMIN" ? 2 : 1,
      email: correo,
      activo: true
    };

    console.log(data)
    if (contra === contra2) {
      const res = await tryAltaDocente(data);
      return alert(res.message)
      
    } else {
      alert("las contraseñas deben ser iguales")
    }




  }

  function limpiarFormulario(e) {
    e.target.reset();
  }

  return (
    <>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content text-center  border-4 border-black rounded-2xl w-full m-4">
          <div className="w-full ">

            <h2 className="text-3xl text-black font-bold mb-8">Alta Docente</h2>

            <form onSubmit={e => post(e)} className="flex flex-row flex-wrap justify-around w-full   ">
              <div id="contenedor1" className="flex flex-col grow-2 w-1/3 m-2 text-center ">


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
                  <span className="label-text text-black">Documento
                    <span className="label-text text-xs  text-black ml-44">(Sin puntos)</span>
                  </span>



                </label>
                <input
                  id="dni"
                  type="text"
                  placeholder="Ingrese su Numero de Documento"
                  className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                />
                <div className="content-center m-2 ml-36">
                  <button type="reset" className="btn btn-sm border-none rounded-full bg-blue-600 text-white">
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
                  <span className="label-text text-black">Crea tu contraseña
                    <span className="label-text text-xs text-black ml-20 ">(Minimo 8 caracteres)</span>
                  </span>
                </label>
                <input
                  id="contra"
                  type="password"
                  placeholder="Ingrese una Contraseña"
                  className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                />


                <label className="label">
                  <span className="label-text text-black">Confirmar  contraseña
                    <span className="label-text text-xs text-black ml-20 ">(Minimo 8 caracteres)</span>
                  </span>
                </label>
                <input
                  id="contra2"
                  type="password"
                  placeholder="Repetir Contraseña"
                  className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                />

                <label className="label">
                  <span className="label-text text-black ml-12">Localidad</span>
                </label>
                <input
                  id="local"
                  type="text"
                  placeholder="Localidad"
                  className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                />

              </div>

              <div id="contenedor2" className=" flex flex-col grow-2 w-1/3 m-2 text-center">
                <div className=" ">


                  <label className="label">
                    <span className="label-text text-black ml-12">Direccion</span>
                  </label>
                  <input
                    id="direc"
                    type="text"
                    placeholder="Direccion"
                    className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text  text-black ml-12">Codigo de area </span>

                  </label>
                  <input
                    id="codi1"
                    type="number"
                    placeholder="Ej:221"
                    className="input rounded-full text-black mr-60 max-w-xs w-20 bg-white border-black"

                  />

                  <label className="label">
                    <span className="label-text  text-black ml-12">Telefono
                      <span className="label-text text-xs  text-black ml-36 ">(Sin guines ni puntos)</span>
                    </span>
                  </label>
                  <input
                    id="tele"
                    type="number" name="numero"
                    placeholder="Numero de Telefono"
                    maxLength="9"
                    className="input rounded-full text-black w-full max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text  text-black ml-12">Codigo de area </span>

                  </label>
                  <input
                    id="codi2"
                    type="number"
                    placeholder="Ej:221"
                    className="input rounded-full text-black w-20 mr-60 max-w-xs bg-white border-black"

                  />

                  <label className="label">
                    <span className="label-text  text-black ml-12">Tel Extra
                      <span className="label-text text-xs  text-black ml-36 "  >(Sin guines ni puntos)</span>
                    </span>

                  </label>
                  <input
                    id="telex"
                    type="number"
                    placeholder="Numero Extra"
                    className="input rounded-full text-black w-full max-w-xs bg-white border-black"

                  />


                  <label className="label">
                    <span className="label-text  text-black ml-12">Email</span>
                  </label>
                  <input
                    id="correo"
                    type="email"
                    placeholder="Ingrese su Email"
                    className="input rounded-full text-black w-full max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text  text-black ml-12">Rol</span>
                  </label>
                  <select id="rol" defaultValue={"Tipo de Rol"} className="select rounded-full bg-white text-black border border-black select-ghost w-full max-w-xs">
                    <option  >Tipo de Rol</option>
                    <option>Admin</option>
                    <option>Docente</option>

                  </select>
                </div>
              </div>
              <div className=" flex flex-row grow-3 w-full justify-evenly  m-2 text-center ">

                <div className="content-center m-2 ">
                  <button onClick={(e) => limpiarFormulario(e)} type="reset" className="btn bg-blue-600 rounded-full border-none text-white">Cancelar</button>
                </div>
                <div className="content-center m-2">
                  <button type="submit" className="btn bg-blue-600 rounded-full border-none  text-white">
                    Aceptar
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

