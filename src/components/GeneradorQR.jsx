import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Logo from "../assets/logo-CFL404-color-no-texto.png";
export default function GeneradorQR({ alumno }) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div
        ref={componentRef}
        className="w-80 h-48 ml-auto mr-auto mt-10 bg-white text-center flex flex-row flex-wrap rounded-3xl border border-black"
      >
        {/* <h2 className="text-2xl font-semibold border-b w-full border-blue-700 rounded-3xl pb-2">
            CENTRO DE FORMACIÓN LABORAL 404 BERISSO
          </h2> */}
        <div className="border-b-2 w-full flex flex-row items-center justify-center">
          <img className="w-20 m-0 p-0" src={Logo} alt="" />
          <h2 className="text-md font-semibold underline w-fit">
            Centro de Formación Laboral 404
          </h2>
        </div>
        <div className="text-start px-2">
          <h2 className="text-md font-semibold w-full">Datos del alumno:</h2>
          <div className="text-sm font-normal ml-auto mr-auto  rounded-lg">
            Apellido:{" "}
            <span className="italic">
              {" "}
              {alumno.apellido ? alumno.apellido.toUpperCase() : false}
            </span>
          </div>
          <div className="text-sm font-normal  ml-auto mr-auto rounded-lg">
            Nombre:{" "}
            <span className="italic">
              {" "}
              {alumno.nombre ? alumno.nombre.toUpperCase() : false}
            </span>
          </div>
          <div className="text-sm font-normal  ml-auto mr-auto rounded-lg">
            Nro de DNI: <span className="italic"> {alumno.nro_dni}</span>
          </div>
        </div>
        <QRCodeSVG
          size={90}
          className="rounded-lg border border-black m-auto"
          value={`${alumno.id_alumno}.`}
        />
      </div>
      <button
        onClick={handlePrint}
        className="btn btn-info bg-blue-400 text-white hover:text-black hover:bg-blue-100 border border-white m-4 absolute top-0 left-0"
      >
        Descargar
      </button>
    </div>
  );
}
