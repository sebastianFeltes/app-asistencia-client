import postAltaAlumno from "../services/altaAlumnos.services";
import "./altaAlumno.scss";
export default function AltaAlumno() {
    //función para enviar datos
    async function post(e) {
        e.preventDefault();
        const nombreAlumno = e.target.nombreAlumno.value;
        const apellidoAlumno = e.target.apellidoAlumno.value;
        const tipoDocumento = e.target.tipoDocumento.value;
        const dniAlumno = e.target.dniAlumno.value;
        const direccionAlumno = e.target.direccionAlumno.value;
        const localidadAlumno = e.target.localidadAlumno.value;
        const emailAlumno = e.target.emailAlumno.value;
        const telAlumno = e.target.telAlumno.value;
        const telCaracteristica = e.target.telCaracteristica.value;
        const telExtra = e.target.telExtra.value;
        const nroLegajoAlumno = e.target.nroLegajoAlumno.value;
        const docDni = e.target.docDni.checked;
        const docPlanilla = e.target.docPlanilla.checked;
        const docAnalitico = e.target.docAnalitico.checked;
        const cursoAlumno = e.target.cursoAlumno.value;




        const data = {
            nombre: nombreAlumno,
            apellido: apellidoAlumno,
            tipoDoc: tipoDocumento,
            dni: dniAlumno,
            direccion: direccionAlumno,
            localidad: localidadAlumno,
            email: emailAlumno,
            tel: telAlumno,
            telCar: telCaracteristica,
            telExt: telExtra,
            numLegajo: nroLegajoAlumno,
            documentacionDni: docDni,
            documentacionPlanilla: docPlanilla,
            documentacionAnalitico: docAnalitico,
            curso: cursoAlumno
        }
        const res = await postAltaAlumno(data);
        /*   console.log(data) */
        return res;

    }

    return (
        <div className="hero min-h-screen bg-slate-50">
            <div className="hero-content text-center w-full">
                <div className="border-2 border-black w-full">
                    <div className=" border-black">

                        <h2 className="text-black text-3xl">ALTA NUEVO ALUMNO</h2>

                        <form onSubmit={e => post(e)} className="grid grid-cols-2 gap-4">

                            {/* AGREGAR BOTON DE BUSCAR */}
                            {/* DIV IZQUIERDO */}
                            <div id="contenedor1" className=" border-black flex flex-col m-2">
                                <label className="label">
                                    <span className="label-text text-black">NOMBRE ALUMNO:</span>
                                </label>
                                <input id="nombreAlumno" type="text" placeholder="[nombre]" className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black" />

                                <label className="label">
                                    <span className="label-text text-black">APELLIDO DEL ALUMNO:</span>
                                </label>
                                <input id="apellidoAlumno" type="text" placeholder="[apellido]" className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black" />


                                <label className="label">
                                    <span className="label-text text-black">TIPO DE DOCUMENTO:</span>
                                </label>
                                <div className="form-control flex flex-row ">
                                    <select id="tipoDocumento" className="select w-full max-w-xs bg-transparent rounded-full border-black">
                                        {<option disabled selected>Tipo DNI</option>}
                                        <option>DU</option>
                                        <option>LC</option>
                                        <option>LE</option>
                                    </select>
                                </div>


                                {/* DEPENDIENDO CUAL SELECCIONE EN LA OPCION ANTERIOR,SE AUTOCOMPLETE CON F O M O NADA  */}
                                <label className="label">
                                    <p className="label-text text-black">DNI DEL ALUMNO:<span className="label-text-alt m-2">*sin puntos ni letras</span></p>
                                </label>
                                <input id="dniAlumno" type="text" placeholder="[DNI]" className=" rounded-full input input-bordered input-info w-full max-w-xs  bg-white border-black" />

                                <label className="label">
                                    <span className="label-text text-black">DIRECCION:</span>
                                </label>
                                <input id="direccionAlumno" type="text" placeholder="[direccion]" className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black" />

                                <label className="label">
                                    <span className="label-text text-black">LOCALIDAD:</span>
                                </label>
                                <input id="localidadAlumno" type="text" placeholder="[localidad]" className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black" />

                            </div>
                            {/* DIV DERECHO */}
                            <div className=" border-black flex flex-col m-2 justify-center ">
                                <label className="label ">
                                    <span className="label-text text-black">EMAIL DEL ALUMNO:</span>
                                </label>
                                <input id="emailAlumno" type="email" placeholder="[email]" className="rounded-full input input-info w-full max-w-xs  bg-white border-black" />
                                <label className="label">
                                    <p className="label-text text-black">TELEFONO DEL ALUMNO:<span className="label-text-alt m-2">*sin 15</span></p>
                                </label>
                                {/* ACLARAR SIN 15 */}
                                <input id="telAlumno" type="number" placeholder="[telefono]" className="rounded-full input input-bordered input-info w-full max-w-xs  bg-white border-black" />
                                <label className="label">
                                    <p className="label-text text-black">TELEFONO CARACTERISTICA: <span className="label-text-alt m-2">*sin 0</span></p>
                                </label>
                                {/* ACLARAR SIN 0 O PONER EL 0 NOSOTROS */}
                                <input id="telCaracteristica" type="number" placeholder="[telefono]" className="rounded-full input input-bordered input-info w-full max-w-xs  bg-white border-black" />
                                <label className="label">
                                    <p className="label-text text-black">TELEFONO EXTRA:<span className="label-text-alt m-2">*sin 15</span></p>
                                </label>
                                {/* MISMA LOGICA */}
                                <input id="telExtra" type="number" placeholder="[telefono]" className="rounded-full input input-bordered input-info w-full max-w-xs  bg-white border-black" />
                                <label className="label">
                                    <span className="label-text text-black">NRO DE LEGAJO:</span>
                                </label>
                                <input id="nroLegajoAlumno" type="number" placeholder="[Nro de legajo]" className="rounded-full input input-bordered input-info w-full max-w-xs bg-white border-black" />
                                <label className="label">
                                    <span className="label-text text-black">DOCUMENTACION:</span>
                                </label>
                                <div className="form-control flex flex-row">

                                    <label className="label cursor-pointer">
                                        <span className=" text-black label-text">DNI</span>
                                        <input id="docDni" type="checkbox" className="checkbox border-black m-2 " />
                                    </label>

                                    <label className="label cursor-pointer">
                                        <span className=" text-black label-text">Planilla</span>
                                        <input id="docPlanilla" type="checkbox" className="checkbox  border-black m-2" />
                                    </label>

                                    <label className="label cursor-pointer">
                                        <span className="label-text text-black">Analitico</span>
                                        <input id="docAnalitico" type="checkbox" className="checkbox  border-black m-2" />
                                    </label>

                                </div>

                                <label className="label">
                                    <span className="label-text text-black">CURSO:</span>
                                </label>

                                {/* BOTON PARA AGREGAR MAS DE UN CURSO */}

                                <select id="cursoAlumno" className="select w-full max-w-xs bg-transparent rounded-full border-black">
                                    <option disabled selected>CURSO AL QUE ASISTIRA</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>

                            <div className="content-center m-2">
                                <button className="btn  bg-blue-600 text-black rounded-full w-48 ">Cancelar</button>
                            </div>

                            <div className="content-center m-2">
                                <button type="submit" className="btn bg-blue-600 text-black rounded-full w-48 ">Aceptar</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}