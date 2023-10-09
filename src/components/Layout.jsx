import { Outlet } from "react-router-dom";
import "./Layout.scss";
import NavBar from "./NavBar";
import { useContext } from "react";
import UserContext from "../context/user.context";

export function Layout() {
  const userContext = useContext(UserContext)
  const usuario = userContext.userData
  return (
    <>
      {usuario.id_rol?<NavBar />:false}
      <Outlet />
    </>
  );
}
