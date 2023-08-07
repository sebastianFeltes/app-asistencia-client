function AltaDocente() {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center w-full">
                    <div className="w-full">
                        <h1 className="text-5xl font-bold m-2">Alta Docente</h1>

                        <div className="flex flex-row">

                            <div className="form-control w-full max-w-full border border-cyan-400  p-4 m-5">
                                <label className="label">
                                    <span className="label-text">Nombre Docente</span>
                                </label>
                                <input type="text" placeholder="Nombre Del Profesor" className="input input-bordered w-full max-w-3xl" />

                                <label className="label">
                                    <span className="label-text">Apellido Docente</span>
                                </label>
                                <input type="text" placeholder="Nombre Del Curso" className="input input-bordered w-full max-w-3xl" />
                            </div>
                            <div className="form-control w-full max-w-full  border border-cyan-400 p-4 m-5">
                                <label className="label">
                                    <span className="label-text">Direccion</span>
                                </label>
                                <input type="text" placeholder="-----" className="input input-bordered w-full max-w-3xl" />

                                <label className="label">
                                    <span className="label-text">Localidad</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-3xl" />
                            </div>

                        </div>
                        <div className="flex flex-row">
                            <div className="form-control w-full max-w-full border border-cyan-400 p-4 m-5 ">
                                <label className="label">
                                    <span className="label-text">Telefono</span>
                                </label>
                                <input type="text" placeholder="Nombre Del Profesor" className="input input-bordered w-full max-w-3xl" />

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Nombre Del Curso" className="input input-bordered w-full max-w-3xl" />
                            </div>
                            <div className="form-control w-full max-w-full  border border-cyan-400 p-4 m-5">
                                <label className="label">
                                    <span className="label-text">Tel Extra</span>
                                </label>
                                <input type="text" placeholder="XXXXX" className="input input-bordered w-full max-w-3xl" />

                                <label className="label">
                                    <span className="label-text">Rol</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-3xl" />

                            </div>
                            <div className="form-control w-full max-w-full  border border-cyan-400 p-4 m-5">
                                <label className="label">
                                    <span className="label-text">Documento</span>
                                </label>
                                <input type="text" placeholder="Dni" className="input input-bordered w-full max-w-3xl" />
                                <span className="label-text">Tipo De Doc</span>
                                <label className="label cursor-pointer">
                                    <span className="label-text">DU</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-red-00" checked />
                                </label>
                                <label className="label cursor-pointer">
                                    <span className="label-text">LE</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-00" checked />
                                </label>                            <label className="label cursor-pointer">
                                    <span className="label-text">LE</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-00" checked />
                                </label>


                            </div>


                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}
export default AltaDocente