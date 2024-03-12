import { useQuery } from "@tanstack/react-query";
import {
  getAsistencia,
  getCurso,
  postAusenciaJustificada,
} from "../services/AsistenciaAlumnos.services";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user.context";

function AsistenciaAlumnos() {
  const [data, setData] = useState(undefined);
  const [dataCurso, setDataCurso] = useState(undefined);
  const userContext = useContext(UserContext);
  const usuario = userContext.userData;

  async function obtenerAsistencia() {
    const id_curso = window.localStorage.id_curso;
    const res = await getAsistencia(id_curso);
    const cursoRes = await getCurso(id_curso);
    // console.log(cursoRes);
    cursoRes ? setDataCurso(cursoRes) : false;
    res.length > 0 ? setData(res) : false;
    console.log(data);
    //console.log(cursoRes);
    //dataCurso.dias.map((e) => console.log(e.nombre_dia));
  }

  async function changeAttendance(e) {
    e.preventDefault();
    const codAsistencia = e.target.value;
    const idAsistencia = e.target.id;
    const res = await postAusenciaJustificada(idAsistencia, codAsistencia);
    if (res.message) {
      alert(res.message);
      obtenerAsistencia();
    }
  }
  useEffect(() => {
    obtenerAsistencia();
  }, []);

  /* 	function justificarFalta(e) {
		e.preventDefault();
		let dni = e.target.id;
		postJustificada(dni);
	} */

  if (!data) {
    return <div>Cargando...</div>;
  }

  const uniqueDates = [...new Set(data.map((item) => item.fecha))];
  const uniqueStudents = [
    ...new Map(data.map((item) => [item.id_alumno, item])).values(),
  ];
  //contar asistencias
  function countAbsences(studentId) {
    return data.filter(
      (item) =>
        item.id_alumno === studentId &&
        item.descripcion.split("")[0].toUpperCase() === "A"
    ).length;
  }

  function getColorClass(letter) {
    switch (letter) {
      case "A":
        return "text-red-600 font-bold";
      case "J":
        return "text-orange-500 font-bold";
      case "P":
        return "text-blue-600 font-bold";
      case "T":
        return "text-green-600 font-bold";
      default:
        return "";
    }
  }

  return (
    <div className="hero min-h-screen w-full bg-white">
      <div className="hero-content h-full text-center items-start">
        <div className="w-full">
          <div className="flex flex-row w-full justify-between text-black m-2">
            <h1 className="p-3  font-normal border-b border-blue-600 rounded-lg ">
              Curso:{" "}
              <span className="underline decoration-blue-500 font-semibold">
                {dataCurso.data ? dataCurso.data.nombre.toUpperCase() : false}
              </span>
            </h1>
            <h2 className=" p-3 font-normal  border-b border-blue-600 rounded-lg">
              Docente:{" "}
              <span className="underline decoration-blue-500 font-semibold">
                {dataCurso.data
                  ? `${dataCurso.data.apellido_docente.toUpperCase()} ${
                      dataCurso.data.nombre_docente.toUpperCase().split("")[0]
                    }.`
                  : false}
              </span>
            </h2>
            <h2 className=" border-solid p-3 font-normal  border-b border-blue-600 rounded-lg  ">
              <span>
                Dias:{" "}
                <span className="underline decoration-blue-500 font-semibold">
                  {dataCurso.dias
                    ? dataCurso.dias.map((e) => (
                        <span key={e.nombre_dia}>
                          {e.nombre_dia.toUpperCase()}{" "}
                        </span>
                      ))
                    : false}
                </span>
              </span>
            </h2>
            <h2 className=" border-solid p-3 font-normal  border-b border-blue-600 rounded-lg ">
              Horarios:{" "}
              <span className="underline decoration-blue-500 font-semibold">
                <span>{`${dataCurso.data.horario_inicio} a ${dataCurso.data.horario_final}`}</span>
              </span>
            </h2>
            <h2 className=" p-3 font-normal   border-b border-blue-600 rounded-lg">
              Cantidad de alumnos:{" "}
              <span className="underline decoration-blue-500 font-semibold">
                {uniqueStudents.length}
              </span>
            </h2>

            <h2 className=" p-3 font-normal   border-b border-blue-600 rounded-lg">
              Inasistencias permitidas:{" "}
              <span className="underline decoration-blue-500 font-semibold">
                {dataCurso.data.cantidad_inasistencias}
              </span>
            </h2>
          </div>
          <div className="overflow-x-scroll">
            <table>
              <thead>
                <tr className="text-black">
                  <th className="sticky left-0 bg-white">
                    <div className="w-24 p-1 border border-black">Nombre</div>
                  </th>
                  <th className="sticky left-24 bg-white">
                    <div className="w-24 p-1 border border-black">Apellido</div>
                  </th>
                  <th className="sticky left-48 bg-white">
                    <div className="w-24 p-1 border border-black">
                      Ausencias
                    </div>
                  </th>
                  <th className="sticky left-48 bg-white">
                    <div className="w-24 p-1 border border-black">
                      Restantes
                    </div>
                  </th>
                  {uniqueDates.map((date, index) => (
                    <th key={index}>
                      <div className="p-1 border border-black">
                        {date
                          ? date.split("/")[0] + "/" + date.split("/")[1]
                          : false}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {uniqueStudents.map((student) => (
                  <tr
                    className="text-black hover:bg-blue-100"
                    key={student.id_alumno}
                  >
                    <td className="sticky left-0 hover:bg-blue-100">
                      <div className="w-24 bg-white border border-black italic">
                        {student.apellido
                          ? student.apellido.split(" ")[0].toUpperCase()
                          : false}
                      </div>
                    </td>
                    <td className="sticky left-24">
                      <div className="w-24 bg-white border border-black italic">
                        {student.nombre
                          ? student.nombre.split(" ")[0].toUpperCase()
                          : false}
                      </div>
                    </td>
                    <td className="sticky left-48 bg-white">
                      <div className="w-24 text-red-600 bg-white border border-black italic font-semibold">
                        {countAbsences(student.id_alumno)}
                      </div>
                    </td>
                    <td className="sticky left-48 bg-white">
                      <div className="w-24 text-black bg-white border border-black italic font-bold">
                        {dataCurso.data.cantidad_inasistencias -
                          countAbsences(student.id_alumno)}
                      </div>
                    </td>
                    {uniqueDates.map((date, index) => {
                      const attendanceRecord = data.find(
                        (item) =>
                          item.fecha === date &&
                          item.id_alumno === student.id_alumno
                      );
                      return (
                        <td key={index}>
                          <div
                            className={`border border-black ${
                              attendanceRecord
                                ? getColorClass(
                                    attendanceRecord.descripcion
                                      .split("")[0]
                                      .toUpperCase()
                                  )
                                : ""
                            }`}
                          >
                            {attendanceRecord ? (
                              attendanceRecord.descripcion
                                .split("")[0]
                                .toUpperCase() === "A" ? (
                                <select
                                  id={attendanceRecord.id_asistencia}
                                  onChange={(e) => changeAttendance(e)}
                                  value={attendanceRecord.descripcion
                                    .split("")[0]
                                    .toUpperCase()}
                                  className="bg-transparent"
                                >
                                  <option
                                    className="font-bold text-red-500"
                                    value={4}
                                  >
                                    A
                                  </option>
                                  <option
                                    className="font-bold text-orange-500"
                                    value={5}
                                  >
                                    J
                                  </option>
                                  <option
                                    className="font-bold text-blue-600"
                                    value={1}
                                  >
                                    P
                                  </option>
                                </select>
                              ) : attendanceRecord.descripcion
                                  .split("")[0]
                                  .toUpperCase() === "P" &&
                                usuario.id_rol <= 2 ? (
                                <select
                                  id={attendanceRecord.id_asistencia}
                                  onChange={(e) => changeAttendance(e)}
                                  className="bg-transparent"
                                >
                                  <option
                                    value={1}
                                    className="text-blue-600 font-bold"
                                  >
                                    P
                                  </option>
                                  <option
                                    value={4}
                                    className="text-red-600 font-bold"
                                  >
                                    A
                                  </option>
                                </select>
                              ) : (
                                <span>
                                  {attendanceRecord.descripcion
                                    .split("")[0]
                                    .toUpperCase()}
                                </span>
                              )
                            ) : (
                              "N/A"
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsistenciaAlumnos;
/* “1/2” (color verde): media falta

“A“ (color rojo): ausente (es editable pasa de “A” a “J”)

“J“ (naranja): justificada

“P“ (azul): presente. */

{
  /* <div className="overflow-x-auto">
			<div className="hero ">
				<div className="hero-content  p-2">
					<h1 className="  p-3  font-normal  border-b border-blue-600 rounded-lg ">Nombre del curso:</h1>
					<h2 className=" p-3 font-normal  border-b border-blue-600 rounded-lg">Nombre del profesor:</h2>
					<h2 className=" border-solid p-3 font-normal  border-b border-blue-600 rounded-lg  ">
						<span>Dias:</span>
					</h2>
					<h2 className=" border-solid p-3 font-normal  border-b border-blue-600 rounded-lg ">Horarios:</h2>
					<h2 className=" p-3 font-normal   border-b border-blue-600 rounded-lg">Cantidad de alumnos:</h2>
				</div>
				<div>
					<table>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Apellido</th>
								{uniqueDates.map((date, index) => (
									<th key={index}>{date}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{uniqueStudents.map((student) => (
								<tr key={student.id_alumno}>
									<td>{student.nombre}</td>
									<td>{student.apellido}</td>
									{uniqueDates.map((date, index) => {
										const attendanceRecord = data.find(
											(item) => item.fecha === date && item.id_alumno === student.id_alumno
										);
										return (
											<td key={index}>
												{attendanceRecord
													? attendanceRecord.descripcion.split("")[0].toUpperCase()
													: "N/A"}
											</td>
										);
									})}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div> */
}
