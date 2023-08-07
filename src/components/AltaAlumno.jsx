export default function AltaAlumno() {
    return (
        <div className="hero min-h-screen bg-slate-50">
            <div className="hero-content text-center w-full">
                <div className="border-2 border-black w-full">
                    <div className=" border-black ">

                        <h2 className="text-black">ALTA NUEVO ALUMNO</h2>
                        <form className="grid grid-cols-2 gap-4">

                            <div className=" border-black flex flex-col m-2">
                                <label className="label">
                                    <span className="label-text text-black">NOMBRE ALUMNO</span>
                                </label>
                                <input type="text" placeholder="[nombre]" className="input input-bordered input-info w-full max-w-xs bg-white border-black" />
                                <label className="label">
                                    <span className="label-text text-black">APELLIDO DEL ALUMNO</span>
                                </label>
                                <input type="text" placeholder="[apellido]" className="input input-bordered input-info w-full max-w-xs bg-white border-black" />
                               
                               
                                <div className="form-control flex flex-row m-2">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">DU</span>
                                        <input type="checkbox" checked="checked" className="checkbox" />
                                    </label>

                                    <label className="label cursor-pointer">
                                        <span className="label-text">LC</span>
                                        <input type="checkbox" checked="checked" className="checkbox" />
                                    </label>

                                    <label className="label cursor-pointer">
                                        <span className="label-text">LE</span>
                                        <input type="checkbox" checked="checked" className="checkbox" />
                                    </label>
                                </div>
                                
                                <label className="label">
                                    <span className="label-text text-black">DNI DEL ALUMNO</span>
                                </label>
                                <input type="text" placeholder="[DNI]" className="input input-bordered input-info w-full max-w-xs  bg-white border-black" />
                                <label className="label">
                                    <span className="label-text text-black">NRO DE LEGAJO</span>
                                </label>
                                <input type="text" placeholder="[Nro de legajo]" className="input input-bordered input-info w-full max-w-xs bg-white border-black" />

                            </div>


                            <div className="m-2">
                                <label className="label ">
                                    <span className="label-text text-black">EMAIL DEL ALUMNO</span>
                                </label>
                                <input type="email" placeholder="[email]" className="input input-info w-full max-w-xs  bg-white border-black" />
                                <label className="label">
                                    <span className="label-text text-black">TELEFONO DEL ALUMNO</span>
                                </label>
                                <input type="num" placeholder="[telefono]" className="input input-bordered input-info w-full max-w-xs  bg-white border-black" />

                                <label className="label">
                                    <span className="label-text text-black">DIRECCION</span>
                                </label>
                                <input type="text" placeholder="[direccion]" className="input input-bordered input-info w-full max-w-xs bg-white border-black" />
                                <label className="label">
                                    <span className="label-text text-black">LOCALIDAD</span>
                                </label>
                                <input type="text" placeholder="[localidad]" className="input input-bordered input-info w-full max-w-xs bg-white border-black" />
                            </div>

                            <div className="form-control flex flex-row">
                                <label className="label cursor-pointer">
                                    <span className="label-text">DNI</span>
                                    <input type="checkbox" checked="checked" className="checkbox" />
                                </label>

                                <label className="label cursor-pointer">
                                    <span className="label-text">Planilla</span>
                                    <input type="checkbox" checked="checked" className="checkbox" />
                                </label>

                                <label className="label cursor-pointer">
                                    <span className="label-text">Analitico</span>
                                    <input type="checkbox" checked="checked" className="checkbox" />
                                </label>
                            </div>


                            <div className="content-center">
                                <label className="label">
                                    <span className="label-text text-black">CURSO</span>
                                </label>
                                <select className="select w-full max-w-xs bg-transparent">
                                    <option disabled selected>CURSO AL QUE ASISTIRA</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </form>





                        <div className="content-center m-2">
                            <button className="btn">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}