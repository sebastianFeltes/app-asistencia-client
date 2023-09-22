import { useState } from "react";

export default function LectorQR() {
    const [mostrarData, setMostrarData] = useState(false);
    const sendInfo = (e) => {
        e.preventDefault();
        let currentValue = e.target.value;
        if (currentValue.includes(".")) {
            let findedNum = parseInt(e.target.value.split(".")[0])
            //TODO: enviar findedNum al servidor para traer los datos del alumno

            console.log(findedNum)
            setMostrarData(!mostrarData)
        }

    }

    const alumno = {
        id_alumno: 102,
        nro_legajo: 1023,
        nombre: "Sebastian",
        apellido: "Feltes",
        tipo_dni: "DU",
        nro_dni: 35954987
    }
    return (
        <div className="hero min-h-screen bg-white ">
            <div className="hero-content w-full text-center">
                <div className="w-full flex flex-col ">
                    <h1 className="text-5xl m-8 font-bold">{mostrarData?"Datos del alumno":"Escanee su código.."}</h1>
                    <input onChange={e => sendInfo(e)} id="nombreAlumno" type="password" placeholder="Código" className={!mostrarData?"rounded-full input input-bordered input-info max-w-xs text-center ml-auto mr-auto bg-white border-black":"hidden"} />
                    <div className={mostrarData?"block":"hidden"}>

                        <div className="w-1/2 h-full ml-auto mr-auto bg-white flex flex-col " >
                            <span className=" w-1/2 p-3 font-normal my-4  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
                                {alumno.apellido}
                            </span><span className=" w-1/2 p-3 my-4 font-normal  ml-auto mr-auto   border-b border-blue-600 rounded-lg">
                                {alumno.nombre}
                            </span>
                            <span className=" w-1/2 p-3 font-normal my-4  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
                                {alumno.nro_dni}
                            </span>
                            <span className=" w-1/2 p-3 font-normal my-4  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
                                {new Date().toLocaleString('es-ES')}
                            </span>
                            

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );


}