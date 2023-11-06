import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

export default function GeneradorQR() {
    const [mostrarQR, setMostrarQR] = useState(false);
    const [idAlumno, setIdAlumno] = useState(0);
    const generarQR = () => {
        setMostrarQR(!mostrarQR);
        setIdAlumno(alumno.id_alumno + ".")
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
        <div className="hero min-h-screen w-full border border-yellow-500 bg-white ">
            <div className="hero-content min-w-full m-0 p-0 border border-blue-400 text-center">
                <div className="w-full flex flex-col border border-cyan-400 overflow-scroll ">
                    <h1 className="text-5xl font-bold">Datos Alumnos</h1>

                    <table className="table">
                        {/* head */}
                        <thead className="text-black">
                            <tr>
                                <th></th>
                                <th>Legajo Alumno</th>
                                <th>Nombre Alumno</th>
                                <th>Apellido Alumno</th>
                                <th>Tipo D.N.I. Alumno</th>
                                <th>N° D.N.I. Alumno</th>

                                <th>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>{alumno.nro_legajo}</td>
                                <td>{alumno.nombre}</td>
                                <td>{alumno.apellido}</td>
                                <td>{alumno.tipo_dni}</td>
                                <td>{alumno.nro_dni}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={generarQR}>Generar QR</button>
                                </td>

                            </tr>
                        </tbody>
                    </table>

                    <div>
                    </div >
                    <div className={!mostrarQR ? `hidden` : `absolute top-0 z-50 w-full h-screen bg-blue-600`}>
                        <button className="btn btn-alert fixed top-0 left-0" onClick={() => setMostrarQR(!mostrarQR)}>X</button>
                        <div className="w-1/2 h-full ml-auto mr-auto bg-white flex flex-col " >
                            <h2 className="text-5xl font-semibold">
                                Datos del alumno
                            </h2>
                            <span className=" w-1/2 p-3 font-normal my-4  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
                                {alumno.apellido}
                            </span><span className=" w-1/2 p-3 my-4 font-normal  ml-auto mr-auto   border-b border-blue-600 rounded-lg">
                                {alumno.nombre}
                            </span>
                            <span className=" w-1/2 p-3 font-normal my-4  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
                                {alumno.nro_dni}
                            </span>

                            <QRCodeSVG size={256} className="rounded-lg  m-8  ml-auto mr-auto" value={idAlumno} />
                            <button className="m-4 btn btn-primary">Descargar código QR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}