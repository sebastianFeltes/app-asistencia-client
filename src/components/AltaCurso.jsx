import { useState } from "react";
 import {  postAltaCurso } from "../services/altaCurso.services";
/* import { getDataDocentes } from "../services/DatosDocentes.services";
import { useQuery } from "@tanstack/react-query"; */



 


function AltaCurso (){

 
  const [diasSeleccionados, setDiasSeleccionados] = useState([]);
  

  
  function agregarDia(e) {
    e.preventDefault();

    const idDiaSeleccionado = e.target.form.nvoDia.value.split(" ")[0];
    
    const nombreDiaSeleccionado =e.target.form.nvoDia.value.split(" ")[1];
    const dataDiaSeleccionado = {
      id_dia: idDiaSeleccionado,
      nombre: nombreDiaSeleccionado,
    };
   setDiasSeleccionados([...diasSeleccionados, dataDiaSeleccionado]);
   console.log(diasSeleccionados)
  }




 async function post (e){
  
    e.preventDefault();
    const nombreCurso =e.target.nombreCurso.value;
    const nombreDocente = e.target.docente.value;
    const diasCursada = e.target.dias.value;
    const fechaInicio = e.target.fechaInicio.value;
    const fechaFinalizacion = e.target.fechaFinalizacion.value;
    const data = {
     nombre : nombreCurso ,
     id_docente : nombreDocente,
     dias : diasCursada,
     fecha_inicio : fechaInicio,
     fecha_finalizacion : fechaFinalizacion,
    }
    const res = await postAltaCurso(data);
    if (res == "recibido") {
      e.target.reset();
      return alert("alumno cargado exitosamente");
    } 

 }

return(
    <div className="hero min-h-screen bg-white">
    <div className="hero-content text-center w-full">
      <div className="border-4 border-black w-full rounded-3xl">
        <div className=" border-black w-full ">
          <h2 className="text-black text-3xl font-bold justify-center">
            ALTA CURSO
          </h2>

          {/* FORMULARIO */}
          <form
           onSubmit={(e)=>post(e)}
          >
            {/* DIV CONTENEDOR */}
            <div className="grid grid-cols-2 gap-4 m-2 ">
              <input
                id="idCurso"
                
                type="number"
                className="hidden"
              />
              {/* DIV IZQUIERDO */}
              <div
                id="contenedor1"
                className=" border-black flex flex-col m-2 "
              >
                <label className="label">
                  <span className="label-text text-black">
                    NOMBRE DEL CURSO:
                  </span>
                </label>
                <input
                  id="NombreCurso"
                 
                  type="text"
                  className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black"
                />

                <label className="label">
                  <span className="label-text text-black">
                    NOMBRE DEL DOCENTE:
                  </span>
                </label>
                <span className="label-text text-black"></span>
                  <select
                  id="Docente"
                  className="select w-full max-w-xs bg-transparent rounded-full border-black"
                >
                  
                          <option>
                           
                          </option>
                   
                </select>  
                <label className="label">
                  <span className="label-text text-black">
                    NUEVO DIA:
                  </span>
                </label>
                <div className="flex m-0">
                {/*   <select
                    id="nvoDia"
                    className="select w-full max-w-xs bg-transparent rounded-full border-black"
                  >
                    {d
                      ? dias.map((e) => {
                          return (
                            <option
                              value={e.id_dia}
                              key={e.nombre}
                            >
                              {e.nombre}
                            </option>
                          );
                        })
                      : false} 
                  </select>  */}
                  {/*  BOTON PARA AGREGAR MAS DE UN DIA */}
                  <button
                     onClick={(e) => agregarDia(e)}  
                    type="button"
                    className="btn ml-2 bg-blue-600 text-black rounded-full w-12 border-none"
                  >
                    +
                  </button>
                  <div className="ml-2">
                     {/*  <ul className="grid grid-cols-1 gap-2">
                      
                      {!diasSeleccionados
                        ? false
                        : diasSeleccionados.map((e) => (
                            <li
                              key={e.id_dia}
                              className="text-black text-xs"
                            >
                              {e.nombre}
                            </li>
                          ))}
                    </ul>  */}
                  </div>
                </div>
              </div>

              {/* DIV DERECHO */}
              <div className=" border-black flex flex-col m-2 ">
              
              <label className="label">
                    <span className="label-text text-black">
                     HORARIO DE INICIO:
                    </span>
                  </label>
                <div className=" flex">
                  <label className="label ">
                    <p className="label-text ms-2 text-black">
                      hora:
                    </p>
                  </label>
                  <label className="label">
                    <p className="label-text ms-20 text-black">
                     minuto:
                      
                    </p>
                  </label>
                </div>

               
                <div className="form-control flex flex-row">
                  <input
                    id="hora1"
                    type="number"
                    placeholder=""
                    maxLength="2"
                    className="input rounded-full text-black  w-28 bg-white border-black"
                  />

                  <input
                    id="minutos1"
                    type="number"
                    placeholder=""
                    className="input rounded-full text-black  w-28 bg-white border-black"
                  />
                </div>
                <label className="label">
                    <span className="label-text text-black">
                     HORARIO FINAL:
                    </span>
                  </label>
                  <div className=" flex">
                  <label className="label ">
                    <p className="label-text ms-2 text-black">
                      hora:
                    </p>
                  </label>
                  <label className="label">
                    <p className="label-text ms-20 text-black">
                     minuto:
                      
                    </p>
                  </label>
                </div>
                
                <div className="form-control flex flex-row">
                  <input
                    id=""
                    type="number"
                    placeholder=""
                    className="input rounded-full text-black  w-28 bg-white border-black"
                  />

                  <input
                    id=""
                    type="number"
                    placeholder=""
                    className="input rounded-full text-black  w-28 bg-white border-black"
                  />
                </div>

                <div className=" flex">
                  <label className="label ">
                  <span className="label-text  text-black">
                    FECHA DE INICIO:
                    </span>
                  </label>
                  <label className="label">
                  <span className="label-text ms-14 text-black">
                    FECHA DE FINALIZACION:
                    </span>
                  </label>
                </div>
                <div className="form-control flex flex-row"> 

                <input
                  id="fechaInicio"
                  type="date"
                  placeholder=""
                  className="rounded-full input input-bordered text-black  input-info max-w-xs w-40 bg-white border-black"
                  />
                
                <input
                  id="fechaFinalizacion"
                  type="date"
                  placeholder=""
                  className="rounded-full input input-bordered text-black  input-info max-w-xs w-40 bg-white border-black"
                  />
                  </div>

                {/*   DIV DOCUMENTACION */}
                <div className="form-control flex flex-row">
                  <label className="label">
                    <span className="label-text text-black">
                      ACTIVO:
                    </span>
                  </label>

               
                </div>
              </div>
            </div>

            {/*  BOTONES DE "ACEPTAR" Y "CANCELAR" */}
            <div className="grid grid-cols-2 gap-4">
              <div className="content-center m-2">
                <button
                  type="submit"
                  className="btn  bg-blue-600 text-white hover:bg-blue-300  hover:text-black"
                >
                  Aceptar
                </button>
              </div>
              <div className="content-center m-2">
                <button
                 /*  onClick={(e) => limpiarFormulario(e)} */
                  type="reset"
                  className="btn  bg-blue-600 text-white hover:bg-blue-300  hover:text-black"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)
 }
 
export default AltaCurso;