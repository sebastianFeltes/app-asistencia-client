import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Logo from "../assets/logo-CFL404-color.png";
import Detalle from "../assets/detalle-bandera-credencial.png"

export default function GeneradorQR({ alumno }) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div
        ref={componentRef}
        className="relative w-80 h-48 ml-auto mr-auto mt-10 bg-white text-center flex flex-row flex-wrap rounded-3xl border border-black"
      >
        {/* <h2 className="text-2xl font-semibold border-b w-full border-blue-700 rounded-3xl pb-2">
            CENTRO DE FORMACIÓN LABORAL 404 BERISSO
          </h2> */}

        <h2 className="text-md text-blue-600 font-bold underline w-full text-center mt-2">
          CREDENCIAL DE ALUMNO
        </h2>
        <div className="w-2/3 flex flex-col justify-around items-start p-4 z-30">
          <div className="text-start flex flex-col">
            <span className="font-bold italic">
              {alumno.apellido ? alumno.apellido.toUpperCase() : false},{" "}
              {alumno.nombre ? alumno.nombre.toUpperCase() : false}
            </span>
            <span>DNI: {alumno.nro_dni}</span>
          </div>
          <div className=""></div>
          <QRCodeSVG
            size={90}
            className="rounded-sm"
            value={`${alumno.id_alumno}.`}
          />
        </div>
        <div>
          <img src={Detalle} alt="" className="absolute w-80 top-10 right-0" />
        </div>
        <div className="w-1/3 flex flex-col justify-around items-center">
          <img className=" w-24 m-0 p-0" src={Logo} alt="" />
          <span className="text-blue-600 font-semibold italic">cfl404.ar</span>
        </div>
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
