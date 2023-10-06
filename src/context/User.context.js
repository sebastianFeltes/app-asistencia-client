import { createContext } from "react";

export const UserContext = createContext({
  idUsuario: 1,
  nombreUsuario: "Sebastian",
  apellidoUsuario: "Feltes",
  rolUsuario: 2,
});