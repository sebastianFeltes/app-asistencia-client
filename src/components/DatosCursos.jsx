import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDataDias, postCursoModificado } from "../services/DatosCursos.services";
import { useContext, useEffect, useState } from "react";
import { getDataDocentes } from "../services/DatosDocentes.services";
import UserContext from "../context/user.context";
import { getMostrarCursos } from "../services/homeAdmin.services";

function DataCursos() {
	const userContext = useContext(UserContext);
	const rol = userContext.userData.id_rol;

	// eslint-disable-next-line no-unused-vars
	//const { data /*  isLoading, error */ } = useQuery(["mostrarCursos"], getMostrarCursos); //console.log(data);

	const [modal, setModal] = useState("modal");
	const [docentes, setDocentes] = useState(undefined);
	const [dias, setDias] = useState(undefined);
	const [diasSeleccionados, setDiasSeleccionados] = useState([]);
	const [cursos, setCursos] = useState(undefined);
	const [diasCursos, setDiasCursos] = useState(undefined);
	//fetch de cursos
	async function getCursos() {
		const res = await getMostrarCursos();
		res.dias.length > 0 ? setDiasCursos(res.dias) : false;
		console.log(res);
		res.dataCursos.length > 0 ? setCursos(res.dataCursos) : false;
	}

	useEffect(() => {
		getCursos();
		//console.log(data);
	}, []);

	//funcion que muestra el modal
	async function mostrarModal(e) {
		e.preventDefault();
		const id = e.target.id;
		setModal("modal" + id);
		const res = await getDataDocentes();
		const dias = await getDataDias();
		setDias(dias);
		return setDocentes(res);
	}

	function agregarDia(e) {
		e.preventDefault();

		const idDiaSeleccionado = e.target.form.nvoDia.value.split(" ")[0];

		const nombreDiaSeleccionado = e.target.form.nvoDia.value.split(" ")[1];
		const dataDiaSeleccionado = {
			id_dia: idDiaSeleccionado,
			nombre: nombreDiaSeleccionado,
		};
		setDiasSeleccionados([...diasSeleccionados, dataDiaSeleccionado]);
		//console.log(diasSeleccionados);
	}

	// funcion que modifica los datos
	async function modificarDatosCursos(e) {
		e.preventDefault();
		!modal ? e.target.reset() : true;
		const nombre = e.target.nvoNombreCurso.value;
		const nvoDocente = e.target.nvoDocente.value;
		const minInicio = e.target.minInicio.value;
		const nvoHorarioInicio = `${e.target.nvoHorarioInicio.value}:${minInicio}:00`;
		const minFinal = e.target.minFinal.value;
		const nvoHorarioFinal = `${e.target.nvoHorarioFinal.value}:${minFinal}.00 `;
		const nvoCheck = e.target.nvoCheck.value;
		const idCurso = e.target.idCurso.value;
		const diasCursos = diasSeleccionados.map((e) => e.id_dia);
		const fechaInicio = e.target.fechaInicio.value;
		const fechaFinalizacion = e.target.fechaFinalizacion.value;
		const data = {
			id_curso: parseInt(idCurso),
			nombre: nombre,
			id_docente: parseInt(nvoDocente),
			horario_inicio: nvoHorarioInicio,
			horario_final: nvoHorarioFinal,
			activo: nvoCheck == "on" ? 1 : 0,
			id_dia: diasCursos,
			fecha_inicio: fechaInicio,
			fecha_final: fechaFinalizacion,
		};
		//console.log(data);
		const res = await postCursoModificado(data);
		if (res.message == "Curso modificado") {
			alert(res.message);
			getCursos();
			return setModal("modal");
		} else {
			alert("error al modificar");
		}
		return setModal("modal");
	}

	function limpiarFormulario(e) {
		e.target.form.reset();
		setDiasSeleccionados([]);
		return setModal("modal");
	}
	return (
		<div className="hero min-h-screen bg-slate-50 text-black tabla-data-cursos">
			<div className="hero-content text-center p-0 w-full">
				<div className="overflow-x-auto">
					<h1 className="text-5xl font-bold">Datos Cursos</h1>
					<div className=" flex flex-row justify-between">
						{rol == 1 ? (
							<Link to={"/app/alta-curso"}>
								{" "}
								<button className="btn bg-blue-600 text-white hover:bg-blue-300  hover:text-black ">
									Nuevo Curso
								</button>
							</Link>
						) : (
							false
						)}

						<Link to={"/historial-curso"}>
							{" "}
							<button className="btn bg-blue-600 text-white hover:bg-blue-300  hover:text-black ">
								Historial Cursos
							</button>
						</Link>
					</div>

					<table className="table  text-center">
						{/* head  */}
						<thead className=" text-black  font-semibold">
							<tr>
								<th>NOMBRE DEL CURSO</th>
								<th>DOCENTE</th>
								<th>DIAS</th>
								<th>HORARIO INICIO</th>
								<th>HORARIO FINAL</th>
								<th>FECHA INICIO</th>
								<th>FECHA FINALIZACION</th>
								<th>ACTIVO</th>
								<th></th>
							</tr>
						</thead>
						{/* SE AUTO RELLENA CON LOS DATOS DE LOS CURSOS CARGADOS */}
						<tbody>
							{!cursos ? (
								<tr>
									<td>Cargando...</td>
								</tr>
							) : (
								cursos.map((e) => (
									<tr className="hover:bg-slate-200" key={e.id_curso}>
										<td className="hover:italic">{e.nombre.toUpperCase()}</td>
										<td className="hover:italic">{`${e.apellido_docente.toUpperCase()} ${e.nombre_docente.toUpperCase()}`}</td>
										<td>
											{diasCursos
												? diasCursos
														.filter((d) => {
															return d.id_curso == e.id_curso;
														})
														.map((d) => {
															console.log(d);
															return (
																<span key={e.id_relacion}>
																	{d.nombre.toUpperCase()}
																	<span> </span>
																</span>
															);
														})
												: false}
										</td>
										<td>{e.horario_inicio}</td>
										<td>{e.horario_final}</td>
										<td>{e.fecha_inicio}</td>
										<td>{e.fecha_final}</td>
										<td>
											<input
												id="activo"
												type="checkbox"
												className="checkbox border-black m-2 "
												checked={e.activo == "1" ? true : false}
											/>
										</td>
										{/* MODAL QUE MODIFICA LOS DATOS DE LOS CURSOS */}
										<td>
											{rol == 1 ? (
												<button
													className="btn  bg-blue-600 text-white hover:bg-blue-300  hover:text-black"
													id={e.id_curso}
													onClick={(e) => mostrarModal(e)}
												>
													Editar
												</button>
											) : (
												false
											)}
											<div
												id={`modal${e.id_curso}`}
												className={
													modal == `modal${e.id_curso}`
														? "visible fixed w-full max-h-screen  m-0 p-0 top-0 left-0  flex flex-row justify-center bg-white border"
														: "hidden"
												}
											>
												<div className="hero min-h-screen bg-white">
													<div className="hero-content text-center w-full">
														<div className="border-4 border-black w-full rounded-3xl">
															<div className=" border-black w-full ">
																<h2 className="text-black text-3xl font-bold justify-center">
																	MODIFICAR CURSO
																</h2>

																{/* FORMULARIO */}
																<form
																	id={e.id_curso}
																	onSubmit={(e) => modificarDatosCursos(e)}
																	onReset={() => setModal("modal")}
																>
																	{/* DIV CONTENEDOR */}
																	<div className="grid grid-cols-2 gap-4 m-2 ">
																		<input
																			id="idCurso"
																			placeholder={e.id_curso}
																			defaultValue={e.id_curso}
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
																				id="nvoNombreCurso"
																				placeholder={e.nombre}
																				defaultValue={e.nombre}
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
																				id="nvoDocente"
																				className="select w-full max-w-xs bg-transparent rounded-full border-black"
																				defaultValue={e.id_docente}
																			>
																				{docentes
																					? docentes.map((e) => {
																							return (
																								<option
																									value={e.id_docente}
																									key={e.id_docente}
																								>
																									{e.nombre.toUpperCase()}
																								</option>
																							);
																					  })
																					: false}
																			</select>
																			<label className="label">
																				<span className="label-text text-black">
																					NUEVO DIA:
																				</span>
																			</label>
																			<div className="flex m-0">
																				<select
																					id="nvoDia"
																					className="select w-full max-w-xs bg-transparent rounded-full border-black"
																				>
																					{dias
																						? dias.map((e) => {
																								return (
																									<option
																										value={
																											e.id_dia +
																											" " +
																											e.nombre
																										}
																										key={e.nombre}
																									>
																										{e.nombre}
																									</option>
																								);
																						  })
																						: false}
																				</select>
																				{/*  BOTON PARA AGREGAR MAS DE UN DIA */}
																				<button
																					onClick={(e) => agregarDia(e)}
																					type="button"
																					className="btn ml-2 bg-blue-600 text-black rounded-full w-12 border-none"
																				>
																					+
																				</button>
																				<div className="ml-2">
																					{
																						<ul className="grid grid-cols-1 gap-2">
																							{!diasSeleccionados
																								? false
																								: diasSeleccionados.map(
																										(e) => (
																											<li
																												key={
																													e.id_dia
																												}
																												className="text-black text-xs"
																											>
																												{
																													e.nombre
																												}
																											</li>
																										)
																								  )}
																						</ul>
																					}
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
																					defaultValue={
																						e.horario_inicio.split(":")[0]
																					}
																					id="nvoHorarioInicio"
																					type="number"
																					placeholder=""
																					maxLength="2"
																					className="input rounded-full text-black  w-28 bg-white border-black"
																				/>
																				<span className="">:</span>
																				<input
																					defaultValue={
																						e.horario_inicio.split(":")[1]
																					}
																					id="minInicio"
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
																					defaultValue={
																						e.horario_final.split(":")[0]
																					}
																					id="nvoHorarioFinal"
																					type="number"
																					placeholder=""
																					className="input rounded-full text-black  w-28 bg-white border-black"
																				/>

																				<input
																					defaultValue={
																						e.horario_inicio.split(":")[1]
																					}
																					id="minFinal"
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
																					defaultValue={
																						e.fecha_inicio
																							? e.fecha_inicio
																									.split("/")
																									.reverse()
																									.join("-")
																							: false
																					}
																					className="rounded-full input input-bordered text-black  input-info max-w-xs w-40 bg-white border-black"
																				/>

																				<input
																					id="fechaFinalizacion"
																					type="date"
																					defaultValue={
																						e.fecha_final
																							? e.fecha_final
																									.split("/")
																									.reverse()
																									.join("-")
																							: false
																					}
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

																				<label className="label cursor-pointer">
																					<span className=" text-black label-text"></span>
																					<input
																						id="nvoCheck"
																						type="checkbox"
																						className={`toggle toggle-info bg-white text-black border border-blue-400 `}
																						defaultChecked={
																							e.activo == "1"
																								? true
																								: false
																						}
																					/>
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
																				onClick={(e) => limpiarFormulario(e)}
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
											</div>
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
export default DataCursos;
