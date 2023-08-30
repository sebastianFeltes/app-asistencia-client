import { postNuevoUsuario } from "../services/Login.services";

function Login() {
  /*   function ingresar(ev) {
    ev.preventDefault();
    let usuario = ev.target.nombreUsuario.value;
  } */

  async function post (e){
    e.preventDefault();
    const res = await postNuevoUsuario();
    return res;

  }

  return (
    <>
      <h1>Hello world!</h1>
      <form action="" onSubmit={e=>post(e)}>
        <input id="nombreUsuario" type="text" />
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}

export default Login;
