import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import postAltaAlumno, {
  getAltaAlumno,
  postAltaAlumnosModificado,
} from "../services/altaAlumnos.services";
import "./altaAlumno.scss";
import { getMostrarCursos } from "../services/homeAdmin.services";
import UserContext from "../context/user.context";

export default function AltaAlumno() {
  const userContext = useContext(UserContext);
  const usuario = userContext.userData;
  const [cursos, setCursos] = useState(undefined);
  const [alumnoExistente, setAlumnoExistente] = useState(undefined); //TODO:useState para traer los datos de los alumnos si existen en la Db
  const [alumnoNuevo, setAlumnoNuevo] = useState(true); //TODO: useState para que elija que funcion post ejecutar
  const [cursosSeleccionados, setCursosSeleccionados] = useState([]); //TODO:useState para guardar mas de un curso
  const [data, setData] = useState();

  async function getCursos() {
    const res = await getMostrarCursos();
    //res.dias.length > 0 ? setDiasCursos(res.dias) : false;
    console.log(res);
    res.dataCursos.length > 0 ? setData(res.dataCursos) : false;
  }

  useEffect(() => {
    getCursos();
    //console.log(data);
  }, []);

  //TODO:FUNCION PARA CARGAR UN ALUMNO NUEVO(POST)

  async function post(e) {
    e.preventDefault();
    const nombreAlumno = e.target.nombreAlumno.value;
    const apellidoAlumno = e.target.apellidoAlumno.value;
    const tipoDocumento = e.target.tipoDocumento.value;
    const dniAlumno = e.target.dniAlumno.value;
    const direccionAlumno = e.target.direccionAlumno.value;
    const localidadAlumno = e.target.localidadAlumno.value;
    const fechaNac = e.target.fechaNac.value;
    const emailAlumno = e.target.emailAlumno.value;
    const telAlumno = e.target.telAlumno.value;
    const telCaracteristica = e.target.telCaracteristica.value;
    const telCaracterExtra = e.target.telCaracterExtra.value;
    const telExtra = e.target.telExtra.value;
    const nroLegajoAlumno = e.target.nroLegajoAlumno.value;
    const docDni = e.target.docDni.checked;
    const docPlanilla = e.target.docPlanilla.checked;
    const docAnalitico = e.target.docAnalitico.checked;
    const cursoAlumno = cursosSeleccionados.map((e) => e.id_curso);
    const fechaNacFormateada = fechaNac.split("-").reverse().join("/");

    //PAQUETE DE DATOS PARA EL POST
    const data = {
      nombre: nombreAlumno.toLowerCase(),
      apellido: apellidoAlumno.toLowerCase(),
      tipo_dni: tipoDocumento.toLowerCase(),
      nro_dni: parseInt(dniAlumno),
      direccion: direccionAlumno.toLowerCase(),
      localidad: localidadAlumno.toLowerCase(),
      fecha_nac: fechaNacFormateada,
      email: emailAlumno,
      telefono: parseInt(telAlumno),
      car_telefono: parseInt(telCaracteristica),
      car_tel_extra: parseInt(telCaracterExtra),
      telefono_extra: parseInt(telExtra),
      nro_legajo: parseInt(nroLegajoAlumno),
      fotoc_dni: docDni ? 1 : 0,
      planilla_ins: docPlanilla ? 1 : 0,
      fotoc_analitico: docAnalitico ? 1 : 0,
      cursos: cursoAlumno,
      activo: true,
    };

    //CONDICIONAL DE SI EL ALUMNO EXISTE EN LA DB MODIFIQUE LOS DATOS Y SI ES NUEVO LO CREE
    if (!alumnoNuevo) {
      const id_alumno = alumnoExistente.id_alumno
        ? alumnoExistente.id_alumno
        : undefined;

      //LIMPIAR FORMULARIO CUANDO EL ALUMNO SE MODIFIQUE EXITOSAMENTE
      const res = await postAltaAlumnosModificado({
        ...data,
        id_alumno: id_alumno,
      });
      if (res == "alumno modificado") {
        e.target.reset(e);
        return alert("Alumno modificado exitosamente");
      }
    } else {
      //LIMPIAR FORMULARIO CUANDO EL ALUMNO SE CARGUE EXITOSAMENTE
      const res = await postAltaAlumno(data);
      if (res == "recibido") {
        e.target.reset();
        return alert("Alumno cargado exitosamente");
      }
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
      setAlumnoNuevo(false);
    }
    return res;
  }

  //TODO:FUNCION SELECCIONAR MAS DE UN CURSO
  function agregarCurso(e) {
    e.preventDefault();
    const cursoSeleccionado = e.target.form.cursoAlumno.value;
    const idCursoSeleccionado = cursoSeleccionado.split("-")[0];
    const nombreCursoSeleccionado = cursoSeleccionado.split("-")[1];
    const dataCursoSeleccionado = {
      id_curso: idCursoSeleccionado,
      nombre_curso: nombreCursoSeleccionado,
    };
    setCursosSeleccionados([...cursosSeleccionados, dataCursoSeleccionado]);
  }

  return usuario.id_rol == 1 || usuario.id_rol == 2 ? (
    <div className="hero min-h-screen bg-white overflow-hidden h-full">
      <div className="hero-content text-center m-4 border-4 border-black w-screen rounded-3xl ">
        <div className=" w-10/12">
          <div className=" border-black w- ">
            <h2 className="text-black text-4xl font-bold mb-8 justify-center">
              ALTA ALUMNO
            </h2>

            {/* FORMULARIO */}
            <form onSubmit={(e) => post(e)}>
              {/* DIV CONTENEDOR PADRE */}
              <div className="grid grid-cols-2 w-full gap-4 m-6 ">
                {/* DIV CONTENEDOR HIJO IZQUIERDO */}
                <div
                  id="contenedor1"
                  className=" border-black flex flex-col m-2 w-full  "
                >
                  <div className=" flex w-full">
                    {/* DIV DE SPAN "TIPO DNI Y DNI" */}
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

                  <div className="form-control flex flex-row w-full">
                    {/* DIV DE INPUTS "TIPO DNI Y DNI" */}
                    <select
                      id="tipoDocumento"
                      selected={alumnoExistente ? alumnoExistente.tipo_dni : ""}
                      className=" m-0 w-40 select max-w-xs text-black  bg-transparent rounded-full border-black"
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
                          className="w-40 ms-0.5 rounded-full input input-bordered input-info  max-w-xs text-black  bg-white border-black"
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
                    className="text-black rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black"
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
                    className="rounded-full text-black  input input-bordered input-info w-full max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text text-black">FECHA NAC:</span>
                  </label>
                  <input
                    id="fechaNac"
                    defaultValue={
                      alumnoExistente
                        ? alumnoExistente.fecha_nac
                            .split("/")
                            .reverse()
                            .join("-")
                        : ""
                    }
                    type="date"
                    placeholder="Ingrese fecha de nacimiento"
                    className="rounded-full input text-black  input-bordered input-info w-full max-w-xs bg-white border-black"
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
                    className="rounded-full input text-black  input-bordered input-info w-full max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text text-black">DIRECCIÓN:</span>
                  </label>
                  <input
                    id="direccionAlumno"
                    defaultValue={
                      alumnoExistente ? alumnoExistente.direccion : ""
                    }
                    type="text"
                    placeholder="Ingrese domicilio"
                    className="rounded-full input text-black  input-bordered input-info w-full max-w-xs bg-white border-black"
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
                      className="rounded-full text-black  input input-bordered input-info max-w-xs w-40 bg-white border-black"
                    />

                    <input
                      id="telAlumno"
                      defaultValue={
                        alumnoExistente ? alumnoExistente.telefono : ""
                      }
                      type="number"
                      placeholder="Ingrese tel"
                      className="ms-0.5 rounded-full text-black  input input-bordered input-info w-40 max-w-xs  bg-white border-black"
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
                      className="rounded-full input input-bordered text-black  input-info max-w-xs w-40 bg-white border-black"
                    />

                    <input
                      id="telExtra"
                      defaultValue={
                        alumnoExistente ? alumnoExistente.telefono_extra : ""
                      }
                      type="number"
                      placeholder="Ingrese tel"
                      className="ms-0.5 rounded-full input text-black  input-bordered input-info w-40 max-w-xs  bg-white border-black"
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
                    className="rounded-full input input-bordered text-black  input-info w-full max-w-xs bg-white border-black"
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
                    className="rounded-full input input-info text-black  w-full max-w-xs  bg-white border-black"
                  />

                  {/* DIV CURSOS HIJO  */}
                  <div className="m-0 p-0">
                    <label className="label">
                      <span className="label-text text-black">CURSO:</span>
                    </label>
                    <div className="flex m-0">
                      <select
                        id="cursoAlumno"
                        className="select w-full max-w-xs text-black bg-transparent rounded-full border-black"
                      >
                        <option disabled selected>
                          Curso
                        </option>
                        {/*TODO: MAPEO DE CURSOS */}
                        {!data
                          ? false
                          : data.map((e) => (
                              <option
                                key={e.id_curso}
                                value={
                                  e.id_curso + "-" + e.nombre.toUpperCase()
                                }
                              >
                                {e.nombre.toUpperCase()}
                              </option>
                            ))}
                      </select>
                      {/* TODO: BOTON PARA AGREGAR MAS DE UN CURSO */}
                      <button
                        onClick={(e) => agregarCurso(e)}
                        type="button"
                        className="btn ml-2 bg-blue-600 text-white rounded-full w-12 border-none hover:bg-blue-300 hover:text-black "
                      >
                        +
                      </button>
                      <div className="ml-2 w-10">
                        <ul className="grid grid-cols-1 gap-2">
                          {/* TODO:MAP PARA AGREGAR MAS DE UN CURSO */}
                          {!cursosSeleccionados
                            ? false
                            : cursosSeleccionados.map((e) => (
                                <li
                                  key={e.id_curso}
                                  className="text-black text-xs flex "
                                >
                                  {"•" + e.nombre_curso}
                                </li>
                              ))}
                        </ul>
                      </div>
                    </div>
                    {/*   DIV DOCUMENTACION */}
                    <div className="form-control flex flex-row ">
                      <label className="label">
                        <span className="label-text text-black">
                          DOCUMENTACIÓN:
                        </span>
                      </label>
                    </div>

                    <div className="flex  border  border-black w-80 rounded-full h-12">
                      <label className="label cursor-pointer ml-3">
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
                        <span className=" text-black label-text">PLANILLA</span>
                        <input
                          defaultValue={
                            alumnoExistente ? alumnoExistente.planilla_ins : ""
                          }
                          id="docPlanilla"
                          type="checkbox"
                          className="checkbox  border-black m-2 "
                        />
                      </label>

                      <label className="label cursor-pointer">
                        <span className="label-text text-black">ANALíTICO</span>
                        <input
                          defaultValue={
                            alumnoExistente
                              ? alumnoExistente.fotoc_analitico
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
              </div>

              {/* DIV PADRE DE LOS BOTONES DE "ACEPTAR" Y "CANCELAR" */}
              <div className="grid grid-cols-2 gap-4">
                <div className="content-center m-2">
                  {/* TODO:BOTON DE ACEPTAR */}
                  <button
                    type="submit"
                    className="btn bg-blue-600 text-white rounded-full w-48 border-none hover:bg-blue-300 hover:text-black  "
                  >
                    Aceptar
                  </button>
                </div>
                <div className="content-center m-2">
                  {/* TODO:BOTON CANCELAR LINKEADO A /datos-alumnos */}

                  <Link to={"/app/datos-alumnos"}>
                    {" "}
                    <button
                      onClick={(e) => limpiarFormulario(e)}
                      type="reset"
                      className="btn  bg-blue-600 text-white rounded-full w-48 border-none hover:bg-blue-300 hover:text-black "
                    >
                      Cancelar
                    </button>
                  </Link>
                </div>
              </div>
            </form>

            {/* TODO:BOTON DE GENERAR QR */}
            <Link to={"/app/generador-qr"}>
              <button className="text-blue-600 ">GENERAR QR</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    false
  );
}
