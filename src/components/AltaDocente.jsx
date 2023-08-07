function AltaDocente() {
    return (
        <>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content text-center w-full">
                    <div className="w-full">
                        <h1 className="text-5xl text-black font-bold m-2">Alta Docente</h1>

                        <div className="flex flex-row columns-3xl">

                            <div className="form-control w-full max-w-full border border-black p-4 m-5">
                                <label className="label">
                                    <span className="label-text  text-black">Nombre Docente</span>
                                </label>
                                <input type="text" placeholder="Nombre Del Profesor" className="input input-bordered  bg-white w-full max-w-3xl" />

                                <label className="label">
                                    <span className="label-text  text-black">Apellido Docente</span>
                                </label>
                                <input type="text" placeholder="Nombre Del Curso" className="input input-bordered  bg-white w-full max-w-3xl" />
                            </div>
                            <div className="form-control w-full max-w-full  border border-black p-4 m-5">
                                <label className="label">
                                    <span className="label-text text-black">Direccion</span>
                                </label>
                                <input type="text" placeholder="-----" className="input input-bordered  bg-white w-full max-w-3xl" />

                                <label className="label">
                                    <span className="label-text  text-black">Localidad</span>
                                </label>
                                <select className="select  bg-white  text-black w-full max-w-full">
                                    <option disabled selected>What is city from?</option>
                                    <option>City Of Berisso</option>
                                    <option>City Of La Plata</option>
                                    <option>City Of Ensenada</option>

                                </select>
                            </div>

                        </div>
                        <div className="flex flex-row">
                            <div className="form-control w-full max-w-full border border-black p-4 m-5 ">
                                <label className="label">
                                    <span className="label-text  text-black">Telefono</span>
                                </label>
                                <input type="text" placeholder="Numero" className="input input-bordered bg-white w-full max-w-3xl" />

                                <label className="label">
                                    <span className="label-text  text-black">Email</span>
                                </label>
                                <input type="text" placeholder="Nombre Del Curso" className="input input-bordered  bg-white w-full max-w-3xl" />
                            </div>
                            <div className="form-control w-full max-w-full  border border-black p-4 m-5">
                                <label className="label">
                                    <span className="label-text  text-black">Tel Extra</span>
                                </label>
                                <input type="text" placeholder="XXXXX" className="input input-bordered  bg-white w-full max-w-3xl" />

                                <label className="label">
                                    <span className="label-text  text-black">Rol</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered  bg-white w-full max-w-3xl" />

                            </div>
                            <div className="form-control w-full max-w-full  border border-black p-4 m-5">
                                <label className="label">
                                    <span className="label-text  text-black">Documento</span>
                                </label>

                                <input type="text" placeholder="Dni" className="input input-bordered  bg-white w-full max-w-3xl" />
                                <span className="label-text  text-black">Tipo De Doc</span>
                                <label className="label cursor-pointer">
                                    <span className="label-text  text-black">DU</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-red-00" checked />
                                </label>
                                <label className="label cursor-pointer">
                                    <span className="label-text text-black">LC</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-00" checked />
                                </label>                            <label className="label cursor-pointer">
                                    <span className="label-text  text-black">LE</span>
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