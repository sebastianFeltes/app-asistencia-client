import { TraerAlumnos } from "../services/Layout.services";

export default function HomeAdmin() {
  let data = TraerAlumnos();

  console.log(data);

  const tableBody = data.map((e) => (
    <>
      <tr key={e}>
        <td>{e.nombre}</td>
        <td>{e.dni}</td>
        <td>{e.direccion}</td>
        <td>{e.telefono}</td>
      </tr>
    </>
  ));

  return (
    <>
      <table>
        <thead>
          <td>Nombre</td>
          <td>dni</td>
          <td>direccion</td>
          <td>telefono</td>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </table>
    </>
  );
}
