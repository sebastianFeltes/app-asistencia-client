import { useRef } from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";

import { QRCodeSVG } from "qrcode.react";
import Logo from "../assets/logo-CFL404-color.png";
import Detalle from "../assets/detalle-bandera-credencial.png";

export default function GeneradorQR({ alumno }) {
  const componentRef = useRef();

  const exportAsPNG = () => {
    const node = componentRef.current;

    html2canvas(node, { scale: 2 })
      .then(function (canvas) {
        canvas.toBlob(function (blob) {
          saveAs(blob, "credencial.png");
        });
      })
      .catch(function (error) {
        console.error("Error al exportar como PNG:", error);
      });
  };

  const exportAsPDF = () => {
    const node = componentRef.current;

    html2canvas(node)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgWidth = 600; // Establece el ancho de la imagen en mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calcula la altura proporcional
        pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight); // Agrega la imagen al PDF
        pdf.save("credencial.pdf"); // Guarda el PDF
      })
      .catch(function (error) {
        console.error("Error al exportar como PDF:", error);
      });
  };

  return (
    <div>
      <div
        ref={componentRef}
        className="bg-white w-fit mt-10 mx-auto flex flex-row justify-center items-center"
      >
        <div className="relative w-[400px] h-[220px] bg-white text-center flex flex-row flex-wrap rounded-md border border-black">
          <h2 className="text-md text-[#176094] font-bold italic w-full pr-[100px] pt-2 h-fit">
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
              size={86}
              className="relative rounded-sm z-50"
              value={`${alumno.id_alumno}.`}
            />
          </div>
          <div>
            <img
              src={Detalle}
              alt=""
              className="absolute w-86 top-[20px] right-0"
            />
          </div>
          <div className="w-1/3 flex flex-col justify-between items-center z-30">
            <img
              className="w-[140px] absolute top-1 right-0"
              src={Logo}
              alt=""
            />
            <span className="text-[#176094] font-semibold italic mb-8 mt-auto ml-6 text-center">
              cfl404.ar
            </span>
          </div>
        </div>
      </div>
      <div className="absolute z-50 top-0">
        <button
          onClick={exportAsPNG}
          className="btn btn-info bg-blue-400 text-white hover:text-black hover:bg-blue-100 border border-white m-4"
        >
          Descargar PNG
        </button>

        <button
          onClick={exportAsPDF}
          className="btn btn-info bg-blue-400 text-white hover:text-black hover:bg-blue-100 border border-white m-4"
        >
          Descargar PDF
        </button>
      </div>
    </div>
  );
}
