import { useState } from "react";
import { buscarAlumnoPorID } from "../services/GestionQR.services";

export default function LectorQR() {
	const [mostrarData, setMostrarData] = useState(false);
	const [alumno, setAlumno] = useState(false);
	const sendInfo = async (e) => {
		e.preventDefault();
		let currentValue = e.target.value;
		if (currentValue.includes(".")) {
			let findedNum = parseInt(e.target.value.split(".")[0]);

			//TODO: enviar findedNum al servidor para traer los datos del alumno
			const res = await buscarAlumnoPorID(findedNum);
			setAlumno( await res);
			console.log(res)
			setMostrarData(!mostrarData);
		}
	};

	return (
		<div className="hero min-h-screen bg-white ">
			<div className="hero-content w-full text-center">
				<div className="w-full flex flex-col ">
					<h1 className="text-5xl m-8 font-bold">
						{mostrarData ? "Datos del alumno" : "Escanee su código.."}
					</h1>
					<input
						onChange={(e) => sendInfo(e)}
						id="nombreAlumno"
						type="password"
						placeholder="Código"
						className={
							!mostrarData
								? "rounded-full input input-bordered input-info max-w-xs text-center ml-auto mr-auto bg-white border-black"
								: "hidden"
						}
					/>
					<div className={mostrarData ? "block" : "hidden"}>
						<div className="w-1/2 h-full ml-auto mr-auto bg-white flex flex-col ">
							<span className=" w-1/2 p-3 font-normal my-4  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
								{alumno ? alumno.data_alumno_curso.apellido_alumno : false}
							</span>
							<span className=" w-1/2 p-3 my-4 font-normal  ml-auto mr-auto   border-b border-blue-600 rounded-lg">
								{alumno ? alumno.data_alumno_curso.nombre_alumno : false}
							</span>
							<span className=" w-1/2 p-3 font-normal my-4  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
								{alumno ? alumno.data_alumno_curso.dni_alumno : false}
							</span>
							<span className=" w-1/2 p-3 font-normal my-4  ml-auto mr-auto  border-b border-blue-600 rounded-lg">
								{alumno.hora_ingreso}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
