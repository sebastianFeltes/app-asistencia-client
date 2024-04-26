import { useEffect, useState } from "react";
import { fetchRegistros } from "../services/registroAsistencia.services";

export default function RegistroAsistencia() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    try {
      let res = await fetchRegistros();
      setData(res);
      setIsLoading(false); // Establecer isLoading como false una vez que los datos se han cargado
      console.log(res);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
      setIsLoading(false); // También maneja errores estableciendo isLoading como false
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-white w-full h-screen overflow-hidden flex flex-col justify-start items-center pt-4">
      <h2 className="text-3xl font-bold text-black">Registro de Asistencias</h2>
      {isLoading ? (
        <span className="w-full h-96 flex justify-center">
          <span className="loading loading-spinner text-blue-700 w-20"></span>
        </span>
      ) : (
        <div className="w-full h-full flex justify-center overflow-y-scroll p-4">
          <table className="w-full">
            <thead className="text-black text-sm sticky top-0 bg-slate-200">
              <tr className="">
                <th>APELLIDO</th>
                <th>NOMBRE</th>
                <th>DNI ALUMNO</th>
                <th>FECHA</th>
                <th>HORA</th>
                <th>REGISTRO</th>
              </tr>
            </thead>
            <tbody>
              {data
                ? data.map((e, index) => {
                    return (
                      <tr
                        key={index}
                        className="border-y border-black text-black text-center h-10 hover:bg-slate-100"
                      >
                        <td>{e.apellido_alumno}</td>
                        <td>{e.nombre_alumno}</td>
                        <td>{e.dni_alumno}</td>
                        <td>{e.fecha}</td>
                        <td>{e.hora}</td>
                        <td
                          className={`font-semibold ${
                            e.cod_asistencia == 1
                              ? "text-blue-500"
                              : e.cod_asistencia == 2
                              ? "text-green-500"
                              : e.cod_asistencia == 4
                              ? "text-red-500"
                              : e.cod_asistencia == 5
                              ? "text-orange-500"
                              : "text-black"
                          }`}
                        >
                          {e.cod_asistencia == 1
                            ? "P"
                            : e.cod_asistencia == 2
                            ? "T"
                            : e.cod_asistencia == 4
                            ? "A"
                            : e.cod_asistencia == 5
                            ? "J"
                            : "M"}
                        </td>
                      </tr>
                    );
                  })
                : false}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
