import { useQuery } from "@tanstack/react-query";
import { getAsistencia, postJustificada } from "../services/AsistenciaAlumnos.services";
import { useContext } from "react";
import UserContext from "../context/user.context";

function AsistenciaAlumnos() {
	const { data, isLoading, error } = useQuery(["getAsistencia"], getAsistencia);

	/* 	function justificarFalta(e) {
		e.preventDefault();
		let dni = e.target.id;
		postJustificada(dni);
	} */

	if (!data) {
		return <div>Cargando...</div>;
	}

	const uniqueDates = [...new Set(data.map((item) => item.fecha))];
	const uniqueStudents = [...new Map(data.map((item) => [item.id_alumno, item])).values()];

	return (
		<div className="hero min-h-screen w-full bg-white">
			<div className="hero-content h-full text-center border border-yellow-400 items-start">
				<div className="w-full">
					<div className="flex flex-row w-full justify-between text-black">
						<h1 className="  p-3  font-normal  border-b border-blue-600 rounded-lg ">Nombre del curso:</h1>
						<h2 className=" p-3 font-normal  border-b border-blue-600 rounded-lg">Nombre del profesor:</h2>
						<h2 className=" border-solid p-3 font-normal  border-b border-blue-600 rounded-lg  ">
							<span>Dias:</span>
						</h2>
						<h2 className=" border-solid p-3 font-normal  border-b border-blue-600 rounded-lg ">
							Horarios:
						</h2>
						<h2 className=" p-3 font-normal   border-b border-blue-600 rounded-lg">Cantidad de alumnos:</h2>
					</div>
					<div className="overflow-x-scroll">
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
