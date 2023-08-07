import { Outlet } from "react-router-dom";
import "./Layout.scss";

export function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}
