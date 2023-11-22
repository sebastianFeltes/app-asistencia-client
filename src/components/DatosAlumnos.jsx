//import { useQuery } from "@tanstack/react-query";
import { getAlumnos, postAlumnosModificado } from "../services/DatosAlumnos.services.js";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user.context";

function DatosAlumnos() {
	const userContext = useContext(UserContext);
	const usuario = userContext.userData;

	//
	//const userContext=useContext(UserContext);
	//const rol =  userContext.userData.id_rol;
	//console.log(rol)

	const [data, setData] = useState(undefined);
	const [dataFetch, setDataFetch] = useState(undefined);
	//const { data /*isLoading, error*/ } = useQuery({queryKey:"getAlumnos", queryFn:getAlumnos});
	const [modal, setModal] = useState("modal");

	async function getDataAlumnos() {
		const res = await getAlumnos();
		console.log(res);
		setDataFetch(res);
		return setData(res);
	}

	useEffect(() => {
		getDataAlumnos();
	}, []);
	function mostrarModal(e) {
		//funcion que muestra el modal
		e.preventDefault();
		const id = e.target.id;

		console.log(id);
		setModal("modal" + id);
	}

	function filtrar(e, tipoDeFiltro) {
		e.preventDefault();
		const value = e.target.value;
		let valorABuscar;

		if (isNaN(value)) {
			if (!value) {
				valorABuscar = "";
			} else {
				valorABuscar = value.toUpperCase();
			}
		} else {
			valorABuscar = value;
		}
		console.log(valorABuscar);

		if (tipoDeFiltro == "nombre") {
			const dataFiltrada = dataFetch.filter((alumno) =>
				String(alumno.nombre.toUpperCase()).includes(valorABuscar)
			);
			setData(dataFiltrada);
		} else if (tipoDeFiltro == "nroLegajo") {
			const dataFiltrada = dataFetch.filter((alumno) => String(alumno.nro_legajo).includes(valorABuscar));
			setData(dataFiltrada);
		} else if (tipoDeFiltro == "apellido") {
			const dataFiltrada = dataFetch.filter((alumno) =>
				String(alumno.apellido.toUpperCase()).includes(valorABuscar)
			);
			setData(dataFiltrada);
		} else if (tipoDeFiltro == "dni") {
			const dataFiltrada = dataFetch.filter((alumno) => String(alumno.nro_dni).includes(valorABuscar));
			setData(dataFiltrada);
		}
	}

	/*function limpiarFormulario(e) {
    e.target.reset();
  }*/

	async function modificarDatosAlumnos(e) {
		//funcion modifica los datos del alumno una vez cambiados
		e.preventDefault();
		!modal ? e.target.reset() : true;
		const activo = e.target.activo.checked ? "1" : "0";
		const nombre = e.target.nombreAlumno.value;
		const apellido = e.target.apellidoAlumno.value;
		const tipoDNI = e.target.tipoDocumento.value;
		const dni = e.target.dniAlumno.value;
		const fechaNac = e.target.fechaNacimiento.value;
		const codAreaTel = e.target.telCaracteristica.value;
		const telefono = e.target.telAlumno.value;
		const direccion = e.target.direccionAlumno.value;
		const email = e.target.emailAlumno.value;
		const carTelefonoExtra = e.target.telCaracterExtra.value;
		const telefonoExtra = e.target.telExtra.value;
		const legajo = e.target.nroLegajoAlumno.value;
		const localidad = e.target.localidadAlumno.value;
		const fotocAnalitico = e.target.docAnalitico.checked;
		const fotocDni = e.target.docDni.checked;
		const planillaIns = e.target.docPlanilla.checked;
		const id_alumno = e.target.id;

		const data = {
			activo: activo,
			nombre: nombre,
			apellido: apellido,
			tipo_dni: tipoDNI,
			nro_dni: parseInt(dni),
			fecha_nac: fechaNac,
			car_telefono: parseInt(codAreaTel),
			telefono: parseInt(telefono),
			direccion: direccion,
			email: email,
			nro_legajo: parseInt(legajo),
			localidad: localidad,
			car_tel_extra: parseInt(carTelefonoExtra),
			telefono_extra: parseInt(telefonoExtra),
			fotoc_analitico: fotocAnalitico ? 1 : 0,
			fotoc_dni: fotocDni ? 1 : 0,
			planilla_ins: planillaIns ? 1 : 0,
			id_alumno: parseInt(id_alumno),
		};
		console.log(data);
		const res = await postAlumnosModificado(data);

		console.log(res);
		if (res.message) {
			alert(res.message.toUpperCase());
			getDataAlumnos();
			return setModal("modal");
		}
		return setModal("modal");
	}

	function filtrar(e, tipoDeFiltro) {
		e.preventDefault();
		const value = e.target.value;
		let valorABuscar;

		if (isNaN(value)) {
			if (!value) {
				valorABuscar = "";
			} else {
				valorABuscar = value.toUpperCase();
			}
		} else {
			valorABuscar = value;
		}

		console.log(valorABuscar);
		/*  isNaN(e.target.value) ? e.target.value.toUpperCase() : e.target.value; */
		if (tipoDeFiltro == "nombre") {
			const dataFiltrada = dataFetch.filter((alumno) =>
				String(alumno.nombre.toUpperCase()).includes(valorABuscar)
			);
			setData(dataFiltrada);
		} else if (tipoDeFiltro == "nroLegajo") {
			const dataFiltrada = dataFetch.filter((alumno) => String(alumno.nro_legajo).includes(valorABuscar));
			setData(dataFiltrada);
		} else if (tipoDeFiltro == "nroDni") {
			const dataFiltrada = dataFetch.filter((alumno) => String(alumno.nro_dni).includes(valorABuscar));
			setData(dataFiltrada);
		} else {
			const dataFiltrada = dataFetch.filter((alumno) =>
				String(alumno.apellido.toUpperCase()).includes(valorABuscar)
			);
			setData(dataFiltrada);
		}
	}

	return (
		<div className="bg-white pt-4 min-h-screen">
			<div className="max-w-full">
				<div className="flex flex-row justify-between px-8">
					{usuario.id_rol == 1 ? (
						<Link to="/app/alta-alumno">
							<button className="btn bg-blue-600 text-white hover:bg-blue-300  hover:text-black">
								Nuevo Alumno
							</button>
						</Link>
					) : (
						false
					)}
					<h1 className="text-5xl text-center text-black font-bold">DATOS ALUMNOS</h1>

					<Link to="/app/historial-alumnos">
						<button className="btn bg-blue-600 text-white hover:bg-blue-300  hover:text-black">
							Historial Alumnos
						</button>
					</Link>
				</div>
				<div className="flex flex-row px-16 pt-8">
					<input
						onChange={(e) => filtrar(e, "nroLegajo")}
						id="nroLegajo"
						placeholder={"LEGAJO"}
						defaultValue={""}
						type="number"
						className="rounded-full input input-bordered input-info mx-1 w-full max-w-xs bg-white border-black"
					/>

					<input
						onChange={(e) => filtrar(e, "nombre")}
						id="nombre"
						placeholder={"NOMBRE"}
						defaultValue={""}
						type="text"
						className="rounded-full input input-bordered input-info mx-1 w-full max-w-xs bg-white border-black"
					/>

					<input
						onChange={(e) => filtrar(e, "apellido")}
						id="apellido"
						placeholder={"APELLIDO"}
						defaultValue={""}
						type="text"
						className="rounded-full input input-bordered input-info mx-1 w-full max-w-xs bg-white border-black"
					/>

					<input
						onChange={(e) => filtrar(e, "dni")}
						id="dni"
						placeholder={"DNI"}
						defaultValue={""}
						type="number"
						className="rounded-full input input-bordered input-info mx-1 w-full max-w-xs bg-white border-black"
					/>
				</div>

				<div className="overflow-x-auto">
					<table className="table text-center text-black  bg-white">
						{/* head */}
						<thead className="text-black">
							<tr>
								<th></th>
								<th>
									{" "}
									<p>LEGAJO</p> <p>ALUMNO</p>
								</th>
								<th>
									{" "}
									<p>NOMBRE</p> <p>ALUMNO</p>
								</th>
								<th>
									{" "}
									<p>APELLIDO</p> <p>ALUMNO</p>
								</th>
								<th>
									{" "}
									<p>TIPO D.N.I.</p> <p>ALUMNO</p>
								</th>
								<th>
									{" "}
									<p>N° D.N.I.</p> <p>ALUMNO</p>
								</th>
								<th>
									{" "}
									<p>FECHA DE</p> <p>NACIMIENTO</p>
								</th>
								<th>
									{" "}
									<p>DIRECCIÓN</p> <p>ALUMNO</p>
								</th>
								<th>LOCALIDAD</th>
								<th>
									{" "}
									<p>COD.TEL.</p> <p>ALUMNO</p>
								</th>
								<th>
									{" "}
									<p>TELEFONO</p> <p>ALUMNO</p>
								</th>
								<th>
									{" "}
									<p>EMAIL</p> <p>ALUMNO</p>
								</th>
								<th>
									{" "}
									<p>COD.TEL.EXTRA</p> <p>ALUMNO</p>
								</th>
								<th>
									{" "}
									<p>TEL. EXTRA</p> <p>ALUMNO</p>
								</th>
								<th>DOCUMENTACIÓN</th>
								<th>ACTIVO</th>
								<th>BOTONES</th>
							</tr>
						</thead>
						<tbody>
							{!data
								? false
								: data
										.filter((e) => e.activo == "1")
										.map((e) => (
											<tr key={e.id_alumno} className="hover:bg-slate-200">
												<td></td>
												<td>{e.nro_legajo}</td>
												<td>{e.nombre.toUpperCase()}</td>
												<td>{e.apellido.toUpperCase()}</td>
												<td>{e.tipo_dni}</td>
												<td>{e.nro_dni}</td>
												<td>{e.fecha_nac}</td>
												<td>{e.direccion.toUpperCase()}</td>
												<td>{e.localidad.toUpperCase()}</td>
												<td>{e.car_telefono}</td>
												<td>{e.telefono}</td>
												<td>{e.email}</td>
												<td>{e.car_tel_extra}</td>
												<td>{e.telefono_extra}</td>
												<td>
													<div>{e.fotoc_dni == true ? "DNI: SI" : "DNI: NO"}</div>
													<div>
														{e.planilla_ins == true ? "PLANILLA: SI" : "PLANILLA: NO"}
													</div>
													<div>
														{e.fotoc_analitico == true ? "ANALITICO: SI" : "ANALITICO: NO"}
													</div>
												</td>
												<td>{e.activo == "1" ? "ACTIVO" : "INACTIVO"}</td>

												{/* boton Editar del HISTORIAL ALUMNO */}
												<td>
													<div className="flex flex-col">
														<button
															className="btn bg-blue-600 text-white hover:bg-blue-300  hover:text-black"
															id={e.id_alumno}
															onClick={(e) => mostrarModal(e)}
														>
															Editar
														</button>
														<button
															className="btn bg-blue-600 text-white hover:bg-blue-300  hover:text-black"
															id={e.id_alumno}
														>
															generar QR
														</button>
													</div>

													<div
														id={`modal${e.id_alumno}`}
														className={
															modal == `modal${e.id_alumno}`
																? "visible fixed w-full max-h-screen overflow-scroll  m-0 p-0 top-0 left-0  flex flex-row justify-center bg-white border"
																: "hidden"
														}
													>
														<div className="hero min-h-screen bg-white">
															<div className="hero-content text-center w-full">
																<div className="border-4 border-black w-full rounded-3xl">
																	<div className=" border-black w-full ">
																		<h2 className="text-black text-3xl font-bold justify-center">
																			MODIFICAR ALUMNO
																		</h2>

																		{/* FORMULARIO */}
																		<form
																			id={e.id_alumno}
																			onSubmit={(e) => modificarDatosAlumnos(e)}
																			onReset={() => setModal("modal")}
																		>
																			{/* DIV CONTENEDOR */}
																			<div className="grid grid-cols-2 gap-4 m-2 ">
																				{/* DIV IZQUIERDO */}
																				<div
																					id="contenedor1"
																					className=" border-black flex flex-col m-2 "
																				>
																					<div className=" flex">
																						<label className="label">
																							<span className="label-text ms-1 text-black">
																								TIPO DE DOCUMENTO
																							</span>
																						</label>
																						<label className="label flex">
																							<p className="label-text text-black ms-4">
																								DNI DEL ALUMNO:
																								<span className="label-text-alt text-xs text-black m-2">
																									*sin puntos o
																									guiones
																								</span>
																							</p>
																						</label>
																					</div>
																					<div className="form-control flex flex-row">
																						{/* DEPENDIENDO CUAL SELECCIONE EN LA OPCION ANTERIOR,SE AUTOCOMPLETE CON F O M O NADA  */}
																						<select
																							id="tipoDocumento"
																							className=" m-0 w-40 select max-w-xs bg-transparent rounded-full border-black"
																							placeholder={e.tipo_dni}
																							defaultValue={e.tipo_dni}
																						>
																							{
																								<option
																									disabled
																									selected
																								>
																									Tipo DNI
																								</option>
																							}
																							<option value={"DU"}>
																								DU
																							</option>
																							<option value={"LC"}>
																								LC
																							</option>
																							<option value={"LE"}>
																								LE
																							</option>
																						</select>
																						<div className="m-0 p-0">
																							<div className="flex m-0">
																								<input
																									id="dniAlumno"
																									type="number"
																									placeholder={
																										e.nro_dni
																									}
																									defaultValue={
																										e.nro_dni
																									}
																									className="w-40 ms-0.5 rounded-full input input-bordered input-info  max-w-xs  bg-white border-black"
																								/>

																								{/* BOTON DE BUSCAR */}
																								{/* <button onClick={(e) => getBuscarAlumno(e)} type="" className="ms-1 btn bg-blue-600 text-black rounded-full w-24 border-none">Buscar</button> */}
																							</div>
																						</div>
																					</div>
																					<label className="label">
																						<span className="label-text text-black">
																							NRO DE LEGAJO:
																						</span>
																					</label>
																					<input
																						id="nroLegajoAlumno"
																						placeholder={e.nro_legajo}
																						defaultValue={e.nro_legajo}
																						type="number"
																						className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black"
																					/>

																					<label className="label">
																						<span className="label-text text-black">
																							NOMBRE ALUMNO:
																						</span>
																					</label>
																					<input
																						id="nombreAlumno"
																						placeholder={e.nombre}
																						defaultValue={e.nombre}
																						type="text"
																						className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black"
																					/>

																					<label className="label">
																						<span className="label-text text-black">
																							APELLIDO DEL ALUMNO:
																						</span>
																					</label>
																					<input
																						id="apellidoAlumno"
																						type="text"
																						placeholder={e.apellido}
																						defaultValue={e.apellido}
																						className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black"
																					/>

																					<label className="label ">
																						<span className="label-text text-black">
																							EMAIL DEL ALUMNO:
																						</span>
																					</label>
																					<input
																						id="emailAlumno"
																						type="email"
																						placeholder={e.email}
																						defaultValue={e.email}
																						className="rounded-full input input-info w-full max-w-xs  bg-white border-black"
																					/>

																					<span className="flex flex-row">
																						<label className="label cursor-pointer">
																							<span className="label-text text-black">
																								Activo
																							</span>
																						</label>
																						<input
																							id="activo"
																							type="checkbox"
																							className="checkbox  border-black m-2"
																							defaultChecked={
																								e.activo == "1"
																									? true
																									: false
																							}
																						/>
																					</span>
																				</div>

																				{/* DIV DERECHO */}

																				<div className=" border-black flex flex-col m-2 ">
																					<label className="label">
																						<span className="label-text text-black">
																							FECHA DE NACIMIENTO:
																						</span>
																					</label>
																					<input
																						id="fechaNacimiento"
																						type="text"
																						placeholder={e.fecha_nac}
																						defaultValue={e.fecha_nac}
																						className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black"
																					/>
																					<label className="label">
																						<span className="label-text text-black">
																							DIRECCION:
																						</span>
																					</label>
																					<input
																						id="direccionAlumno"
																						type="text"
																						placeholder={e.direccion}
																						defaultValue={e.direccion}
																						className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black"
																					/>

																					<label className="label">
																						<span className="label-text text-black">
																							LOCALIDAD:
																						</span>
																					</label>
																					<input
																						id="localidadAlumno"
																						type="text"
																						placeholder={e.localidad}
																						defaultValue={e.localidad}
																						className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black"
																					/>
																					<div className=" flex">
																						<label className="label ">
																							<p className="label-text ms-1 text-black">
																								TEL CARACT:{" "}
																								<span className="label-text text-xs text-black ">
																									*sin 0
																								</span>{" "}
																							</p>
																						</label>
																						<label className="label">
																							<p className="label-text ms-10 text-black">
																								TEL ALUMNO:
																								<span className="label-text-alt text-xs text-black m-2">
																									*sin 15
																								</span>
																							</p>
																						</label>
																					</div>
																					<div className="form-control flex flex-row">
																						<input
																							id="telCaracteristica"
																							type="number"
																							placeholder={e.car_telefono}
																							defaultValue={
																								e.car_telefono
																							}
																							className="rounded-full input input-bordered input-info max-w-xs w-40 bg-white border-black"
																						/>

																						<input
																							id="telAlumno"
																							type="number"
																							placeholder={e.telefono}
																							defaultValue={e.telefono}
																							className="ms-0.5 rounded-full input input-bordered input-info w-40 max-w-xs  bg-white border-black"
																						/>
																					</div>

																					<div className=" flex">
																						<label className="label ">
																							<p className="label-text ms-1 text-black">
																								TEL CARACT:{" "}
																								<span className="label-text text-xs text-black ">
																									*sin 0
																								</span>{" "}
																							</p>
																						</label>
																						<label className="label">
																							<p className="label-text ms-10 text-black">
																								TEL EXTRA:
																								<span className="label-text-alt text-xs text-black m-2">
																									*sin 15
																								</span>
																							</p>
																						</label>
																					</div>
																					<div className="form-control flex flex-row">
																						<input
																							id="telCaracterExtra"
																							type="number"
																							placeholder={
																								e.car_tel_extra
																							}
																							defaultValue={
																								e.car_tel_extra
																							}
																							className="rounded-full input input-bordered input-info max-w-xs w-40 bg-white border-black"
																						/>

																						<input
																							id="telExtra"
																							type="number"
																							placeholder={
																								e.telefono_extra
																							}
																							defaultValue={
																								e.telefono_extra
																							}
																							className="ms-0.5 rounded-full input input-bordered input-info w-40 max-w-xs  bg-white border-black"
																						/>
																					</div>

																					{/*   DIV DOCUMENTACION */}
																					<div className="form-control flex flex-row">
																						<label className="label">
																							<span className="label-text text-black">
																								DOCUMENTACION:
																							</span>
																						</label>

																						<label className="label cursor-pointer">
																							<span className=" text-black label-text">
																								DNI
																							</span>
																							<input
																								id="docDni"
																								type="checkbox"
																								className="checkbox border-black m-2 "
																								defaultChecked={
																									e.fotoc_dni == 1
																										? true
																										: false
																								}
																							/>
																						</label>

																						<label className="label cursor-pointer">
																							<span className=" text-black label-text">
																								Planilla
																							</span>
																							<input
																								id="docPlanilla"
																								type="checkbox"
																								className="checkbox  border-black m-2"
																								defaultChecked={
																									e.planilla_ins == 1
																										? true
																										: false
																								}
																							/>
																						</label>

																						<label className="label cursor-pointer">
																							<span className="label-text text-black">
																								Analitico
																							</span>
																							<input
																								id="docAnalitico"
																								type="checkbox"
																								className="checkbox  border-black m-2"
																								defaultChecked={
																									e.fotoc_analitico ==
																									1
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
																						className="btn max-w-xs bg-blue-600 text-white hover:bg-blue-300  hover:text-black"
																					>
																						Aceptar
																					</button>
																				</div>
																				<div className="content-center m-2">
																					<button
																						type="reset"
																						className="btn  max-w-xs bg-blue-600 text-white hover:bg-blue-300  hover:text-black"
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
										))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default DatosAlumnos;
