import { useQuery } from "@tanstack/react-query";
import { getAsistencia, getCurso, postAusenciaJustificada } from "../services/AsistenciaAlumnos.services";
import { useEffect, useState } from "react";

function AsistenciaAlumnos() {
	const [data, setData] = useState(undefined);
	const [dataCurso, setDataCurso] = useState(undefined);

	async function obtenerAsistencia() {
		const id_curso = window.localStorage.id_curso;
		const res = await getAsistencia(id_curso);
		const cursoRes = await getCurso(id_curso);
		cursoRes ? setDataCurso(cursoRes) : false;
		res.length > 0 ? setData(res) : false;
		//console.log(data);
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
	const uniqueStudents = [...new Map(data.map((item) => [item.id_alumno, item])).values()];
	//contar asistencias
	function countAbsences(studentId) {
		return data.filter(
			(item) => item.id_alumno === studentId && item.descripcion.split("")[0].toUpperCase() === "A"
		).length;
	}

	return (
		<div className="hero min-h-screen w-full bg-white">
			<div className="hero-content h-full text-center items-start">
				<div className="w-full">
					<div className="flex flex-row w-full justify-between text-black m-2">
						<h1 className="p-3  font-normal border-b border-blue-600 rounded-lg ">
							Nombre del curso:{" "}
							<span className="underline decoration-blue-500 font-semibold">
								{dataCurso.data ? dataCurso.data.nombre.toUpperCase() : false}
							</span>
						</h1>
						<h2 className=" p-3 font-normal  border-b border-blue-600 rounded-lg">
							Nombre del profesor:{" "}
							<span className="underline decoration-blue-500 font-semibold">
								{dataCurso.data
									? `${dataCurso.data.nombre_docente.toUpperCase()} ${dataCurso.data.apellido_docente.toUpperCase()} `
									: false}
							</span>
						</h2>
						<h2 className=" border-solid p-3 font-normal  border-b border-blue-600 rounded-lg  ">
							<span>
								Dias:{" "}
								<span className="underline decoration-blue-500 font-semibold">
									{dataCurso.dias
										? dataCurso.dias.map((e) => (
												<span key={e.nombre_dia}>{e.nombre_dia.toUpperCase()} </span>
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
							<span className="underline decoration-blue-500 font-semibold">{uniqueStudents.length}</span>
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
										<div className="w-24 p-1 border border-black">Ausencias</div>
									</th>
									{uniqueDates.map((date, index) => (
										<th key={index}>
											<div className="p-1 border border-black">
												{date ? date.split("/")[0] + "/" + date.split("/")[1] : false}
											</div>
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{uniqueStudents.map((student) => (
									<tr className="text-black hover:bg-blue-100" key={student.id_alumno}>
										<td className="sticky left-0 hover:bg-blue-100">
											<div className="w-24 bg-white border border-black italic">
												{student.apellido
													? student.apellido.split(" ")[0].toUpperCase()
													: false}
											</div>
										</td>
										<td className="sticky left-24">
											<div className="w-24 bg-white border border-black italic">
												{student.nombre ? student.nombre.split(" ")[0].toUpperCase() : false}
											</div>
										</td>
										<td className="sticky left-48 bg-white">
											<div className="w-24 text-red-600 bg-white border border-black italic font-semibold">
												{countAbsences(student.id_alumno)}
											</div>
										</td>
										{uniqueDates.map((date, index) => {
											const attendanceRecord = data.find(
												(item) => item.fecha === date && item.id_alumno === student.id_alumno
											);
											return (
												<td
													className={
														attendanceRecord.descripcion.split("")[0].toUpperCase() == "P"
															? "text-blue-600 font-bold"
															: attendanceRecord.descripcion.split("")[0].toUpperCase() ==
															  "A"
															? "text-red-600 font-bold"
															: attendanceRecord.descripcion.split("")[0].toUpperCase() ==
															  "J"
															? "text-orange-400 font-bold"
															: attendanceRecord.descripcion.split("")[0].toUpperCase() ==
															  "M"
															? "text-green-400 font-bold"
															: false
													}
													key={index}
												>
													{/* TODO: QUE SE PUEDA CAMBIAR TAMBIEN EL JUSTIFICADO */}
													<div className="border border-black">
														{attendanceRecord ? (
															attendanceRecord.descripcion.split("")[0].toUpperCase() ==
															"A" ? (
																<select
																	id={attendanceRecord.id_asistencia}
																	onChange={(e) => changeAttendance(e)}
																	className="bg-transparent"
																>
																	<option
																		className="bg-transparent font-bold"
																		value={4}
																	>
																		A
																	</option>
																	<option
																		className="text-orange-400 font-bold"
																		value={5}
																	>
																		J
																	</option>
																	<option
																		className="text-blue-600 font-bold"
																		value={1}
																	>
																		P
																	</option>
																</select>
															) : (
																attendanceRecord.descripcion.split("")[0].toUpperCase()
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
