import { getAlumnos } from "../services/Login.services";

function Login() {
  /*   function ingresar(ev) {
    ev.preventDefault();
    let usuario = ev.target.nombreUsuario.value;
  } */
  async function fetchAlumnos(){
      let res= await getAlumnos()
      return await res
  } 
  const alumnos = fetchAlumnos()

  console.log(alumnos)

  return (
    <>
      <h1>Hello world!</h1>
      <form action="">
        <input id="nombreUsuario" type="text" />
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}

export default Login;
