import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Logo from "../assets/logo-CFL404-color.png";
import Detalle from "../assets/detalle-bandera-credencial.png";
import {
  exportComponentAsJPEG,
  exportComponentAsPNG,
} from "react-component-export-image";

export default function GeneradorQR({ alumno }) {
  const componentRef = useRef();
  /*   const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  }); */

  return (
    <div>
      <div
        ref={componentRef}
        className="w-96 h-56 border mt-10 mx-auto flex flex-row justify-center items-center"
      >
        <div className="relative w-80 h-48  bg-white text-center flex flex-row flex-wrap rounded-md border border-black">
          {/* <h2 className="text-2xl font-semibold border-b w-full border-blue-700 rounded-3xl pb-2">
            CENTRO DE FORMACIÓN LABORAL 404 BERISSO
          </h2> */}

          <h2 className="text-md text-[#176094] font-bold italic w-full text-center pt-2 h-fit">
            CREDENCIAL DE ALUMNO
          </h2>
          <div className="w-2/3 flex flex-col justify-between items-start p-2 px-4 z-30">
            <div className="text-start flex flex-col ">
              <span className="font-bold italic">
                {alumno.apellido ? alumno.apellido.toUpperCase() : false},{" "}
                {alumno.nombre ? alumno.nombre.toUpperCase() : false}
              </span>
              <span className="italic">DNI: {alumno.nro_dni}</span>
            </div>
            <div className=""></div>
            <QRCodeSVG
              size={72}
              className="relative rounded-sm z-50"
              value={`${alumno.id_alumno}.`}
            />
          </div>
          <div>
            <img
              src={Detalle}
              alt=""
              className="absolute w-86 top-10 right-0"
            />
          </div>
          <div className="w-1/3 flex flex-col justify-between items-center z-30">
            <img className="w-28 absolute top-6 right-0" src={Logo} alt="" />
            <span className="text-[#176094] font-semibold italic mb-2 mt-auto ml-6 text-center">
              cfl404.ar
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => exportComponentAsJPEG(componentRef)}
        className="btn btn-info bg-blue-400 text-white hover:text-black hover:bg-blue-100 border border-white m-4 absolute top-0 left-0"
      >
        Descargar JPEG
      </button>
      <button
        onClick={() => exportComponentAsPNG(componentRef)}
        className="btn btn-info bg-blue-400 text-white hover:text-black hover:bg-blue-100 border border-white m-4 absolute top-20 left-0"
      >
        Descargar PNG
      </button>
    </div>
  );
}
