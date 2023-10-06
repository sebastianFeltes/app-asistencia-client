import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import postAltaAlumno, {
  getAltaAlumno,
} from "../services/altaAlumnos.services";
import "./altaAlumno.scss";
import { getMostrarCursos } from "../services/homeAdmin.services";
export default function AltaAlumno() {

  const [alumnoExistente, setAlumnoExistente] = useState(undefined);
  const { data /*  isLoading, error */ } = useQuery(["mostrarCursos"], getMostrarCursos
  );


  //TODO:FUNCION PARA ENVIAR DATOS(POST)

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

    //PAQUETE DE DATOS PARA EL POST
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

  //TODO:FUNCION CANCELAR Y LIMPIE EL FORMULARIO
  function limpiarFormulario(e) {
    e.target.reset();
  }

  //TODO:FUNCION BUSCAR ALUMNO(GET)
  async function getBuscarAlumno(e) {
    e.preventDefault();
    const dni = e.target.value;

    const res = await getAltaAlumno(dni);
    if (res) {
      setAlumnoExistente(res);
    }
    return res;
  }

  //TODO:FUNCION SELECCIONAR MAS DE UN CURSO
  function agregarCurso(e) {
    e;
  }
  return (
    <div className="hero min-h-screen bg-white overflow-hidden h-full">
      <div className="hero-content text-center m-4 border-4 border-black w-full rounded-3xl ">
        <div className=" ">
          <div className=" border-black w-full ">
            <h2 className="text-black text-4xl font-bold mb-8 justify-center">
              ALTA ALUMNO
            </h2>

            {/* FORMULARIO */}
            <form onSubmit={(e) => post(e)}>
              {/* DIV CONTENEDOR PADRE */}
              <div className="grid grid-cols-2 w-full gap-4 m-2 ">
                {/* DIV CONTENEDOR HIJO IZQUIERDO */}
                <div
                  id="contenedor1"
                  className=" border-black flex flex-col m-2 w-full "
                >
                  <div className=" flex">{/* DIV DE SPAN "TIPO DNI Y DNI" */}
                    <label className="label">
                      <span className="label-text ms-1 text-black">
                        TIPO DE DOCUMENTO
                      </span>
                    </label>
                    <label className="label flex">
                      <p className="label-text text-black ms-4">
                        DNI DEL ALUMNO:
                        <span className="label-text-alt text-xs text-black m-1">
                          *sin puntos ni guiones
                        </span>
                      </p>
                    </label>
                  </div>

                  <div className="form-control flex flex-row">{/* DIV DE INPUTS "TIPO DNI Y DNI" */}
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
                    placeholder="Ingrese nombre del alumno"
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
                    placeholder="Ingrese apellido del alumno"
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
                    placeholder="Ingrese localidad"
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
                    placeholder="Ingrese Domicilio"
                    className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black"
                  />
                </div>

                {/* DIV DERECHO */}
                <div className=" border-black flex flex-col m-2 w-full ">
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
                          *sin 15 ni guiones
                        </span>
                      </p>
                    </label>
                  </div>
                  <div className="form-control flex flex-row">
                    <input
                      id="telCaracteristica"
                      defaultValue={
                        alumnoExistente ? alumnoExistente.car_telefono : ""
                      }
                      type="number"
                      placeholder="Ej: 221"
                      className="rounded-full input input-bordered input-info max-w-xs w-40 bg-white border-black"
                    />

                    <input
                      id="telAlumno"
                      defaultValue={alumnoExistente ? alumnoExistente.telefono : ""}
                      type="number"
                      placeholder="Ingrese tel"
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
                          *sin 15 ni guiones
                        </span>
                      </p>
                    </label>
                  </div>
                  <div className="form-control flex flex-row">
                    <input
                      id="telCaracterExtra"
                      defaultValue={
                        alumnoExistente ? alumnoExistente.car_tel_extra : ""
                      }
                      type="number"
                      placeholder="Ej: 221"
                      className="rounded-full input input-bordered input-info max-w-xs w-40 bg-white border-black"
                    />

                    <input
                      id="telExtra"
                      defaultValue={
                        alumnoExistente ? alumnoExistente.telefono_extra : ""
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
                      alumnoExistente ? alumnoExistente.nro_legajo : ""
                    }
                    type="number"
                    placeholder="Ingrese numero de legajo"
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
                    placeholder="Ingrese email"
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
                        {!data ? false : data.map((e) => (


                          <option key={e.id_curso}>
                            {e.nombre.toUpperCase()}
                          </option>

                        ))}
                      </select>
                      {/*  BOTON PARA AGREGAR MAS DE UN CURSO */}
                      <button
                        onClick={(e) => agregarCurso(e)}
                        type="button"
                        className="btn ml-2 bg-blue-600 text-white rounded-full w-12 border-none hover:bg-blue-300 hover:text-black "
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
                        defaultValue={
                          alumnoExistente ? alumnoExistente.fotoc_dni : ""
                        }
                        id="docDni"
                        type="checkbox"
                        className="checkbox border-black m-2 "
                      />
                    </label>

                    <label className="label cursor-pointer">
                      <span className=" text-black label-text">Planilla</span>
                      <input
                        defaultValue={
                          alumnoExistente ? alumnoExistente.planilla_ins : ""
                        }
                        id="docPlanilla"
                        type="checkbox"
                        className="checkbox  border-black m-2"
                      />
                    </label>

                    <label className="label cursor-pointer">
                      <span className="label-text text-black">Analitico</span>
                      <input
                        defaultValue={
                          alumnoExistente ? alumnoExistente.fotoc_analitico
                            : ""
                        }
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

                  <Link to={"/datos-alumnos"}> <button
                    onClick={(e) => limpiarFormulario(e)}
                    type="reset"
                    className="btn  bg-blue-600 text-white rounded-full w-48 border-none hover:bg-blue-300 hover:text-black "
                  >
                    Cancelar
                  </button></Link>
                </div>

                <div className="content-center m-2">
                  <button
                    type="submit"
                    className="btn bg-blue-600 text-white rounded-full w-48 border-none hover:bg-blue-300 hover:text-black  "
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </form>

            <Link to={"/generador-qr"}><button className="text-blue-600">GENERAR QR</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
