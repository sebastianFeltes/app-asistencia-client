import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function GeneradorQR({ alumno }) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div
        ref={componentRef}
        className="w-1/2 h-full mt-2 p-4 ml-auto mr-auto bg-white text-center flex flex-col rounded-3xl border border-black"
      >
        <div>
          <h2 className="text-2xl font-semibold border-b w-full border-blue-700 rounded-3xl pb-2">
            CENTRO DE FORMACIÓN LABORAL 404 BERISSO
          </h2>
          <h2 className="text-xl font-semibold underline ">
            Datos del alumno:
          </h2>
          <div className=" w-1/2 text-lg font-normal my-2  ml-auto mr-auto  rounded-lg">
            Apellido:{" "}
          </div>
          <div className=" w-1/2 text-lg my-2  ml-auto mr-auto font-bold rounded-lg">
            {alumno.apellido ? alumno.apellido.toUpperCase() : false}
          </div>

          <div className=" w-1/2 text-lg my-2 font-normal  ml-auto mr-auto rounded-lg">
            Nombre:{" "}
          </div>
          <div className=" w-1/2 text-lg my-2 font-bold  ml-auto mr-auto rounded-lg">
            <span className="font-bold">
              {alumno.nombre ? alumno.nombre.toUpperCase() : false}
            </span>
          </div>
          <div className=" w-1/2 text-lg font-normal my-2  ml-auto mr-auto rounded-lg">
            Nro de DNI:
          </div>
          <div className=" w-1/2 text-lg my-2  ml-auto mr-auto rounded-lg font-bold">
            {alumno.nro_dni}
          </div>
          <QRCodeSVG
            size={256}
            className="rounded-lg  m-4  ml-auto mr-auto border border-black"
            value={`${alumno.id_alumno}.`}
          />
        </div>
      </div>
      <button onClick={handlePrint} className="btn btn-primary m-4">
        Descargar código QR
      </button>
    </div>
  );
}
