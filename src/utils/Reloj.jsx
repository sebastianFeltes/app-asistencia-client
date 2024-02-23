import { useState, useEffect } from "react";
import "./reloj.css";

function Reloj() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(intervalID);
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez, similar a componentDidMount

  const formattedDate = `${time.getDate().toString().padStart(2, "0")}/${(
    time.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${time.getFullYear()}`;

  return (
    <div className="border w-1/3 rounded-lg shadow-md shadow-blue-600 p-4">
      <p className="text-2xl text-blue-800">{formattedDate}</p>
      <div className="text-5xl text-blue-600">
        <span className="hour-animation">{time.getHours().toString().padStart(2, "0")}:</span>
        <span className="minute-animation">{time.getMinutes().toString().padStart(2, "0")}:</span>
        <span className="second-animation">{time.getSeconds().toString().padStart(2, "0")}</span>
      </div>
    </div>
  );
}

export default Reloj;
