import { Outlet } from "react-router-dom";
import "./Layout.scss";
import NavBar from "./NavBar";

export function Layout() {
  const logged=true
  return (
    <>
      {logged?<NavBar />:false}
      <Outlet />
    </>
  );
}
