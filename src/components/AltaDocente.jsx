import { useContext } from "react";
import { tryAltaDocente } from "../services/AltaDocente.services"
//import { tryAltaDocente } from "../services/AltaDocente.services";
import "./AltaDocente.scss"
import UserContext from "../context/user.context";


export default function AltaDocente() {

  const userContext = useContext(UserContext);
  const usuario = userContext.userData;

  async function post(e) {
    e.preventDefault();
    console.log("recibido")
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
      nombre: nombreDoc.toLowerCase(),
      apellido: apellidoDoc.toLowerCase(),
      password: contra,
      direccion: direc.toLowerCase(),
      localidad: local.toLowerCase(),
      car_telefono: parseInt(codi1),
      telefono: parseInt(tele),
      car_tel_extra: parseInt(codi2),
      telefono_extra: parseInt(telex),
      id_rol: rol == "ADMIN" ? 2 : 1,
      email: correo,
      activo: true
    };


    if (contra === contra2) {
      const res = await tryAltaDocente(data);

      if (res.message) {

        e.target.reset();
        return alert(res.message)
      }


    } else {
      alert("las contraseñas deben ser iguales")
    }




  }

  function limpiarFormulario(e) {
    e.target.reset();
  }

  return (
    usuario.id_rol == 2 ?
      <>

        {/* contenedor1 */}
        <div className="hero min-h-screen bg-white">
          <div className="hero-content text-center  border-4 border-black rounded-2xl w-full m-4">
            <div className="w-full ">

              <h2 className="text-3xl text-black font-bold ">ALTA DOCENTE</h2>

              <form onSubmit={e => post(e)} className="flex flex-row flex-wrap justify-around w-full   ">
                <div id="contenedor1" className="flex flex-col grow-2 w-1/3 m-2 p-0 text-center ">

                  <div className=" p-0   flex flex-row w-3/4">
                    <div id="" className="from-control mb-0 mt-auto mr-2  flex flex-col flex-grow-0 ">
                      <label className="label">
                        <span className="label-text ms-1 text-black">TIPO DE DOC</span>

                      </label>

                      <select id="tipoDoc" defaultValue={"Tipo de Documento"} className="m-0 b w-full select text-black bg-transparent mr-auto rounded-full border-black ">
                        <option  >Tipo  </option>
                        <option>DU</option>
                        <option>LC</option>
                        <option>LE</option>
                      </select>
                    </div>

                    <div className="mb-0 mt-auto p-0 flex-grow-2 align-bottom ">
                      <div id="" className="from-control  flex flex-col  ">
                        <label className="label">
                          <span className="label-text ms-1 text-black">NRO DE DOCUMENTO</span>

                        </label>

                        <input
                          id="dni"
                          type="number"
                          placeholder="N°"
                          className="m-0 w-full input text-black  bg-transparent mr-auto rounded-full border-black "
                        />

                      </div>



                    </div>

                  </div>



                  <label className="label">
                    <span className="label-text  text-black">NOMBRE DOCENTE</span>
                  </label>
                  <input
                    id="nombreDoc"
                    type="text"
                    placeholder="Ingrese su nombre "
                    className="input rounded-full w-3/4 text-black max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text  text-black">
                      APELLIDO DOCENTE
                    </span>
                  </label>
                  <input
                    id="apellidoDoc"
                    type="text"
                    placeholder="Ingrese su apellido"
                    className="input rounded-full text-black w-full max-w-xs bg-white border-black"
                  />
                  <label className="label">
                    <span className="label-text text-black">CREA TU CONTRASEÑA
                      <span className="label-text text-xs text-black ml-10 ">*Minimo 8 caracteres</span>
                    </span>
                  </label>
                  <input
                    id="contra"
                    type="password"
                    placeholder="Ingrese una Contraseña"
                    className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                  />


                  <label className="label">
                    <span className="label-text text-black">CONFIRMAR CONTRASEÑA
                      <span className="label-text text-xs text-black ml-5 ">*Minimo 8 caracteres</span>
                    </span>
                  </label>
                  <input
                    id="contra2"
                    type="password"
                    placeholder="Repetir Contraseña"
                    className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text text-black ">LOCALIDAD</span>
                  </label>
                  <input
                    id="local"
                    type="text"
                    placeholder="Ingrese su localidad"
                    className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                  />

                </div>

                {/* contenedor2 */}

                <div id="contenedor2" className=" flex flex-col  grow-2 w-1/3 m-2 text-center">
                  <div className=" ">


                    <label className="label">
                      <span className="label-text text-black ml-12">DIRECCION</span>
                    </label>
                    <input
                      id="direc"
                      type="text"
                      placeholder="Ingrese su direccion"
                      className="input rounded-full w-full text-black max-w-xs bg-white border-black"
                    />

                    <div className="flex">
                      <div>
                        <label className="label">
                          <span className="label-text  text-black ml-12">COD </span>
                        </label>

                        <input
                          id="codi1"
                          type="number"
                          placeholder="Ej:221"
                          className="input rounded-full text-black  w-28 ml-10 bg-white border-black"

                        />



                      </div>
                      <div>
                        <label className="label">
                          <span className="label-text  text-black ml-4">TELEFONO<span>*sin guiones ni puntos</span>
                          </span>
                        </label>

                        <input
                          id="tele"
                          type="number" name="numero"
                          placeholder="Ej:6766891"
                          maxLength="9"
                          className="input rounded-full text-black w-48 ml-2 max-w-xs m-0 bg-white border-black"
                        />

                      </div>


                    </div>



                    <div className="flex">
                      <div>
                        <label className="label">
                          <span className="label-text  text-black ml-12">COD </span>

                        </label>
                        <input
                          id="codi2"
                          type="number"
                          placeholder="Ej:221"
                          className="input rounded-full text-black  w-28 ml-10 bg-white border-black"

                        />

                      </div>
                      <div>
                        <label className="label">
                          <span className="label-text  text-black ml-4">TEL EXTRA <span>*sin guiones ni puntos</span>
                          </span>

                        </label>
                        <input
                          id="telex"
                          type="number"
                          placeholder="Ej:6766891"
                          className="input rounded-full text-black w-48 ml-2 max-w-xs m-0 bg-white border-black"

                        />



                      </div>



                    </div>





                    <label className="label">
                      <span className="label-text  text-black ml-12">EMAIL</span>
                    </label>
                    <input
                      id="correo"
                      type="email"
                      placeholder="Ingrese su Email"
                      className="input rounded-full text-black w-full max-w-xs bg-white border-black"
                    />

                    <label className="label">
                      <span className="label-text  text-black ml-12">ROL</span>
                    </label>
                    <select id="rol" defaultValue={"Tipo de Rol"} className="select rounded-full bg-white text-black border border-black select-ghost w-full max-w-xs">
                      <option>Tipo de Rol</option>
                      <option>Admin</option>
                      <option>Docente</option>

                    </select>
                  </div>
                </div>
                <div className=" flex flex-row grow-3 w-full justify-evenly  m-2 text-center ">

                  <div className="content-center m-2 ">
                    <button onClick={(e) => limpiarFormulario(e)} type="reset" className="btn bg-blue-600 w-48 rounded-full border-none text-white">CANCELAR</button>
                  </div>
                  <div className="content-center m-2">
                    <button type="submit" className="btn bg-blue-600 rounded-full w-48 border-none  text-white">
                      ACEPTAR
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </> : false
  );
}


