import { useState, useEffect, useRef } from "react";
import { buscarAlumnoPorID } from "../services/GestionQR.services";
import Logo from "../assets/logo-CFL404-color.png";

export default function LectorQR() {
  const [mostrarData, setMostrarData] = useState(false);
  const [mostrarError, setMostrarError] = useState(false);
  const [relectura, setRelectura] = useState(false);
  const [alumno, setAlumno] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const sendInfo = async (e) => {
    e.preventDefault();
    let currentValue = e.target.value;
    if (currentValue.includes(".")) {
      let findedNum = parseInt(e.target.value.split(".")[0]);
      //TODO: enviar findedNum al servidor para traer los datos del alumno
      const res = await buscarAlumnoPorID(findedNum);
      if (res.error) {
        setMostrarError(!mostrarError);
        setTimeout(() => {
          setMostrarError(false);
          setInputValue("");
        }, 5000);
      } else {
        if (res.detalle) {
          setRelectura(true);
          setTimeout(()=>{
            setRelectura(false)
          }, 2000)
        }
        setAlumno(await res);

        console.log(!res.error);
        setMostrarData(!mostrarData);
        setTimeout(() => {
          setMostrarData(false);
          setInputValue("");
        }, 6500);
      }
    }
  };
  useEffect(() => {
    setInputValue(""); // Limpia el input cuando se monta el componente
    inputRef.current.focus();
  }, [mostrarData, mostrarError]);

  return (
    <div className="hero min-h-screen bg-white ">
      <div className="hero-content w-full text-center">
        <div className="w-full flex flex-col ">
          <div className="absolute flex flex-row z-50 top-0 left-0 w-full bg-[#132841]">
            <img src={Logo} className="w-32 rounded-full m-2 inline" />
            <div className="flex flex-col w-full justify-around">
              <span className="text-3xl text-white">
                Registro Automático de Asistencias
              </span>
              <span className="text-3xl text-white">
                Centro de Formación Laboral 404 - Berisso
              </span>
            </div>
          </div>

          <h1 className="text-5xl m-8 font-bold">
            {mostrarData ? "Datos del alumno" : "Escanee su código..."}
          </h1>
          <input
            disabled={mostrarData || mostrarError ? true : false}
            autoFocus
            ref={inputRef}
            onChange={(e) => {
              sendInfo(e);
              setInputValue(e.target.value);
            }}
            value={inputValue}
            id="nombreAlumno"
            type="password"
            placeholder="Código"
            className={
              !mostrarData
                ? "rounded-full input input-bordered input-info max-w-xs text-center ml-auto mr-auto bg-white border-black"
                : "hidden"
            }
          />
          <div className={mostrarData ? "block" : "hidden"}>
            <div className="w-1/2 h-full ml-auto mr-auto bg-white flex flex-col ">
              <label className="label">
                <span className="label-text">Alumno</span>
                <span className="label-text-alt"></span>
              </label>
              <span className=" w-full font-normal text-black my-2  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
                {alumno
                  ? alumno.data_alumno_curso.apellido_alumno.toUpperCase() +
                    " " +
                    alumno.data_alumno_curso.nombre_alumno.toUpperCase()
                  : false}
              </span>
              <label className="label">
                <span className="label-text">Nro DNI</span>
                <span className="label-text-alt"></span>
              </label>
              <span className=" w-full font-normal my-2  text-black  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
                {alumno ? alumno.data_alumno_curso.dni_alumno : false}
              </span>

              <label className="label">
                <span className="label-text">Curso</span>
                <span className="label-text-alt"></span>
              </label>
              <span className=" w-full font-normal my-2  text-black  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
                {alumno
                  ? alumno.data_alumno_curso.nombre_curso.toUpperCase()
                  : false}
              </span>
              <label className="label">
                <span className="label-text">Horario de Ingreso</span>
                <span className="label-text-alt"></span>
              </label>
              <span className=" w-full font-normal my-2  text-black  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
                {alumno ? alumno.hora_ingreso : false}
              </span>

              <label className="label">
                <span className="label-text">Registro de Asistencia</span>
                <span className="label-text-alt"></span>
              </label>
              <span className=" w-full font-normal my-2  text-black  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
                {alumno
                  ? alumno.cod_asistencia.descripcion.toUpperCase()
                  : false}
              </span>

              <label className="label">
                <span className="label-text">Ausencias Restantes</span>
                <span className="label-text-alt"></span>
              </label>
              <span
                className={`w-full font-bold my-2  text-black  ml-auto mr-auto  border-b border-blue-600 rounded-lg ${
                  alumno
                    ? Math.round(
                        alumno.data_alumno_curso.clases_totales * 0.2
                      ) -
                        alumno.cantidad_inasistencias <=
                      (Math.round(
                        alumno.data_alumno_curso.clases_totales * 0.2
                      ) -
                        alumno.cantidad_inasistencias) /
                        2
                      ? "text-red-700"
                      : "text-black"
                    : false
                }`}
              >
                {alumno
                  ? Math.round(alumno.data_alumno_curso.clases_totales * 0.2) -
                    alumno.cantidad_inasistencias
                  : false}
              </span>
            </div>
          </div>
          <div className={mostrarError ? "block" : "hidden"}>
            <div className="fixed top-0 left-0 w-screen h-screen ml-auto mr-auto bg-white flex flex-col justify-center align-middle border border-cyan-400">
              <span className="border border-red-500 text-red-600 text-3xl p-8 ">
                Error al buscar alumno o cargar la asistencia, por favor informe
                en secretaría...
              </span>
            </div>
          </div>
          {relectura ? (
            <div className="block">
              <div className="fixed top-0 left-0 w-screen h-screen ml-auto mr-auto bg-white flex flex-col justify-center align-middle border border-cyan-400">
                <span className="border border-red-500 text-red-600 text-3xl p-8 ">
                  Ud ya a cargado su asistencia el día de hoy...
                </span>
              </div>
            </div>
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  );
}
