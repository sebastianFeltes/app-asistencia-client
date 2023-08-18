function AltaDocente() {
  return (
    <>
      <div className="hero min-h-screen bg-gray-100">
        <div className="hero-content text-center w-full border border-black">
          <div className="w-full">
            <h2 className="text-3xl text-black font-bold mb-8">Alta Docente</h2>

            <form className="grid grid-cols-2 gap-4 ">
              <div className="flex flex-col m-2">
                <label className="label">
                  <span className="label-text  text-black">Documento</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs bg-white border-black"
                />
                <label className="label">
                  <span className="label-text  text-black">Tipo De Doc</span>
                </label>
                <div className="from-control flex flex-row m-2">
                  <label className="label cursor-pointer">
                    <span className="label-text  text-black">DU</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-red-00"
                      checked
                    />
                  </label>
                  <label className="label  cursor-pointer">
                    <span className="label-text text-black">LC</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-00"
                      checked
                    />
                  </label>{" "}
                  <label className="label cursor-pointer">
                    <span className="label-text  text-black">LE</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-00"
                      checked
                    />
                  </label>
                </div>

                <label className="label">
                  <span className="label-text  text-black">Nombre Docente</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs bg-white border-black"
                />

                <label className="label">
                  <span className="label-text  text-black">
                    Apellido Docente
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs bg-white border-black"
                />

                <label className="label">
                  <span className="label-text text-black">Direccion</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs bg-white border-black"
                />

                <label className="label">
                  <span className="label-text text-black">Localidad</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs bg-white border-black"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 ">
                <div className=" ">
                  <label className="label">
                    <span className="label-text  text-black">Tel Extra</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text  text-black">Rol</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs bg-white border-black"
                  />
                  <label className="label">
                    <span className="label-text  text-black">Telefono</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs bg-white border-black"
                  />

                  <label className="label">
                    <span className="label-text  text-black">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs bg-white border-black"
                  />
                </div>
              </div>
              <div className="content-center m-2">
                <button className="btn bg-blue-900 text-black">Cancelar</button>
              </div>
              <div className="content-center m-2">
                <button type="submit" className="btn bg-blue-900 text-black">
                  Aceptar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AltaDocente;
