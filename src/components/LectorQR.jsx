import { useState, useEffect, useRef } from "react";
import { buscarAlumnoPorID } from "../services/GestionQR.services";
import Logo from "../assets/logo-CFL404-color.png";
import Reloj from "../utils/Reloj";
import Anuncio from "./Anuncio";

export default function LectorQR() {
  const [mostrarData, setMostrarData] = useState(false);
  const [mostrarError, setMostrarError] = useState(false);
  const [relectura, setRelectura] = useState(false);
  const [alumno, setAlumno] = useState({
    data_alumno_curso: {
      apellido_alumno: "--------",
      nombre_alumno: "-------",
      dni_alumno: 12222333,
      nombre_curso: "---------",
      clases_totales: 0,
    },
    cantidad_inasistencias: 0,
    hora_ingreso: "--:--:--",
    cod_asistencia: { descripcion: "--------------" },
  });

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const sendInfo = async (e) => {
    e.preventDefault();
    setAlumno({
      data_alumno_curso: {
        apellido_alumno: "--------",
        nombre_alumno: "-------",
        dni_alumno: 12222333,
        nombre_curso: "---------",
        clases_totales: 0,
      },
      cantidad_inasistencias: 0,
      hora_ingreso: "--:--:--",
      cod_asistencia: { descripcion: "------------" },
    });
    setMostrarData(false);
    setMostrarError(false)
    setRelectura(false)

    let currentValue = e.target.value;
    if (currentValue.includes(".")) {
      let findedNum = parseInt(e.target.value.split(".")[0]);
      //TODO: enviar findedNum al servidor para traer los datos del alumno
      const res = await buscarAlumnoPorID(findedNum);
      // console.log(res)
      console.log(res);
      if (res.error) {
        setMostrarError(!mostrarError);
        setRelectura(false);
        // console.log(!res.error);
        setTimeout(() => {
          setMostrarError(false);
          setInputValue("");
        }, 3000);
      } else {
        if (res.cod_asistencia.re_scaned) {
          // console.log(res.detalle);
          setRelectura(true);
          setMostrarError(false);
          setTimeout(() => {
            setRelectura(false);
          }, 3000);
        } else {
          // console.log(res);
          setRelectura(false);
          setTimeout(() => {
            setRelectura(false);
          }, 3000);
        }

        setAlumno(await res);
        setMostrarData(!mostrarData);
        setTimeout(() => {
          setAlumno({
            data_alumno_curso: {
              apellido_alumno: "--------",
              nombre_alumno: "-------",
              dni_alumno: 12222333,
              nombre_curso: "---------",
              clases_totales: 0,
            },
            cantidad_inasistencias: 0,
            hora_ingreso: "--:--:--",
            cod_asistencia: { descripcion: "------------" },
          });
          setMostrarData(false);
          // setInputValue("");
        }, 6000);
      }
    }

    setInputValue(""); // Limpia el input cuando se monta el componente
    inputRef.current.focus();
  };
  // useEffect(() => {}, [mostrarData, mostrarError, relectura]);

  return (
    <div className="hero min-h-screen bg-white ">
      <div className="hero-content w-full text-center flex flex-col">
        <div className="w-full flex flex-col">
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
          <div>
            <Anuncio />
            <Anuncio />
          </div>
          <div className="flex flex-col h-full w-full">
            <div className=" w-full">
              <h1 className="text-2xl font-bold">{"Escanee su código..."}</h1>
              <input
                // disabled={mostrarData || mostrarError ? true : false}
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
                  "rounded-full input input-bordered input-info max-w-xs text-center ml-auto mr-auto bg-white border-black"
                }
              />
            </div>
            <div>
              <div className="flex flex-row flex-wrap">
                <div className="flex flex-col w-1/2 text-center justify-center items-center ">
                  <span className="">Alumno</span>
                  <span className="font-normal text-black my-2 px-4 ml-auto mr-auto  border-b border-blue-600 rounded-lg">
                    {alumno
                      ? alumno.data_alumno_curso.apellido_alumno.toUpperCase() +
                        " " +
                        alumno.data_alumno_curso.nombre_alumno.toUpperCase()
                      : false}
                  </span>
                </div>
                <div className="flex flex-col w-1/2 text-center justify-center items-center">
                  <span className="">Nro DNI</span>
                  <span className="font-normal my-2 px-4 text-black  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
                    {alumno ? alumno.data_alumno_curso.dni_alumno : false}
                  </span>
                </div>
                <div className="flex flex-col w-1/2 text-center justify-center items-center">
                  <span className="label-text">Curso</span>
                  <span className="font-normal my-2 px-4 text-black  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
                    {alumno
                      ? alumno.data_alumno_curso.nombre_curso.toUpperCase()
                      : false}
                  </span>
                </div>
                <div className="flex flex-col w-1/2 text-center justify-center items-center">
                  <span className="label-text">Horario de Escaneo</span>

                  <span className="font-normal my-2 px-4 text-black  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
                    {alumno ? alumno.hora_ingreso : false}
                  </span>
                </div>
                <div className="flex flex-col w-1/2 text-center justify-center items-center">
                  <span className="label-text">Registro de Asistencia</span>

                  <span className="font-normal my-2 px-4 text-black  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
                    {alumno
                      ? alumno.cod_asistencia.descripcion.toUpperCase()
                      : false}
                  </span>
                </div>
                <div className="flex flex-col w-1/2 text-center justify-center items-center">
                  <span className="label-text">Ausencias Restantes</span>

                  <span
                    className={`font-bold my-2 px-4 text-black  ml-auto mr-auto  border-b border-blue-600 rounded-lg ${
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
                      ? Math.round(
                          alumno.data_alumno_curso.clases_totales * 0.2
                        ) - alumno.cantidad_inasistencias
                      : false}
                  </span>
                </div>
              </div>

              <div>
                {mostrarError ? (
                  <span>
                    ERROR AL BUSCAR ALUMNO O CARGAR ASISTENCIA, POR FAVOR
                    INFORME EN SECRETARÍA...
                  </span>
                ) : (
                  false
                )}
                {relectura ? (
                  <span>UD YA HA CARGADO SU ASISTENCIA EL DÍA DE HOY...</span>
                ) : (
                  false
                )}
              </div>
            </div>

            <div className="w-full flex flex-row justify-center absolute left-0 bottom-4">
              <Reloj />
            </div>
            {/* {relectura ? (
              <div className="block">
                <div className="fixed top-0 left-0 w-screen h-screen ml-auto mr-auto bg-white flex flex-col justify-center align-middle border border-cyan-400">
                  
                </div>
              </div>
            ) : (
              false
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
