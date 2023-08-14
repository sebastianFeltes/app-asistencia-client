export default function AltaAlumno() {
    return (
        <div className="hero min-h-screen bg-slate-50">
            <div className="hero-content text-center w-full">
                <div className="border-2 border-black w-full">
                    <div className=" border-black">

                        <h2 className="text-black text-3xl">ALTA NUEVO ALUMNO</h2>

                        <form className="grid grid-cols-2 gap-4">

                            {/* AGREGAR BOTON DE BUSCAR */}
                            <div className=" border-black flex flex-col m-2">
                                <label className="label">
                                    <span className="label-text text-black">NOMBRE ALUMNO:</span>
                                </label>
                                <input id="nombreAlumno" type="text" placeholder="[nombre]" className="input input-bordered input-info w-full max-w-xs bg-white border-black" />

                                <label className="label">
                                    <span className="label-text text-black">APELLIDO DEL ALUMNO:</span>
                                </label>
                                <input id="apellidoAlumno" type="text" placeholder="[apellido]" className="input input-bordered input-info w-full max-w-xs bg-white border-black" />


                                <label className="label">
                                    <span className="label-text text-black">TIPO DE DOCUMENTO:</span>
                                </label>
                                <div className="form-control flex flex-row m-2">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">DU</span>
                                        <input type="radio" name="radio-1" className="radio" checked />
                                    </label>

                                    <label className="label cursor-pointer">
                                        <span className="label-text">LC</span>
                                        <input type="radio" name="radio-1" className="radio" checked />
                                    </label>

                                    <label className="label cursor-pointer">
                                        <span className="label-text">LE</span>
                                        <input type="radio" name="radio-1" className="radio" checked />
                                    </label>
                                </div>


                                {/* DEPENDIENDO CUAL SELECCIONE EN LA OPCION ANTERIOR,SE AUTOCOMPLETE CON F O M O NADA  */}
                                <label className="label">
                                    <span className="label-text text-black">DNI DEL ALUMNO:</span>
                                </label>
                                <input id="dniAlumno" type="text" placeholder="[DNI]" className="input input-bordered input-info w-full max-w-xs  bg-white border-black" />

                                <label className="label">
                                    <span className="label-text text-black">DIRECCION:</span>
                                </label>
                                <input id="direccionAlumno" type="text" placeholder="[direccion]" className="input input-bordered input-info w-full max-w-xs bg-white border-black" />

                                <label className="label">
                                    <span className="label-text text-black">LOCALIDAD:</span>
                                </label>
                                <input id="localidadAlumno" type="text" placeholder="[localidad]" className="input input-bordered input-info w-full max-w-xs bg-white border-black" />

                            </div>


                            <div className=" border-black flex flex-col m-2 justify-center ">

                                <label className="label ">
                                    <span className="label-text text-black">EMAIL DEL ALUMNO:</span>
                                </label>
                                <input id="emailAlumno" type="email" placeholder="[email]" className="input input-info w-full max-w-xs  bg-white border-black" />

                                <label className="label">
                                    <span className="label-text text-black">TELEFONO DEL ALUMNO:</span>
                                </label>
                                {/* ACLARAR SIN 15 */}
                                <input id="telAlumno" type="num" placeholder="[telefono]" className="input input-bordered input-info w-full max-w-xs  bg-white border-black" />

                                <label className="label">
                                    <span className="label-text text-black">TELEFONO CARACTERISTICA:</span>
                                </label>
                                {/* ACLARAR SIN 0 O PONER EL 0 NOSOTROS */}
                                <input id="telCaracteristica" type="num" placeholder="[telefono]" className="input input-bordered input-info w-full max-w-xs  bg-white border-black" />

                                <label className="label">
                                    <span className="label-text text-black">TELEFONO EXTRA:</span>
                                </label>
                                {/* MISMA LOGICA */}
                                <input id="telExtra" type="num" placeholder="[telefono]" className="input input-bordered input-info w-full max-w-xs  bg-white border-black" />

                                <label className="label">
                                    <span className="label-text text-black">NRO DE LEGAJO:</span>
                                </label>
                                <input id="nroLegajoAlumno" type="text" placeholder="[Nro de legajo]" className="input input-bordered input-info w-full max-w-xs bg-white border-black" />
                                
                                <label className="label">
                                    <span className="label-text text-black">DOCUMENTACION:</span>
                                </label>
                                <div className="form-control flex flex-row">

                                    <label className="label cursor-pointer">
                                        <span className="label-text">DNI</span>
                                        <input type="radio" name="radio-1" className="radio" checked />
                                    </label>

                                    <label className="label cursor-pointer">
                                        <span className="label-text">Planilla</span>
                                        <input type="radio" name="radio-1" className="radio" checked />
                                    </label>

                                    <label className="label cursor-pointer">
                                        <span className="label-text">Analitico</span>
                                        <input type="radio" name="radio-1" className="radio" checked />
                                    </label>

                                </div>
                               
                                <label className="label">
                                    <span className="label-text text-black">CURSO:</span>
                                </label>

                                {/* BOTON PARA AGREGAR MAS DE UN CURSO */}

                                <select className="select w-full max-w-xs bg-transparent">
                                    <option disabled selected>CURSO AL QUE ASISTIRA</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>

                            <div className="content-center m-2">
                                <button className="btn">Cancelar</button>
                            </div>

                            <div className="content-center m-2">
                                <button type="submit" className="btn">Aceptar</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}