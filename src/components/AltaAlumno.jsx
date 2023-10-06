import { useState } from "react";
import postAltaAlumno, {
  getAltaAlumno,
} from "../services/altaAlumnos.services";
import "./altaAlumno.scss";
export default function AltaAlumno() {
  const [alumnoExistente, setAlumnoExistente] = useState(undefined);
  //FUNCION PARA ENVIAR DATOS

  async function post(e) {
    e.preventDefault();
    const nombreAlumno = e.target.nombreAlumno.value;
    const apellidoAlumno = e.target.apellidoAlumno.value;
    const tipoDocumento = e.target.tipoDocumento.value;
    const dniAlumno = e.target.dniAlumno.value;
    const direccionAlumno = e.target.direccionAlumno.value;
    const localidadAlumno = e.target.localidadAlumno.value;
    const emailAlumno = e.target.emailAlumno.value;
    const telAlumno = e.target.telAlumno.value;
    const telCaracteristica = e.target.telCaracteristica.value;
    const telCaracterExtra = e.target.telCaracterExtra.value;
    const telExtra = e.target.telExtra.value;
    const nroLegajoAlumno = e.target.nroLegajoAlumno.value;
    const docDni = e.target.docDni.checked;
    const docPlanilla = e.target.docPlanilla.checked;
    const docAnalitico = e.target.docAnalitico.checked;
    const cursoAlumno = e.target.cursoAlumno.value;

    //PAQUETE DE DATOS
    const data = {
      nombre: nombreAlumno,
      apellido: apellidoAlumno,
      tipoDoc: tipoDocumento,
      dni: parseInt(dniAlumno),
      direccion: direccionAlumno,
      localidad: localidadAlumno,
      email: emailAlumno,
      tel: parseInt(telAlumno),
      telCar: parseInt(telCaracteristica),
      telCarExt: parseInt(telCaracterExtra),
      telExt: parseInt(telExtra),
      numLegajo: parseInt(nroLegajoAlumno),
      documentacionDni: docDni,
      documentacionPlanilla: docPlanilla,
      documentacionAnalitico: docAnalitico,
      curso: cursoAlumno,
    };

    const res = await postAltaAlumno(data);
    console.log(res);
    if (res == "recibido") {
      e.target.reset();
      return alert("alumno cargado exitosamente");
    }
  }

  //FUNCION CANCELAR
  function limpiarFormulario(e) {
    e.target.reset();
  }

  //FUNCION BUSCAR ALUMNO
  async function getBuscarAlumno(e) {
    e.preventDefault();
    const dni = e.target.value;

    const res = await getAltaAlumno(dni);
    if (res) {
      setAlumnoExistente(res);
    }
    return res;
  }

  //FUNCION SELECCIONAR MAS DE UN CURSO
  function agregarCurso(e) {
    e;
  }
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content text-center w-full">
        <div className="border-4 border-black w-full rounded-3xl">
          <div className=" border-black w-full ">
            <h2 className="text-black text-3xl font-bold mb-8 m-2 justify-center">
              ALTA ALUMNO
            </h2>

            {/* FORMULARIO */}
            <form onSubmit={(e) => post(e)}>
              {/* DIV CONTENEDOR */}
              <div className="grid grid-cols-2 gap-4 m-2 ">
                {/* DIV IZQUIERDO */}
                <div
                  id="contenedor1"
                  className=" border-black flex flex-col m-2 "
                >
                  <div className=" flex">
                    <label className="label">
                      <span className="label-text ms-1 text-black">
                        TIPO DE DOCUMENTO
                      </span>
                    </label>
                    <label className="label flex">
                      <p className="label-text text-black ms-4">
                        DNI DEL ALUMNO:
                        <span className="label-text-alt text-xs text-black m-2">
                          *sin puntos o guiones
                        </span>
                      </p>
                    </label>
                  </div>
                  <div className="form-control flex flex-row">
                    {/* DEPENDIENDO CUAL SELECCIONE EN LA OPCION ANTERIOR,SE AUTOCOMPLETE CON F O M O NADA  */}
                    <select
                      id="tipoDocumento"
                      className=" m-0 w-40 select max-w-xs bg-transparent rounded-full border-black"
                    >
                      {
                        <option disabled selected>
                          Tipo DNI
                        </option>
                      }
                      <option>DU</option>
                      <option>LC</option>
                      <option>LE</option>
                    </select>
                    <div className="m-0 p-0">
                      <div className="flex m-0">
                        <input
                          id="dniAlumno"
                          onBlur={(e) => getBuscarAlumno(e)}
                          type="text"
                          placeholder="Nº"
                          className="w-40 ms-0.5 rounded-full input input-bordered input-info  max-w-xs  bg-white border-black"
                        />

                        {/* BOTON DE BUSCAR */}
                        {/* <button onClick={(e) => getBuscarAlumno(e)} type="" className="ms-1 btn bg-blue-600 text-black rounded-full w-24 border-none">Buscar</button> */}
                      </div>
                    </div>
                  </div>

                  <label className="label">
                    <span className="label-text text-black">
                      NOMBRE ALUMNO:
                    </span>
                  </label>
                  <input
                    id="nombreAlumno"
                    defaultValue={alumnoExistente ? alumnoExistente.nombre : ""}
                    type="text"
                    placeholder="Ingrese su nombre"
                    className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text text-black">
                      APELLIDO DEL ALUMNO:
                    </span>
                  </label>
                  <input
                    id="apellidoAlumno"
                    defaultValue={
                      alumnoExistente ? alumnoExistente.apellido : ""
                    }
                    type="text"
                    placeholder="Ingrese su apellido"
                    className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text text-black">LOCALIDAD:</span>
                  </label>
                  <input
                    id="localidadAlumno"
                    defaultValue={
                      alumnoExistente ? alumnoExistente.localidad : ""
                    }
                    type="text"
                    placeholder="Ingrese su localidad"
                    className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text text-black">DIRECCION:</span>
                  </label>
                  <input
                    id="direccionAlumno"
                    defaultValue={
                      alumnoExistente ? alumnoExistente.direccion : ""
                    }
                    type="text"
                    placeholder="Ingrese su direccion"
                    className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black"
                  />
                </div>

                {/* DIV DERECHO */}
                <div className=" border-black flex flex-col m-2 ">
                  <div className=" flex">
                    <label className="label ">
                      <p className="label-text ms-1 text-black">
                        TEL CARACT:{" "}
                        <span className="label-text text-xs text-black ">
                          *sin 0
                        </span>{" "}
                      </p>
                    </label>
                    <label className="label">
                      <p className="label-text ms-10 text-black">
                        TEL ALUMNO:
                        <span className="label-text-alt text-xs text-black m-2">
                          *sin 15
                        </span>
                      </p>
                    </label>
                  </div>
                  <div className="form-control flex flex-row">
                    <input
                      id="telCaracteristica"
                      defaultValue={
                        alumnoExistente ? alumnoExistente.telCar : ""
                      }
                      type="number"
                      placeholder="Ej: 221"
                      className="rounded-full input input-bordered input-info max-w-xs w-40 bg-white border-black"
                    />

                    <input
                      id="telAlumno"
                      defaultValue={alumnoExistente ? alumnoExistente.tel : ""}
                      type="number"
                      placeholder="Ingrese su tel"
                      className="ms-0.5 rounded-full input input-bordered input-info w-40 max-w-xs  bg-white border-black"
                    />
                  </div>

                  <div className=" flex">
                    <label className="label ">
                      <p className="label-text ms-1 text-black">
                        TEL CARACT:{" "}
                        <span className="label-text text-xs text-black ">
                          *sin 0
                        </span>{" "}
                      </p>
                    </label>
                    <label className="label">
                      <p className="label-text ms-10 text-black">
                        TEL EXTRA:
                        <span className="label-text-alt text-xs text-black m-2">
                          *sin 15
                        </span>
                      </p>
                    </label>
                  </div>
                  <div className="form-control flex flex-row">
                    <input
                      id="telCaracterExtra"
                      defaultValue={
                        alumnoExistente ? alumnoExistente.telCarExt : ""
                      }
                      type="number"
                      placeholder="Ej: 221"
                      className="rounded-full input input-bordered input-info max-w-xs w-40 bg-white border-black"
                    />

                    <input
                      id="telExtra"
                      defaultValue={
                        alumnoExistente ? alumnoExistente.telExt : ""
                      }
                      type="number"
                      placeholder="Ingrese tel"
                      className="ms-0.5 rounded-full input input-bordered input-info w-40 max-w-xs  bg-white border-black"
                    />
                  </div>

                  <label className="label">
                    <span className="label-text text-black">
                      NRO DE LEGAJO:
                    </span>
                  </label>
                  <input
                    id="nroLegajoAlumno"
                    defaultValue={
                      alumnoExistente ? alumnoExistente.numLegajo : ""
                    }
                    type="number"
                    placeholder="Ingrese su numero de legajo"
                    className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black"
                  />

                  <label className="label ">
                    <span className="label-text text-black">
                      EMAIL DEL ALUMNO:
                    </span>
                  </label>
                  <input
                    id="emailAlumno"
                    defaultValue={alumnoExistente ? alumnoExistente.email : ""}
                    type="email"
                    placeholder="Ingrese su email"
                    className="rounded-full input input-info w-full max-w-xs  bg-white border-black"
                  />

                  {/* DIV CURSOS */}
                  <div className="m-0 p-0">
                    <label className="label">
                      <span className="label-text text-black">CURSO:</span>
                    </label>
                    <div className="flex m-0">
                      <select
                        id="cursoAlumno"
                        className="select w-full max-w-xs bg-transparent rounded-full border-black"
                      >
                        <option disabled selected>
                          Curso
                        </option>
                      </select>
                      {/*  BOTON PARA AGREGAR MAS DE UN CURSO */}
                      <button
                        onClick={(e) => agregarCurso(e)}
                        type="button"
                        className="btn ml-2 bg-blue-600 text-black rounded-full w-12 border-none"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/*   DIV DOCUMENTACION */}
                  <div className="form-control flex flex-row">
                    <label className="label">
                      <span className="label-text text-black">
                        DOCUMENTACION:
                      </span>
                    </label>

                    <label className="label cursor-pointer">
                      <span className=" text-black label-text">DNI</span>
                      <input
                        id="docDni"
                        type="checkbox"
                        className="checkbox border-black m-2 "
                      />
                    </label>

                    <label className="label cursor-pointer">
                      <span className=" text-black label-text">Planilla</span>
                      <input
                        id="docPlanilla"
                        type="checkbox"
                        className="checkbox  border-black m-2"
                      />
                    </label>

                    <label className="label cursor-pointer">
                      <span className="label-text text-black">Analitico</span>
                      <input
                        id="docAnalitico"
                        type="checkbox"
                        className="checkbox  border-black m-2"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/*  BOTONES DE "ACEPTAR" Y "CANCELAR" */}
              <div className="grid grid-cols-2 gap-4">
                <div className="content-center m-2">
                  <button
                    onClick={(e) => limpiarFormulario(e)}
                    type="reset"
                    className="btn  bg-blue-600 text-black rounded-full w-48 border-none"
                  >
                    Cancelar
                  </button>
                </div>

                <div className="content-center m-2">
                  <button
                    type="submit"
                    className="btn bg-blue-600 text-black rounded-full w-48 border-none "
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
